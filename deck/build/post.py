"""Post-process the pptxgenjs output:
  1. click-to-appear animations for every shape named b<N>:... (N = click index)
  2. amber cross-hatch pattern fill for shapes named ...hatch...
  3. speaker notes: turn newlines into paragraphs
"""
import re, sys, zipfile, shutil, os
from xml.sax.saxutils import escape

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, 'deck-raw.pptx')
DST = sys.argv[2] if len(sys.argv) > 2 else os.path.join(HERE, '..', 'beyond-the-coding-agent.pptx')

NAME_RE = re.compile(r'<p:cNvPr id="(\d+)" name="([^"]*)"')


def timing_xml(builds):
    """builds: list (in click order) of lists of shape ids."""
    nid = [1]
    def next_id():
        nid[0] += 1
        return nid[0]
    parts = []
    parts.append('<p:timing><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst>')
    parts.append('<p:seq concurrent="1" nextAc="seek"><p:cTn id="%d" dur="indefinite" nodeType="mainSeq"><p:childTnLst>' % next_id())
    for group in builds:
        parts.append('<p:par><p:cTn id="%d" fill="hold"><p:stCondLst><p:cond delay="indefinite"/></p:stCondLst><p:childTnLst>' % next_id())
        parts.append('<p:par><p:cTn id="%d" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>' % next_id())
        for i, spid in enumerate(group):
            node_type = 'clickEffect' if i == 0 else 'withEffect'
            parts.append('<p:par><p:cTn id="%d" presetID="1" presetClass="entr" presetSubtype="0" fill="hold" nodeType="%s">' % (next_id(), node_type))
            parts.append('<p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>')
            parts.append('<p:set><p:cBhvr><p:cTn id="%d" dur="1" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst></p:cTn>' % next_id())
            parts.append('<p:tgtEl><p:spTgt spid="%s"/></p:tgtEl><p:attrNameLst><p:attrName>style.visibility</p:attrName></p:attrNameLst></p:cBhvr>' % spid)
            parts.append('<p:to><p:strVal val="visible"/></p:to></p:set></p:childTnLst></p:cTn></p:par>')
        parts.append('</p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par>')
    parts.append('</p:childTnLst></p:cTn>')
    parts.append('<p:prevCondLst><p:cond evt="onPrev" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:prevCondLst>')
    parts.append('<p:nextCondLst><p:cond evt="onNext" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:nextCondLst>')
    parts.append('</p:seq></p:childTnLst></p:cTn></p:par></p:tnLst>')
    all_ids = [spid for g in builds for spid in g]
    parts.append('<p:bldLst>' + ''.join('<p:bldP spid="%s" grpId="0" animBg="1"/>' % s for s in all_ids) + '</p:bldLst>')
    parts.append('</p:timing>')
    return ''.join(parts)


def strip_stray_ppr(xml):
    """pptxgenjs writes an <a:pPr> before every run of a multi-run paragraph; only the first is valid."""
    def fix(m):
        para = m.group(0)
        first = re.search(r'<a:pPr\b[^>]*/>|<a:pPr\b[^>]*>.*?</a:pPr>', para, flags=re.S)
        if not first:
            return para
        head = para[:first.end()]
        tail = para[first.end():]
        tail = re.sub(r'<a:pPr\b[^>]*/>|<a:pPr\b[^>]*>.*?</a:pPr>', '', tail, flags=re.S)
        return head + tail
    return re.sub(r'<a:p>.*?</a:p>', fix, xml, flags=re.S)


def process_slide(xml):
    xml = strip_stray_ppr(xml)
    # split into top-level shape blocks to know which ids are <p:sp> (bldP applies) vs pictures
    builds = {}
    sp_ids = set()
    for m in re.finditer(r'<p:(sp|pic)>.*?</p:\1>', xml, flags=re.S):
        block = m.group(0)
        nm = NAME_RE.search(block)
        if not nm:
            continue
        spid, name = nm.group(1), nm.group(2)
        if m.group(1) == 'sp':
            sp_ids.add(spid)
        b = re.match(r'b(\d+):', name)
        if b:
            builds.setdefault(int(b.group(1)), []).append(spid)
    # hatch fills: replace the shape's own solidFill (the one right after prstGeom) with a pattern fill
    def hatch(m):
        block = m.group(0)
        nm = NAME_RE.search(block)
        if not nm or 'hatch' not in nm.group(2):
            return block
        patt = ('<a:pattFill prst="wdUpDiag"><a:fgClr><a:srgbClr val="FDAD00"><a:alpha val="70000"/></a:srgbClr></a:fgClr>'
                '<a:bgClr><a:srgbClr val="1C1F27"/></a:bgClr></a:pattFill>')
        return re.sub(r'(</a:prstGeom>)<a:solidFill>.*?</a:solidFill>', r'\1' + patt, block, count=1, flags=re.S)
    xml = re.sub(r'<p:sp>.*?</p:sp>', hatch, xml, flags=re.S)
    if builds:
        order = [builds[k] for k in sorted(builds)]
        t = timing_xml(order)
        # pictures cannot take bldP entries; drop those
        pic_ids = {s for g in order for s in g if s not in sp_ids}
        for pid in pic_ids:
            t = t.replace('<p:bldP spid="%s" grpId="0" animBg="1"/>' % pid, '')
        xml = xml.replace('</p:clrMapOvr>', '</p:clrMapOvr>' + t, 1)
    return xml, [len(g) for g in (builds[k] for k in sorted(builds))]


def process_notes(xml):
    def fix(m):
        text = m.group(1)
        if '\n' not in text:
            return m.group(0)
        paras = text.split('\n')
        out = []
        for p in paras:
            out.append('<a:p><a:r><a:rPr lang="en-US" dirty="0"/><a:t>%s</a:t></a:r></a:p>' % p)
        return ''.join(out)
    return re.sub(r'<a:p><a:r><a:rPr lang="en-US" dirty="0"/><a:t>(.*?)</a:t></a:r><a:endParaRPr lang="en-US" dirty="0"/></a:p>', fix, xml, flags=re.S)


zin = zipfile.ZipFile(SRC)
zout = zipfile.ZipFile(DST, 'w', zipfile.ZIP_DEFLATED)
report = []
for item in zin.infolist():
    data = zin.read(item.filename)
    if re.match(r'ppt/slides/slide\d+\.xml$', item.filename):
        xml, counts = process_slide(data.decode('utf-8'))
        data = xml.encode('utf-8')
        report.append((item.filename, counts))
    elif re.match(r'ppt/notesSlides/notesSlide\d+\.xml$', item.filename):
        data = process_notes(data.decode('utf-8')).encode('utf-8')
    zout.writestr(item, data)
zout.close()
for f, c in sorted(report, key=lambda r: int(re.search(r'\d+', r[0]).group())):
    print(f, 'clicks:', len(c), 'shapes per click:', c)
