// Parses the slide markdown files for speaker notes: title, time, script, first cut.
const fs = require('fs');
const path = require('path');

const DIR = path.resolve(__dirname, '..', '..', 'slides');
const FILES = ['00-cold-open.md', '01-the-line.md', '02-anatomy.md', '03-transition.md', '04-close.md'];

function section(block, name) {
  // returns the text between "**name**" and the next "**...**" heading at line start
  const re = new RegExp('\\*\\*' + name + '\\*\\*\\s*\\n([\\s\\S]*?)(?=\\n\\*\\*[A-Z][^*]*\\*\\*\\s*\\n|$)');
  const m = block.match(re);
  return m ? m[1].trim() : '';
}

function parse() {
  const out = {};
  for (const f of FILES) {
    const md = fs.readFileSync(path.join(DIR, f), 'utf8');
    const parts = md.split(/\n### Slide /).slice(1);
    for (const p of parts) {
      const head = p.match(/^(\d+): (.*)\n/);
      if (!head) continue;
      const n = parseInt(head[1], 10);
      const title = head[2].trim();
      const meta = p.match(/\*\*Time:\*\* ([\d:]+) \| \*\*Script target:\*\* (about \d+ words)/);
      const script = section(p, 'Script');
      const cut = section(p, 'Cut if running long');
      out[n] = { n, title, time: meta ? meta[1] : '', words: meta ? meta[2] : '', script, cut };
    }
  }
  return out;
}

function notesText(entry) {
  const lines = [];
  lines.push(`Slide ${entry.n}: ${entry.title}`);
  lines.push(`Time ${entry.time}, ${entry.words}. Cues: [BUILD] is a click; [POINT] is where to gesture.`);
  lines.push('');
  lines.push(entry.script);
  lines.push('');
  lines.push('CUT IF RUNNING LONG');
  lines.push(entry.cut);
  return lines.join('\n');
}

module.exports = { parse, notesText };

if (require.main === module) {
  const all = parse();
  console.log(Object.keys(all).length, 'slides parsed');
  for (const k of Object.keys(all)) {
    const e = all[k];
    console.log(k, e.title, e.time, e.words, 'script', e.script.length, 'cut', e.cut.length);
  }
  console.log('\n---\n' + notesText(all[10]));
}
