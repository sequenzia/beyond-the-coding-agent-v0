// Shared helpers for the deck. All colors are from style/design-brief.md.
// Muted, dimmed and border are the brief's opacities pre-blended onto the base.
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const sharp = require('sharp');

const C = {
  base: '14161C',
  text: 'FFFCF5',
  muted: 'A1A09E',   // off-white at 60% on base
  dimmed: '727273',  // off-white at 40% on base
  surface: '1C1F27',
  border: '303236',  // off-white at 12% on base
  pink: 'F948BE',
  blue: '1064F8',
  green: '01B66D',
  amber: 'FDAD00',
};
const SANS = 'Helvetica Neue';
const MONO = 'Menlo';

const W = 13.333, H = 7.5, M = 0.8, CW = W - 2 * M; // 11.733
const GUT = 0.25;
const COL = (CW - 11 * GUT) / 12; // 0.7486
const colX = (i) => M + i * (COL + GUT);          // left edge of column i (0-based)
const colW = (n) => n * COL + (n - 1) * GUT;      // width of n columns
const RADIUS = 0.06;  // 8 px at 1920 wide
const TITLE = 'Beyond the Coding Agent: From Software Engineer to AI Engineer';

let pres = null;
function setPres(p) { pres = p; }

// ---------- text ----------
function T(slide, text, o = {}) {
  const opts = {
    x: o.x, y: o.y, w: o.w, h: o.h,
    isTextBox: true,
    margin: o.margin === undefined ? 0 : o.margin,
    fontFace: o.font || SANS,
    fontSize: o.size || 20,
    color: o.color || C.text,
    bold: !!o.bold,
    italic: !!o.italic,
    align: o.align || 'left',
    valign: o.valign || 'top',
    lineSpacingMultiple: o.lh || 1.2,
    paraSpaceAfter: o.paraAfter || 0,
    charSpacing: o.tracking,
    fit: o.fit,
  };
  if (o.rotate) opts.rotate = o.rotate;
  if (o.name) opts.objectName = o.name;
  if (o.fill) opts.fill = { color: o.fill };
  if (o.line) opts.line = o.line;
  if (o.rectRadius !== undefined) { opts.rectRadius = o.rectRadius; opts.shape = pres.ShapeType.roundRect; }
  slide.addText(text, opts);
}

// Bulleted body text. items: array of strings or arrays of runs.
function bullets(slide, items, o = {}) {
  const arr = [];
  items.forEach((it, i) => {
    const runs = Array.isArray(it) ? it : [{ text: it }];
    runs.forEach((r, j) => {
      const isLast = j === runs.length - 1;
      const ro = Object.assign({}, r.options || {});
      if (j === 0) { ro.bullet = { indent: o.indent || 22 }; if (i < items.length - 1) ro.paraSpaceAfter = o.paraAfter || 10; }
      if (r.color) ro.color = r.color;
      if (r.bold) ro.bold = true;
      if (r.italic) ro.italic = true;
      if (r.font) ro.fontFace = r.font;
      if (isLast && i < items.length - 1) ro.breakLine = true;
      arr.push({ text: r.text, options: ro });
    });
  });
  const opts = {
    x: o.x, y: o.y, w: o.w, h: o.h, isTextBox: true, margin: 0,
    fontFace: SANS, fontSize: o.size || 20, color: o.color || C.text,
    valign: o.valign || 'top', lineSpacingMultiple: o.lh || 1.3,
  };
  if (o.name) opts.objectName = o.name;
  slide.addText(arr, opts);
}

// ---------- shapes ----------
function rect(slide, o) {
  const opts = { x: o.x, y: o.y, w: o.w, h: o.h };
  opts.fill = o.fill ? { color: o.fill, transparency: o.transparency || 0 } : { type: 'none' };
  opts.line = o.stroke ? { color: o.stroke, width: o.strokeW || 1, dashType: o.dash || 'solid' } : { type: 'none' };
  if (o.name) opts.objectName = o.name;
  if (o.rotate) opts.rotate = o.rotate;
  const shape = o.radius === 0 ? pres.ShapeType.rect : pres.ShapeType.roundRect;
  if (shape === pres.ShapeType.roundRect) opts.rectRadius = o.radius === undefined ? RADIUS : o.radius;
  slide.addShape(shape, opts);
}
function ellipse(slide, o) {
  const opts = { x: o.x, y: o.y, w: o.w, h: o.h };
  opts.fill = o.fill ? { color: o.fill, transparency: o.transparency || 0 } : { type: 'none' };
  opts.line = o.stroke ? { color: o.stroke, width: o.strokeW || 1, dashType: o.dash || 'solid' } : { type: 'none' };
  if (o.name) opts.objectName = o.name;
  slide.addShape(pres.ShapeType.ellipse, opts);
}
function circle(slide, cx, cy, r, o = {}) { ellipse(slide, Object.assign({ x: cx - r, y: cy - r, w: 2 * r, h: 2 * r }, o)); }
function triangle(slide, o) {
  const opts = { x: o.x, y: o.y, w: o.w, h: o.h, fill: { color: o.fill }, line: { type: 'none' }, rotate: o.rotate || 0 };
  if (o.name) opts.objectName = o.name;
  slide.addShape(pres.ShapeType.triangle, opts);
}
// straight line from (x1,y1) to (x2,y2); arrowhead at (x2,y2) when o.arrow
function line(slide, x1, y1, x2, y2, o = {}) {
  const x = Math.min(x1, x2), y = Math.min(y1, y2);
  const w = Math.abs(x2 - x1), h = Math.abs(y2 - y1);
  const opts = {
    x, y, w, h,
    line: { color: o.color || C.muted, width: o.width || 2, dashType: o.dash || 'solid' },
    flipH: x2 < x1, flipV: y2 < y1,
  };
  if (o.arrow) opts.line.endArrowType = 'triangle';
  if (o.startArrow) opts.line.beginArrowType = 'triangle';
  if (o.name) opts.objectName = o.name;
  slide.addShape(pres.ShapeType.line, opts);
}
// elbow path through points; arrowhead on the last segment
function path(slide, pts, o = {}) {
  for (let i = 0; i < pts.length - 1; i++) {
    const last = i === pts.length - 2;
    line(slide, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], Object.assign({}, o, { arrow: last && o.arrow, name: o.name ? `${o.name}-${i}` : undefined }));
  }
}

// a filled pill/box with centered text
function pill(slide, o) {
  const opts = {
    x: o.x, y: o.y, w: o.w, h: o.h, isTextBox: true, margin: 0.04,
    shape: pres.ShapeType.roundRect, rectRadius: o.radius === undefined ? RADIUS : o.radius,
    fontFace: o.font || SANS, fontSize: o.size || 16, bold: o.bold !== false, color: o.color || C.base,
    align: 'center', valign: 'middle', lineSpacingMultiple: o.lh || 1.1, charSpacing: o.tracking,
    fill: o.fill ? { color: o.fill } : { type: 'none' },
    line: o.stroke ? { color: o.stroke, width: o.strokeW || 1, dashType: o.dash || 'solid' } : { type: 'none' },
  };
  if (o.name) opts.objectName = o.name;
  slide.addText(o.text, opts);
}

// ---------- chrome ----------
function footer(slide, n) {
  T(slide, TITLE, { x: M, y: 6.98, w: 8, h: 0.28, size: 14, color: C.muted, valign: 'middle' });
  T(slide, String(n), { x: W - M - 1.2, y: 6.98, w: 1.2, h: 0.28, size: 14, color: C.muted, align: 'right', valign: 'middle' });
}
function title(slide, text, o = {}) {
  const size = o.size || (text.length <= 36 ? 40 : text.length <= 70 ? 36 : 34);
  const h = o.h || (size >= 40 && text.length <= 36 ? 0.75 : 1.2);
  T(slide, text, { x: o.x || M, y: o.y || 0.5, w: o.w || CW, h, size, bold: true, color: o.color || C.text, lh: 1.1, tracking: -1, valign: 'top', name: o.name });
  return (o.y || 0.5) + h;
}
function newSlide(n, notes) {
  const s = pres.addSlide();
  s.background = { color: C.base };
  footer(s, n);
  if (notes) s.addNotes(notes);
  return s;
}

// ---------- icons ----------
const iconCache = {};
async function iconData(Icon, hex) {
  const key = Icon.name + hex;
  if (iconCache[key]) return iconCache[key];
  const svg = ReactDOMServer.renderToStaticMarkup(React.createElement(Icon, { color: '#' + hex, size: 512 }));
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  iconCache[key] = 'image/png;base64,' + png.toString('base64');
  return iconCache[key];
}
async function icon(slide, Icon, hex, o) {
  const data = await iconData(Icon, hex);
  const opts = { data, x: o.x, y: o.y, w: o.w, h: o.h || o.w };
  if (o.name) opts.objectName = o.name;
  slide.addImage(opts);
}

// ---------- the ring map ----------
// variant: 'base' (slide 5), 'labeled' (slide 14), 'bare' (slide 19)
// builds: { harness: N, ops: N } build indexes for the harness ring and the outer ring (base only)
function ringMap(slide, cx, cy, o = {}) {
  const s = o.scale || 1;
  const variant = o.variant || 'base';
  const b = o.builds || {};
  const nm = (build, tag) => (build ? `b${build}:${tag}` : tag);
  const R = { disc: 0.8 * s, loop: 1.5 * s, harness: 2.35 * s, ops: 3.05 * s };
  const strokeW = 13 * s; // points
  const pos = (r, deg) => { const t = deg * Math.PI / 180; return [cx + r * Math.sin(t), cy - r * Math.cos(t)]; };

  // rings (outer first so inner rings sit on top)
  circle(slide, cx, cy, R.ops, { stroke: C.muted, strokeW, name: nm(b.ops, 'ring-ops') });
  circle(slide, cx, cy, R.harness, { stroke: C.green, strokeW, name: nm(b.harness, 'ring-harness') });
  circle(slide, cx, cy, R.loop, { stroke: C.blue, strokeW, name: 'ring-loop' });
  circle(slide, cx, cy, R.disc, { fill: C.amber, name: 'disc-model' });

  const lab = (text, r, deg, w, h, fill, color, build, tag, size) => {
    const [x, y] = pos(r, deg);
    pill(slide, { text, x: x - w / 2, y: y - h / 2, w, h, fill, color, size: size || 16, name: nm(build, tag), stroke: fill === C.blue ? C.text : undefined, strokeW: 1 });
  };
  const dot = (r, deg, fill, build, tag) => { const [x, y] = pos(r, deg); circle(slide, x, y, 0.09 * s + 0.05, { fill, stroke: C.base, strokeW: 1.5, name: nm(build, tag) }); };

  // direction markers on the loop ring (clockwise)
  [60, 180, 300].forEach((deg, i) => {
    const [x, y] = pos(R.loop, deg);
    const t = 0.2 * s + 0.04;
    triangle(slide, { x: x - t / 2, y: y - t / 2, w: t, h: t, fill: C.text, rotate: deg + 90, name: `tri-${i}` });
  });

  if (variant === 'bare') {
    T(slide, 'Model', { x: cx - R.disc, y: cy - R.disc, w: 2 * R.disc, h: 2 * R.disc, size: 16, bold: true, color: C.base, align: 'center', valign: 'middle' });
    [0, 120, 240].forEach((d, i) => dot(R.loop, d, C.blue, null, `dot-loop-${i}`));
    dot(R.harness, 180, C.green, null, 'dot-harness');
    [45, 135, 225, 315].forEach((d, i) => dot(R.ops, d, C.text, null, `dot-ops-${i}`));
    return;
  }

  const L = variant === 'labeled';
  T(slide, L ? '2.1\nThe model' : 'Model', { x: cx - R.disc, y: cy - R.disc, w: 2 * R.disc, h: 2 * R.disc, size: L ? 18 : 22, bold: true, color: C.base, align: 'center', valign: 'middle', lh: 1.1 });
  // loop steps
  lab(L ? '2.2 Context' : 'Gather context', R.loop, 0, L ? 1.35 : 1.6, 0.42, C.blue, C.text, null, 'step-gather');
  lab(L ? '2.3 Tools' : 'Act\nthrough\na tool', R.loop, 120, L ? 1.1 : 1.0, L ? 0.42 : 0.84, C.blue, C.text, null, 'step-act');
  lab(L ? '2.4 Verify' : 'Verify', R.loop, 240, L ? 1.1 : 0.95, 0.42, C.blue, C.text, null, 'step-verify');
  if (!L) {
    const [rx, ry] = pos(R.loop + 0.42, 300);
    T(slide, 'repeat', { x: rx - 0.45, y: ry - 0.14, w: 0.8, h: 0.28, size: 16, color: C.muted, align: 'center', valign: 'middle' });
  }
  // harness
  lab(L ? '2.4 Harness' : 'Harness', R.harness, 180, L ? 1.35 : 1.1, 0.42, C.green, C.base, b.harness, 'lab-harness');
  // ops
  const ops = L ? ['2.5 Evaluate', '2.6 Observe', '2.6 Secure', '2.6 Govern'] : ['Evaluate', 'Observe', 'Secure', 'Govern'];
  [45, 135, 225, 315].forEach((d, i) => lab(ops[i], R.ops, d, L ? 1.4 : 1.15, 0.42, C.text, C.base, b.ops, `lab-ops-${i}`));
}

module.exports = { C, SANS, MONO, W, H, M, CW, GUT, COL, colX, colW, RADIUS, TITLE, setPres, T, bullets, rect, ellipse, circle, triangle, line, path, pill, footer, title, newSlide, icon, ringMap };
