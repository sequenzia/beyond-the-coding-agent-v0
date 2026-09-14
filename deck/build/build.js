// Builds the 19-slide deck (20 physical slides; slide 1 is two) from the slide files and the design brief.
const pptxgen = require('pptxgenjs');
const { FaKey, FaCodeBranch, FaDoorClosed, FaBox, FaCommentDots, FaBook, FaCheck } = require('react-icons/fa');
const L = require('./lib');
const { C, SANS, MONO, W, H, M, CW, colX, colW, RADIUS, T, bullets, rect, circle, triangle, line, path, pill, title, newSlide, icon, ringMap } = L;
const { parse, notesText } = require('./notes');

const NOTES = parse();
const notes = (n) => notesText(NOTES[n]);

async function main() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_WIDE';
  pres.author = 'Beyond the Coding Agent';
  pres.title = L.TITLE;
  L.setPres(pres);

  // ---------------------------------------------------------------- 1 (statement)
  {
    const s = newSlide(1, notes(1));
    circle(s, 12.8, 0.2, 1.9, { stroke: C.pink, strokeW: 22 });
    T(s, 'You shipped code this week that you did not read.', { x: 1.2, y: 2.15, w: 10.9, h: 3.2, size: 64, bold: true, align: 'center', valign: 'middle', lh: 1.1, tracking: -2 });
  }
  // ---------------------------------------------------------------- 1 (built)
  {
    const s = newSlide(1, notes(1));
    circle(s, 12.8, 0.2, 1.9, { stroke: C.pink, strokeW: 22 });
    title(s, 'You shipped code this week that you did not read.', { w: 9.6 });
    T(s, [{ text: 'Using AI makes you an ' }, { text: 'AI-enabled software engineer', options: { color: C.pink, bold: true } }, { text: '.' }],
      { x: M, y: 2.75, w: CW, h: 0.5, size: 24 });
    T(s, [{ text: 'Engineering systems whose behavior depends on AI makes you an ' }, { text: 'AI engineer', options: { color: C.pink, bold: true } }, { text: '.' }],
      { x: M, y: 3.4, w: 10.5, h: 0.9, size: 24 });
  }

  // ---------------------------------------------------------------- 2
  {
    const s = newSlide(2, notes(2));
    title(s, 'Same tools, different deliverable.');
    const y = 1.85, h = 2.5, cw = 3.5;
    const cards = [
      { x: 0.8, t: 'Software engineers enhanced by AI', sub: 'Same coding agent. Ships software.' },
      { x: 5.0, t: 'Software engineers building AI products', sub: 'Ships a system that calls a model at runtime.' },
      { x: 8.85, t: 'Non-human software engineers', sub: 'The agents themselves.', dim: true },
    ];
    cards.forEach((c) => {
      rect(s, { x: c.x, y, w: cw, h, fill: C.surface, stroke: c.dim ? C.dimmed : C.border, strokeW: 1 });
      T(s, c.t, { x: c.x + 0.3, y: y + 0.3, w: cw - 0.6, h: 1.2, size: 20, bold: true, color: c.dim ? C.dimmed : C.text, lh: 1.15 });
      T(s, c.sub, { x: c.x + 0.3, y: y + 1.6, w: cw - 0.6, h: 0.7, size: 18, color: c.dim ? C.dimmed : C.muted, lh: 1.25 });
    });
    line(s, 4.4, y + 1.0, 4.9, y + 1.0, { color: C.pink, width: 3, arrow: true });
    T(s, 'this talk', { x: 4.15, y: y + 1.1, w: 1.0, h: 0.3, size: 16, color: C.pink, align: 'center', bold: true });
    T(s, 'swyx, 2023, restated 2025', { x: 0.8, y: y + h + 0.15, w: 6, h: 0.3, size: 16, color: C.muted });
    T(s, [{ text: 'The deliverable is the test. ', options: { bold: true } }, { text: 'Does the shipped system call a model at runtime?' }],
      { x: M, y: 5.3, w: CW, h: 0.9, size: 24, lh: 1.3 });
  }

  // ---------------------------------------------------------------- 3
  {
    const s = newSlide(3, notes(3));
    T(s, 'Demo is works.any(). Product is works.all().', { x: M, y: 0.5, w: CW, h: 0.7, size: 30, font: MONO, color: C.text, valign: 'middle' });
    T(s, 'Andrej Karpathy, June 2025', { x: M, y: 1.22, w: CW, h: 0.3, size: 16, color: C.muted });
    T(s, 'Jagged. Non-deterministic. Amnesiac at every context boundary.', { x: M, y: 1.8, w: CW, h: 0.45, size: 20, color: C.text });
    // arithmetic row
    const by = 2.6, bh = 1.6, bw = 1.9;
    const boxes = [0.8, 3.3, 5.8];
    boxes.forEach((x, i) => {
      const b = i === 0 ? 1 : 2;
      rect(s, { x, y: by, w: bw, h: bh, fill: C.surface, stroke: C.border, name: `b${b}:box${i}` });
      T(s, '75%', { x, y: by, w: bw, h: bh, size: 60, bold: true, color: C.pink, align: 'center', valign: 'middle', name: `b${b}:num${i}` });
      if (i > 0) T(s, '×', { x: x - 0.6, y: by, w: 0.6, h: bh, size: 40, color: C.text, align: 'center', valign: 'middle', name: `b2:times${i}` });
    });
    T(s, '=', { x: 7.75, y: by, w: 0.7, h: bh, size: 48, color: C.text, align: 'center', valign: 'middle', name: 'b3:eq' });
    T(s, '42%', { x: 8.45, y: by - 0.2, w: 4.1, h: bh + 0.4, size: 110, bold: true, color: C.pink, align: 'left', valign: 'middle', name: 'b3:answer', tracking: -3 });
    T(s, 'Anthropic, January 2026', { x: M, y: by + bh + 0.15, w: 6, h: 0.3, size: 16, color: C.muted });
    T(s, 'Retaining principles, relinquishing patterns.', { x: M, y: 5.5, w: CW, h: 0.5, size: 24, italic: true, color: C.text });
    T(s, 'Thoughtworks Technology Radar, April 2026', { x: M, y: 6.0, w: CW, h: 0.3, size: 16, color: C.muted });
  }

  // ---------------------------------------------------------------- 4
  {
    const s = newSlide(4, notes(4));
    const by = title(s, 'Start with a workflow. Add autonomy when it demonstrably improves outcomes.');
    T(s, [{ text: 'Workflow: ', options: { bold: true } }, { text: 'LLMs and tools orchestrated through predefined code paths.' }], { x: M, y: by + 0.1, w: CW, h: 0.4, size: 20 });
    T(s, [{ text: 'Agent: ', options: { bold: true } }, { text: 'LLMs dynamically direct their own processes and tool usage.' }], { x: M, y: by + 0.5, w: CW, h: 0.4, size: 20 });
    T(s, 'Anthropic, December 2024', { x: M, y: by + 0.92, w: CW, h: 0.3, size: 16, color: C.muted });
    const ly = 3.15;
    line(s, 1.8, ly, 11.65, ly, { color: C.muted, width: 2 });
    T(s, 'workflow', { x: 0.5, y: ly - 0.15, w: 1.2, h: 0.3, size: 16, color: C.muted, align: 'right', valign: 'middle' });
    T(s, 'agent', { x: 11.75, y: ly - 0.15, w: 0.8, h: 0.3, size: 16, color: C.muted, valign: 'middle' });
    const cw = 2.71, gap = 0.3, cy = 3.4, ch = 3.3;
    const stops = [
      { t: 'One call', what: 'A completion, or one prompt that returns a snippet', who: 'You paste it' },
      { t: 'A workflow', what: 'Chat over your codebase: retrieve the relevant files, answer, on a fixed path', who: 'You decide and edit' },
      { t: 'Agent, read-only tools', what: 'Explore or plan mode: the model chooses which files to read and proposes a patch', who: 'You approve and apply' },
      { t: 'Agent, tiered actions', what: 'Edits files, runs commands behind a permission prompt, pushes when allowed', who: 'The agent, within tiers', hot: true },
    ];
    stops.forEach((c, i) => {
      const x = 0.8 + i * (cw + gap), b = i + 1;
      const cx = x + cw / 2;
      circle(s, cx, ly, 0.1, { fill: c.hot ? C.pink : C.muted, name: `b${b}:stop${i}` });
      line(s, cx, ly + 0.1, cx, cy, { color: C.muted, width: 1, name: `b${b}:tick${i}` });
      rect(s, { x, y: cy, w: cw, h: ch, fill: C.surface, stroke: c.hot ? C.pink : C.border, strokeW: c.hot ? 3 : 1, name: `b${b}:card${i}` });
      T(s, c.t, { x: x + 0.25, y: cy + 0.2, w: cw - 0.5, h: 0.75, size: 18, bold: true, color: c.hot ? C.pink : C.text, lh: 1.15, name: `b${b}:t${i}` });
      T(s, c.what, { x: x + 0.25, y: cy + 1.0, w: cw - 0.5, h: 1.5, size: 16, color: C.text, lh: 1.3, name: `b${b}:w${i}` });
      T(s, c.who, { x: x + 0.25, y: cy + ch - 0.8, w: cw - 0.5, h: 0.6, size: 16, bold: true, color: c.hot ? C.pink : C.muted, lh: 1.2, valign: 'bottom', name: `b${b}:who${i}` });
      if (!c.hot) rect(s, { x: x - 0.02, y: cy - 0.02, w: cw + 0.04, h: ch + 0.04, fill: C.base, transparency: 45, radius: RADIUS, name: `b4:dim${i}` });
    });
  }

  // ---------------------------------------------------------------- 5
  {
    const s = newSlide(5, notes(5));
    T(s, '"Agent = Model + Harness. If you\'re not the model, you\'re the harness."', { x: M, y: 0.5, w: 4.74, h: 2.1, size: 30, bold: true, color: C.pink, lh: 1.1, tracking: -1 });
    T(s, 'Addy Osmani, April 2026', { x: M, y: 2.65, w: 4.74, h: 0.3, size: 16, color: C.muted });
    const rows = [
      { c: C.amber, t: 'The model. It answers one call.', h: 0.4 },
      { c: C.blue, t: 'The loop: gather context, act through a tool, verify, repeat.', h: 0.7 },
      { c: C.green, t: 'The harness: state, budgets, boundaries.', h: 0.7, b: 1 },
      { c: C.muted, t: 'Across runs and in production: evaluate, observe, secure, govern.', h: 0.7, b: 2 },
    ];
    let y = 3.15;
    rows.forEach((r, i) => {
      const nm = r.b ? `b${r.b}:legend${i}` : undefined;
      circle(s, 0.95, y + 0.16, 0.11, { fill: r.c, name: nm ? nm + '-dot' : undefined });
      T(s, r.t, { x: 1.25, y, w: 4.3, h: r.h, size: 18, color: C.text, lh: 1.3, name: nm });
      y += r.h + 0.18;
    });
    ringMap(s, 9.16, 3.7, { variant: 'base', builds: { harness: 1, ops: 2 } });
  }

  // ---------------------------------------------------------------- 6
  {
    const s = newSlide(6, notes(6));
    const by = title(s, 'The model is a component you select, measure, and replace.');
    const cy = by + 0.35, ph = 0.6, pw = 1.9;
    const px = [0.8, 3.5, 6.2];
    ['SELECT', 'MEASURE', 'REPLACE'].forEach((t, i) => pill(s, { text: t, x: px[i], y: cy, w: pw, h: ph, fill: C.blue, color: C.text, size: 22, tracking: 2 }));
    line(s, px[0] + pw + 0.08, cy + ph / 2, px[1] - 0.08, cy + ph / 2, { arrow: true });
    line(s, px[1] + pw + 0.08, cy + ph / 2, px[2] - 0.08, cy + ph / 2, { arrow: true });
    // return path through the gate
    const ry = cy + ph + 0.95;
    path(s, [[px[2] + pw / 2, cy + ph + 0.08], [px[2] + pw / 2, ry], [px[0] + pw / 2, ry], [px[0] + pw / 2, cy + ph + 0.08]], { color: C.pink, width: 2.5, arrow: true });
    rect(s, { x: px[1] - 0.05, y: ry - 0.36, w: pw + 0.1, h: 0.72, fill: C.surface, stroke: C.green, strokeW: 2 });
    T(s, 'eval suite', { x: px[1] - 0.05, y: ry - 0.36, w: pw + 0.1, h: 0.72, size: 18, bold: true, color: C.green, align: 'center', valign: 'middle' });
    T(s, 'every model change passes through the gate on its way to production', { x: px[0], y: ry + 0.45, w: 7.3, h: 0.3, size: 16, color: C.muted, align: 'center' });
    // prop: deprecation notice (build 1)
    const nx = 9.25, ny = by + 0.2, nw = 3.28, nh = 2.45;
    rect(s, { x: nx, y: ny, w: nw, h: nh, fill: C.surface, stroke: C.border, radius: 0.03, name: 'b1:notice' });
    T(s, 'Deprecation notice', { x: nx + 0.25, y: ny + 0.2, w: nw - 0.5, h: 0.3, size: 16, color: C.muted, name: 'b1:notice-h' });
    T(s, 'Retirement date:\n2026-07-23', { x: nx + 0.25, y: ny + 0.6, w: nw - 0.5, h: 0.85, size: 20, font: MONO, color: C.text, lh: 1.25, name: 'b1:notice-t' });
    T(s, 'OpenAI deprecations page', { x: nx + 0.25, y: ny + nh - 0.45, w: nw - 0.5, h: 0.3, size: 16, color: C.muted, name: 'b1:notice-a' });
    T(s, 'RETIRED', { x: nx + 1.75, y: ny + 1.5, w: 1.3, h: 0.45, size: 18, bold: true, color: C.amber, align: 'center', valign: 'middle', rotate: -12, line: { color: C.amber, width: 2 }, rectRadius: 0.04, tracking: 2, name: 'b1:notice-stamp' });
    bullets(s, [
      'Baseline with the most capable model. Downgrade with evals. Route by task.',
      'Whenever code consumes the answer, ask for a schema, not prose.',
      'One migration every six to twelve months. Never change model and prompt in the same commit.',
    ], { x: M, y: 4.55, w: CW, h: 2.2, size: 20 });
  }

  // ---------------------------------------------------------------- 7
  {
    const s = newSlide(7, notes(7));
    const by = title(s, 'Context is a budget, not a bucket.');
    const segs = [['system\ninstructions', 1.83], ['the task', 1.35], ['conversation\nstate', 1.9], ['retrieved\nknowledge', 2.0], ['memory', 1.2], ['tool\ndefinitions', 1.85], ['tool results', 1.6]];
    const yb = by + 0.55, hb = 0.8;
    let x = M; const segx = [];
    segs.forEach(([t, w]) => {
      rect(s, { x, y: yb, w, h: hb, fill: C.surface, stroke: C.border, radius: 0 });
      T(s, t, { x, y: yb, w, h: hb, size: 16, color: C.text, align: 'center', valign: 'middle', lh: 1.1 });
      segx.push([x, w]); x += w;
    });
    const mx = M + CW * 0.83;
    line(s, mx, yb - 0.3, mx, yb + hb, { color: C.pink, width: 2 });
    T(s, 'attention degrades here', { x: mx - 2.6, y: yb - 0.35, w: 2.5, h: 0.3, size: 16, color: C.pink, align: 'right', valign: 'middle' });
    // build 1: untrusted hatching and the freshness stamp
    const task = segx[1], res = segx[6], ret = segx[3];
    const hatch = (hx, hw, nm) => {
      rect(s, { x: hx, y: yb + 0.52, w: hw, h: hb - 0.52, fill: C.surface, stroke: C.amber, strokeW: 1, radius: 0, name: `b1:hatch-${nm}` });
      rect(s, { x: hx, y: yb, w: hw, h: hb, stroke: C.amber, strokeW: 2, radius: 0, name: `b1:outline-${nm}` });
    };
    hatch(task[0] + 0.5, task[1] - 0.5, 'task');
    hatch(res[0], res[1], 'results');
    T(s, 'untrusted', { x: task[0], y: yb + hb + 0.05, w: task[1], h: 0.3, size: 16, bold: true, color: C.amber, align: 'center', name: 'b1:u1' });
    T(s, 'untrusted', { x: res[0], y: yb + hb + 0.05, w: res[1], h: 0.3, size: 16, bold: true, color: C.amber, align: 'center', name: 'b1:u2' });
    T(s, 'last reviewed:\n[date]', { x: ret[0] - 0.15, y: yb + hb + 0.1, w: ret[1] + 0.3, h: 0.62, size: 16, font: MONO, color: C.amber, align: 'center', valign: 'middle', line: { color: C.amber, width: 2 }, rectRadius: 0.04, lh: 1.1, name: 'b1:stamp' });
    bullets(s, [
      [{ text: '"Find the smallest set of high-signal tokens that maximize the likelihood of your desired outcome." ', italic: true }, { text: 'Anthropic, 2025', color: C.muted }],
      'Provenance and freshness are engineering properties.',
      'Tool results and retrieved documents enter with the same authority as your instructions. Label them.',
    ], { x: M, y: yb + hb + 1.0, w: CW, h: 2.6, size: 20 });
  }

  // ---------------------------------------------------------------- 8
  {
    const s = newSlide(8, notes(8));
    const by = title(s, 'Tiers are enforced outside the model.', { size: 36, h: 0.7 });
    const lw = colW(8);
    // the six-tool table
    const tx = M, ty = by + 0.08;
    const cols = [2.7, 1.85, lw - 4.55];
    const rows = [
      ['Read file', 'Read-only', C.blue, C.text, '', 0.32],
      ['Search the codebase', 'Read-only', C.blue, C.text, '', 0.32],
      ['List files', 'Read-only', C.blue, C.text, '', 0.32],
      ['Edit file', 'Reversible', C.muted, C.base, 'Git is the compensating action', 0.34],
      ['Run a command', 'Consequential', C.amber, C.base, 'Behind the permission prompt; the policy decides, not the model', 0.62],
      ['Push, or open\na pull request', 'External\ncommunication', C.amber, C.base, 'An outbound channel; see slide 13', 0.62],
    ];
    T(s, 'Tool', { x: tx, y: ty, w: cols[0], h: 0.28, size: 16, bold: true, color: C.muted, valign: 'middle' });
    T(s, 'Tier', { x: tx + cols[0], y: ty, w: cols[1], h: 0.28, size: 16, bold: true, color: C.muted, valign: 'middle', name: 'b1:tier-h' });
    T(s, 'Note', { x: tx + cols[0] + cols[1], y: ty, w: cols[2], h: 0.28, size: 16, bold: true, color: C.muted, valign: 'middle' });
    let y = ty + 0.28;
    line(s, tx, y, tx + lw, y, { color: C.border, width: 1 });
    rows.forEach((r, i) => {
      const h = r[5];
      T(s, r[0], { x: tx, y, w: cols[0], h, size: 16, font: MONO, color: C.text, valign: 'middle', lh: 1.1 });
      const two = r[1].includes('\n');
      pill(s, { text: r[1], x: tx + cols[0], y: y + (h - (two ? 0.5 : 0.28)) / 2, w: 1.7, h: two ? 0.5 : 0.28, fill: r[2], color: r[3], size: 16, name: `b1:tier${i}` });
      if (r[4]) T(s, r[4], { x: tx + cols[0] + cols[1], y: y + 0.03, w: cols[2], h: h - 0.06, size: 16, color: C.text, valign: 'middle', lh: 1.1 });
      y += h;
      line(s, tx, y, tx + lw, y, { color: C.border, width: 1 });
    });
    bullets(s, [
      [{ text: 'A tool is ' }, { text: '"a contract between deterministic systems and non-deterministic agents."', italic: true }, { text: ' MCP is how tools ship.' }],
      'Read-only. Reversible. Consequential. A policy layer decides, not the prompt.',
      'Sandbox: filesystem confinement, egress allowlist, credentials never inside.',
    ], { x: M, y: y + 0.2, w: lw, h: 2.3, size: 18, paraAfter: 4, lh: 1.1 });
    // sandbox strip (right 4 columns)
    const sx = colX(8), sw = colW(4), cx = sx + sw / 2;
    const sbx = sx + 0.3, sby = by + 0.15, sbw = sw - 0.6, sbh = 3.35;
    pill(s, { text: 'Model', x: cx - 0.95, y: sby + 0.3, w: 1.9, h: 0.5, fill: C.amber, color: C.base, size: 18 });
    line(s, cx, sby + 0.8, cx, sby + 2.55, { arrow: true });
    pill(s, { text: 'Tools', x: cx - 0.95, y: sby + 2.55, w: 1.9, h: 0.5, fill: C.blue, color: C.text, size: 18 });
    rect(s, { x: cx - 1.35, y: sby + 1.35, w: 2.7, h: 0.6, fill: C.surface, stroke: C.green, strokeW: 2, name: 'b2:policy' });
    T(s, 'permission system', { x: cx - 1.35, y: sby + 1.35, w: 2.7, h: 0.6, size: 18, bold: true, color: C.green, align: 'center', valign: 'middle', name: 'b2:policy-t' });
    rect(s, { x: sbx, y: sby, w: sbw, h: sbh, stroke: C.text, strokeW: 2, dash: 'dash', radius: 0.1, name: 'b2:sandbox' });
    T(s, 'sandbox', { x: sbx + 0.15, y: sby + sbh - 0.4, w: 1.5, h: 0.3, size: 16, color: C.muted, name: 'b2:sandbox-l' });
    line(s, cx, sby + sbh, cx, sby + sbh + 0.55, { arrow: true, name: 'b2:egress' });
    T(s, 'egress allowlist', { x: cx + 0.15, y: sby + sbh + 0.12, w: 2.0, h: 0.3, size: 16, color: C.muted, valign: 'middle', name: 'b2:egress-l' });
    await icon(s, FaKey, C.pink, { x: sx + 0.55, y: sby + sbh + 0.75, w: 0.45, name: 'b2:key' });
    T(s, 'credentials never enter', { x: sx + 1.15, y: sby + sbh + 0.7, w: 2.5, h: 0.55, size: 16, color: C.muted, valign: 'middle', name: 'b2:key-l' });
  }

  // ---------------------------------------------------------------- 9
  {
    const s = newSlide(9, notes(9));
    const by = title(s, 'Verification decides this action, now. Evaluation estimates the rate.');
    // contrast card
    const cx = M, cy = by + 0.2, cw = colW(6), ch = 2.9;
    rect(s, { x: cx, y: cy, w: cw, h: ch, fill: C.surface, stroke: C.border });
    line(s, cx + cw / 2, cy + 0.2, cx + cw / 2, cy + ch - 0.2, { color: C.border, width: 1 });
    const half = cw / 2 - 0.4;
    T(s, 'Verification', { x: cx + 0.25, y: cy + 0.2, w: half, h: 0.4, size: 24, bold: true, color: C.blue });
    T(s, 'One action\nBefore it takes effect\nInside the loop\nFailure cost: the action itself', { x: cx + 0.25, y: cy + 0.7, w: half, h: 2.0, size: 16, lh: 1.3 });
    T(s, 'Evaluation', { x: cx + cw / 2 + 0.2, y: cy + 0.2, w: half, h: 0.4, size: 24, bold: true, color: C.green });
    T(s, 'Many cases\nBefore and after a change\nOutside the loop\nFailure cost: a bad release', { x: cx + cw / 2 + 0.2, y: cy + 0.7, w: half, h: 2.0, size: 16, lh: 1.3 });
    // ladder
    const lx = colX(6), lw = colW(6);
    const railL = lx + 0.3, railR = lx + lw - 0.75;
    line(s, railL, cy, railL, cy + ch, { color: C.muted, width: 2 });
    line(s, railR, cy, railR, cy + ch, { color: C.muted, width: 2 });
    const rungs = ['Deterministic checks and tests', 'External evidence and end state', 'Approval gates', 'Model judges, as evidence rather than proof'];
    rungs.forEach((t, i) => {
      const ry = cy + 0.25 + i * 0.62;
      rect(s, { x: railL + 0.15, y: ry, w: railR - railL - 0.3, h: 0.44, fill: C.surface, stroke: C.border, name: `b${i + 1}:rung${i}` });
      T(s, t, { x: railL + 0.15, y: ry, w: railR - railL - 0.3, h: 0.44, size: 16, color: C.text, align: 'center', valign: 'middle', name: `b${i + 1}:rung-t${i}` });
    });
    const ax = railR + 0.4;
    line(s, ax, cy + ch - 0.1, ax, cy + 0.1, { color: C.pink, width: 3, arrow: true });
    T(s, 'trust', { x: ax - 0.33, y: cy + ch / 2 - 0.15, w: 1.1, h: 0.3, size: 16, bold: true, color: C.pink, align: 'center', valign: 'middle', rotate: 270 });
    bullets(s, [
      'Verifiers in order of trust: deterministic checks, external evidence and end state, approval gates, model judges as evidence.',
      [{ text: '"Some tasks are much easier to verify than to solve."', italic: true }, { text: ' Design so checking is cheap.' }],
      'Separate the agent doing the work from the agent judging it.',
    ], { x: M, y: cy + ch + 0.25, w: CW, h: 2.0, size: 18, paraAfter: 6, lh: 1.2 });
  }

  // ---------------------------------------------------------------- 10
  {
    const s = newSlide(10, notes(10));
    const by = title(s, 'The session ends before the task does. The harness is what carries it across.');
    const node = (x, y, w, h, text, fill, color, nm) => pill(s, { text, x, y, w, h, fill, color, size: 16, bold: false, name: nm, lh: 1.1 });
    // row 1: the run up to the session boundary (visible from the start)
    const nw = 1.72, gap = 0.28, nh = 0.68, r1 = by + 0.25;
    const sx = (i) => M + i * (nw + gap);
    const r1nodes = ['Task arrives', 'Write the\nprogress file', 'Feature 1', 'Tests pass', 'Feature 2', 'Tests pass'];
    r1nodes.forEach((t, i) => node(sx(i), r1, nw, nh, t, C.blue, C.text));
    for (let i = 0; i < 5; i++) line(s, sx(i) + nw + 0.03, r1 + nh / 2, sx(i + 1) - 0.03, r1 + nh / 2, { arrow: true });
    // build 1: the session ends; the next session resumes from the progress file and finishes the run
    const ex = sx(5);
    pill(s, { text: 'Session ends', x: ex + nw - 1.55, y: r1 - 0.42, w: 1.6, h: 0.38, fill: C.pink, color: C.base, size: 16, name: 'b1:end', stroke: C.base, strokeW: 1.5 });
    const r2 = r1 + 1.2, midy = r1 + nh + (r2 - r1 - nh) / 2;
    const r2nodes = [
      ['New session reads\nthe progress file', 2.2, C.blue, C.text],
      ['Feature 3\nnot 1 and 2 again', 2.0, C.blue, C.text],
      ['Open the pull\nrequest, once', 2.0, C.blue, C.text],
      ['Wait for CI and review\ndurable wait, can take days', 2.7, C.amber, C.base],
      ['Human queue\nreasoning attached', 2.0, C.amber, C.base],
    ];
    const g2 = (CW - r2nodes.reduce((a, n) => a + n[1], 0)) / (r2nodes.length - 1);
    let x2 = M;
    const xs = [];
    r2nodes.forEach(([t, w, f, c], i) => {
      xs.push(x2);
      node(x2, r2, w, nh, t, f, c, `b1:r2n${i}`);
      if (i < r2nodes.length - 1) line(s, x2 + w + 0.03, r2 + nh / 2, x2 + w + g2 - 0.03, r2 + nh / 2, { arrow: true, name: `b1:r2a${i}` });
      x2 += w + g2;
    });
    T(s, 'timeout', { x: xs[4] - g2 + 0.02, y: r2 - 0.3, w: g2, h: 0.28, size: 16, color: C.muted, align: 'center', valign: 'middle', name: 'b1:timeout-l' });
    path(s, [[ex + nw / 2, r1 + nh + 0.03], [ex + nw / 2, midy], [xs[0] + r2nodes[0][1] / 2, midy], [xs[0] + r2nodes[0][1] / 2, r2 - 0.03]], { color: C.green, width: 2.5, arrow: true, name: 'b1:resume-a' });
    T(s, 'resume from the progress file', { x: xs[0] + r2nodes[0][1] / 2 + 0.15, y: midy - 0.3, w: 3.6, h: 0.28, size: 16, color: C.green, name: 'b1:resume-l' });
    // build 2: the loop as code (nine columns), the budget gauge beside it (three columns)
    const cy = r2 + nh + 0.2, cw = colW(9), chh = 6.8 - cy;
    rect(s, { x: M, y: cy, w: cw, h: chh, fill: C.surface, stroke: C.border, name: 'b2:code-bg' });
    const CODE = [
      ['state = journal.load(id)', 'resume, or start empty'],
      ['while within(BUDGET, state):', 'one run'],
      ['  context = gather(state, tools)', 'what this call sees'],
      ['  action = model(context)', 'one call'],
      ['  if policy.gated(action):', 'that action gated'],
      ['    journal.wait(action); break', 'wait; timeout escalates'],
      ['  journal.intend(action)', 'journal before acting'],
      ['  result = sandbox.run(action)', 'one action'],
      ['  journal.record(verify(result))', 'deterministic first'],
      ['  if done(state): break', ''],
    ];
    // comments in the muted token: each line is a code run and a comment run
    const runs2 = [];
    CODE.forEach(([code, cmt], i) => {
      const last = i === CODE.length - 1;
      if (cmt) {
        runs2.push({ text: code.padEnd(33), options: { color: C.text } });
        runs2.push({ text: '# ' + cmt, options: { color: C.muted, breakLine: !last } });
      } else {
        runs2.push({ text: code, options: { color: C.text, breakLine: !last } });
      }
    });
    T(s, runs2, { x: M + 0.2, y: cy + 0.1, w: cw - 0.4, h: chh - 0.2, size: 16, font: MONO, color: C.text, lh: 0.95, name: 'b2:code' });
    const gx = colX(9), gy = cy;
    T(s, 'Budgets', { x: gx, y: gy, w: colW(3), h: 0.3, size: 16, color: C.muted, name: 'b2:gauge-h' });
    const dials = [['steps', 35], ['tokens', 120], ['dollars', 70], ['wall-clock', 160]];
    dials.forEach(([t, ang], i) => {
      const dx = gx + 0.35, dy = gy + 0.72 + i * 0.5, r = 0.22;
      circle(s, dx, dy, r, { stroke: C.text, strokeW: 2, name: `b2:dial${i}` });
      const a = (ang - 90) * Math.PI / 180;
      line(s, dx, dy, dx + (r - 0.05) * Math.cos(a), dy + (r - 0.05) * Math.sin(a), { color: C.pink, width: 2.5, name: `b2:hand${i}` });
      circle(s, dx, dy, 0.04, { fill: C.pink, name: `b2:pin${i}` });
      T(s, t, { x: dx + r + 0.12, y: dy - 0.15, w: 1.6, h: 0.3, size: 16, color: C.muted, valign: 'middle', name: `b2:dial-l${i}` });
    });
  }

  // ---------------------------------------------------------------- 11
  {
    const s = newSlide(11, notes(11));
    const by = title(s, 'Evaluation is a loop, not an artifact.', { size: 36, h: 0.7 });
    // the cycle, drawn as an elliptical ring with six step nodes
    const cx = M + colW(7) / 2, cy = 3.95, a = 2.65, b = 2.0, nw = 2.15, nh = 1.2;
    L.ellipse(s, { x: cx - a, y: cy - b, w: 2 * a, h: 2 * b, stroke: C.blue, strokeW: 3 });
    const steps = ['Read 100 real traces', 'One expert labels pass/fail with a critique', 'Cluster failures into a taxonomy and count', 'Write graders for the top failures: code, then judge, humans calibrate', 'Freeze a regression suite; gate on rates, not exact outputs', 'Ship; sample production into the same graders'];
    const pos = (deg) => { const t = deg * Math.PI / 180; return [cx + a * Math.sin(t), cy - b * Math.cos(t)]; };
    [30, 90, 150, 210, 270].forEach((d) => { const [x, y] = pos(d); triangle(s, { x: x - 0.11, y: y - 0.11, w: 0.22, h: 0.22, fill: C.text, rotate: d + 90 }); });
    { const [x, y] = pos(330); triangle(s, { x: x - 0.13, y: y - 0.13, w: 0.26, h: 0.26, fill: C.pink, rotate: 330 + 90 }); }
    steps.forEach((t, i) => {
      const [x, y] = pos(i * 60);
      pill(s, { text: t, x: x - nw / 2, y: y - nh / 2, w: nw, h: nh, fill: C.blue, color: C.text, size: 16, bold: false, lh: 1.12 });
    });
    T(s, 'every 2 to 4 weeks', { x: 0.8, y: cy - b - 0.4, w: 2.2, h: 0.3, size: 16, bold: true, color: C.pink, align: 'right', valign: 'middle' });
    // right column
    const rx = colX(7), rw = colW(5);
    T(s, '"Write evaluators for errors you discover, not errors you imagine."', { x: rx, y: by + 0.2, w: rw, h: 0.7, size: 18, italic: true, lh: 1.3 });
    T(s, 'Hamel Husain and Shreya Shankar', { x: rx, y: by + 0.95, w: rw, h: 0.3, size: 16, color: C.muted });
    T(s, [{ text: 'pass@k', options: { fontFace: MONO } }, { text: ' says one of k attempts succeeded. ' }, { text: 'pass^k', options: { fontFace: MONO } }, { text: ' says all of them did. Enterprises are judged on the second.' }],
      { x: rx, y: by + 1.4, w: rw, h: 1.05, size: 18, lh: 1.3, name: 'b1:passk' });
    T(s, 'Scorecard', { x: rx, y: by + 2.72, w: rw, h: 0.3, size: 16, color: C.muted, name: 'b1:score-h' });
    const cells = ['correctness', 'cost per task', 'latency', 'pass^k'];
    cells.forEach((t, i) => {
      const ccx = rx + (i % 2) * (rw / 2 + 0.06), ccy = by + 3.04 + Math.floor(i / 2) * 0.48;
      pill(s, { text: t, x: ccx, y: ccy, w: rw / 2 - 0.06, h: 0.4, fill: C.surface, stroke: C.border, color: C.text, size: 16, bold: false, font: t === 'pass^k' ? MONO : SANS, name: `b1:cell${i}` });
    });
    const tiles = [['89%', C.pink, 'have observability'], ['~52%', C.blue, 'run offline evals'], ['~37%', C.green, 'run online evals']];
    const tw = (rw - 0.2) / 3, ty = by + 4.12, th = 1.15;
    tiles.forEach(([n, c, l], i) => {
      const x = rx + i * (tw + 0.1);
      rect(s, { x, y: ty, w: tw, h: th, fill: C.surface, stroke: C.border, name: `b2:tile${i}` });
      T(s, n, { x: x + 0.1, y: ty + 0.08, w: tw - 0.2, h: 0.45, size: 28, bold: true, color: c, valign: 'middle', name: `b2:tile-n${i}` });
      T(s, l, { x: x + 0.1, y: ty + 0.53, w: tw - 0.15, h: 0.58, size: 16, color: C.text, lh: 1.12, name: `b2:tile-l${i}` });
    });
    T(s, 'LangChain, December 2025', { x: rx, y: ty + th + 0.06, w: rw, h: 0.3, size: 16, color: C.muted, name: 'b2:tile-a' });
  }

  // ---------------------------------------------------------------- 12
  {
    const s = newSlide(12, notes(12));
    const by = title(s, 'The trace is the shared unit of evals and operations.');
    bullets(s, [
      'Record: full context, every model call, every tool call and result, state transitions and stopping reason, end state, tokens, cost, latency, model and prompt versions, user feedback.',
      'OpenTelemetry has GenAI conventions for agents and tools. Still marked development. Instrument now, expect renames.',
      'A model swap that raises the rate of runs that say done without passing the tests is an incident.',
    ], { x: M, y: by + 0.15, w: colW(5), h: 4.6, size: 18, paraAfter: 10 });
    const cx = colX(5), cw = colW(7), cy = by + 0.15, ch = 4.75;
    rect(s, { x: cx, y: cy, w: cw, h: ch, fill: C.surface, stroke: C.border, radius: 0.03 });
    T(s, 'One trace, one session', { x: cx + 0.3, y: cy + 0.3, w: 2.6, h: 0.3, size: 16, color: C.muted });
    T(s, 'OpenTelemetry GenAI conventions\ndevelopment status, July 2026', { x: cx + cw - 3.75, y: cy + 0.15, w: 3.55, h: 0.62, size: 16, color: C.amber, align: 'center', valign: 'middle', line: { color: C.amber, width: 2 }, rectRadius: 0.04, lh: 1.15 });
    const fields = [
      ['context', '4,812 tokens'], ['model calls', '3'], ['tool calls, results', '6 calls, 6 results'], ['state transitions', '5, last: waiting'],
      ['stopping reason', 'review timeout', true], ['end state', 'PR open, queued for a human'], ['tokens', '11,204 in, 1,380 out'], ['cost', '$0.19', true],
      ['latency', '1.8 s median step', true], ['model version', '2026-06-12', true], ['prompt version', 'v14', true], ['user feedback', 'none yet'],
    ];
    fields.forEach(([k, v, hot], i) => {
      const y = cy + 0.95 + i * 0.305;
      if (hot) circle(s, cx + 0.35, y + 0.15, 0.06, { fill: C.pink });
      T(s, k, { x: cx + 0.55, y, w: 2.6, h: 0.3, size: 16, font: MONO, color: hot ? C.pink : C.text, valign: 'middle' });
      T(s, v, { x: cx + 3.25, y, w: cw - 3.5, h: 0.3, size: 16, font: MONO, color: C.dimmed, valign: 'middle' });
    });
  }

  // ---------------------------------------------------------------- 13
  {
    const s = newSlide(13, notes(13));
    const by = title(s, 'Prompt injection is unsolved. Defenses are architectural.');
    // trifecta
    const top = [3.2, by + 0.35], bl = [1.85, by + 1.85], br = [4.55, by + 1.85];
    line(s, top[0], top[1], bl[0], bl[1], { color: C.muted, width: 2 });
    line(s, top[0], top[1], br[0], br[1], { color: C.muted, width: 2 });
    line(s, bl[0], bl[1], br[0], br[1], { color: C.muted, width: 2 });
    pill(s, { text: 'private data\nthe repo, your keys', x: top[0] - 1.05, y: top[1] - 0.28, w: 2.1, h: 0.56, fill: C.surface, stroke: C.text, strokeW: 2, color: C.text, size: 16 });
    pill(s, { text: 'untrusted content\nan issue, a README, a page', x: bl[0] - 1.35, y: bl[1] - 0.28, w: 2.7, h: 0.56, fill: C.surface, stroke: C.amber, strokeW: 2, color: C.text, size: 16 });
    pill(s, { text: 'a way to communicate out\npush', x: br[0] - 1.35, y: br[1] - 0.28, w: 2.7, h: 0.56, fill: C.surface, stroke: C.text, strokeW: 2, color: C.text, size: 16 });
    await icon(s, FaCodeBranch, C.amber, { x: 0.85, y: by + 2.25, w: 0.42 });
    T(s, 'clear the system to a\nnear-factory state', { x: 1.4, y: by + 2.17, w: 3.0, h: 0.58, size: 16, font: MONO, color: C.amber, lh: 1.15, valign: 'middle' });
    await icon(s, FaDoorClosed, C.green, { x: br[0] + 0.3, y: br[1] - 1.0, w: 0.42, name: 'b1:gate' });
    T(s, 'permission tier,\negress allowlist', { x: br[0] + 0.75, y: br[1] - 1.0, w: 2.3, h: 0.56, size: 16, bold: true, color: C.green, valign: 'middle', lh: 1.1, name: 'b1:gate-l' });
    // identity chain (build 2)
    const ix = colX(5), iy = by + 0.3;
    const chain = [['you', 1.0], ['delegated,\ndown-scoped token', 2.2], ['agent', 1.0], ['tool', 1.0]];
    let x = ix;
    chain.forEach(([t, w], i) => {
      pill(s, { text: t, x, y: iy, w, h: 0.6, fill: C.surface, stroke: i === 1 ? C.green : C.text, strokeW: 2, color: i === 1 ? C.green : C.text, size: 16, name: `b2:chain${i}` });
      if (i < chain.length - 1) line(s, x + w + 0.05, iy + 0.3, x + w + 0.35, iy + 0.3, { arrow: true, name: `b2:chain-a${i}` });
      x += w + 0.4;
    });
    const kx = ix + 2.0, ky = iy + 1.05;
    pill(s, { text: 'shared static key', x: kx, y: ky, w: 2.2, h: 0.4, fill: C.surface, stroke: C.dimmed, color: C.dimmed, size: 16, bold: false, name: 'b2:key' });
    line(s, kx - 0.05, ky - 0.05, kx + 2.25, ky + 0.45, { color: C.pink, width: 3, name: 'b2:key-x1' });
    line(s, kx - 0.05, ky + 0.45, kx + 2.25, ky - 0.05, { color: C.pink, width: 3, name: 'b2:key-x2' });
    const strip = [[FaBox, 'supply chain'], [FaCommentDots, 'disclosure'], [FaBook, 'audit trail']];
    for (let i = 0; i < strip.length; i++) {
      const [I, t] = strip[i];
      const sx = ix + i * 2.3;
      await icon(s, I, C.pink, { x: sx, y: by + 2.15, w: 0.42, name: `b2:strip${i}` });
      T(s, t, { x: sx + 0.55, y: by + 2.15, w: 1.7, h: 0.42, size: 16, color: C.muted, valign: 'middle', name: `b2:strip-l${i}` });
    }
    bullets(s, [
      'The lethal trifecta: private data, untrusted content, a way to communicate out. Never all three without a deterministic gate.',
      [{ text: 'An agent is ' }, { text: '"a new principal class."', italic: true }, { text: ' Its own identity, delegated and down-scoped authorization, short-lived tokens, no shared keys.' }],
      'Skills and tool servers are code you execute. Disclose the agent. Approval gates carry action, reasoning, impact.',
    ], { x: M, y: by + 2.8, w: CW, h: 2.2, size: 18, paraAfter: 6, lh: 1.25 });
  }

  // ---------------------------------------------------------------- 14
  {
    const s = newSlide(14, notes(14));
    T(s, 'The map, with the six areas and the eight promises.', { x: M, y: 0.5, w: 4.74, h: 1.2, size: 28, bold: true, lh: 1.1, tracking: -1 });
    const rows = [
      ['2.1 The model', C.amber, 'select, measure, replace'],
      ['2.2 Context', C.blue, 'context engineering and retrieval'],
      ['2.3 Tools and action tiers', C.blue, 'tools and extensibility, guardrails'],
      ['2.4 Verify this action', C.blue, 'verification'],
      ['2.4 The harness', C.green, 'harness design and orchestration, cost and latency'],
      ['2.5 Evaluate across runs', C.muted, 'evaluations, cost per task'],
      ['2.6 Observability, security and guardrails, governance', C.muted, ''],
    ];
    let y = 1.6;
    rows.forEach(([n, c, p], i) => {
      const nl = n.length > 40 ? 2 : 1, pl = p ? (p.length > 42 ? 2 : 1) : 0;
      T(s, n, { x: M, y, w: 4.74, h: 0.33 * nl, size: 19, bold: true, color: c, lh: 1.1 });
      if (p) T(s, p, { x: M, y: y + 0.33 * nl, w: 4.74, h: 0.27 * pl, size: 16, color: C.text, lh: 1.1 });
      y += 0.33 * nl + 0.27 * pl + 0.1;
    });
    ringMap(s, 9.16, 3.7, { variant: 'labeled' });
  }

  // ---------------------------------------------------------------- 15
  {
    const s = newSlide(15, notes(15));
    const by = title(s, 'Most of the job is the job you already have.');
    const skills = ['Systems design', 'API and integration work', 'Testing discipline', 'Observability', 'Security', 'Product sense', 'Domain knowledge'];
    for (let i = 0; i < skills.length; i++) {
      const y = by + 0.2 + i * 0.5;
      await icon(s, FaCheck, C.green, { x: M, y: y + 0.08, w: 0.28 });
      T(s, skills[i], { x: M + 0.5, y, w: 5.5, h: 0.45, size: 22, valign: 'middle' });
    }
    const cx = 7.3, cy = by + 0.2, cw = 5.23, ch = 3.35;
    rect(s, { x: cx, y: cy, w: cw, h: ch, fill: C.surface, stroke: C.border });
    rect(s, { x: cx, y: cy, w: 0.045, h: ch, fill: C.pink, radius: 0 });
    T(s, 'about', { x: cx + 0.4, y: cy + 0.3, w: 3, h: 0.4, size: 24, color: C.pink });
    T(s, '80%', { x: cx + 0.3, y: cy + 0.5, w: cw - 0.6, h: 1.6, size: 120, bold: true, color: C.pink, valign: 'middle', tracking: -4 });
    T(s, "of the role, by one practitioner's estimate, 2026", { x: cx + 0.4, y: cy + ch - 0.9, w: cw - 0.8, h: 0.6, size: 16, color: C.muted, valign: 'bottom' });
    T(s, '"AI engineering is just software engineering with AI models thrown in the stack."', { x: M, y: 5.6, w: CW, h: 0.75, size: 22, italic: true, lh: 1.25 });
    T(s, 'Chip Huyen, 2025', { x: M, y: 6.4, w: CW, h: 0.3, size: 16, color: C.muted });
  }

  // ---------------------------------------------------------------- 16
  {
    const s = newSlide(16, notes(16));
    const by = title(s, 'Six things to add, one per area of the map.');
    const tw = colW(9), c1 = 2.6, rh = 0.8, ty = by + 0.15;
    const rows = [
      ['The model', C.amber, 'Model intuition: how they fail, what to ask for, when to swap'],
      ['Context', C.blue, 'Context engineering: the token budget, retrieval, provenance, memory'],
      ['Tools', C.blue, 'Tool design and action tiers'],
      ['The harness', C.green, 'Loop control: verify each action, durable state, the workflow-versus-agent judgment'],
      ['Evaluate', C.muted, 'Error analysis and evals. The priority.'],
      ['Operations', C.muted, 'Security and operations for probabilistic systems: injection, identity, tracing'],
    ];
    line(s, M, ty, M + tw, ty, { color: C.border, width: 1 });
    rows.forEach(([n, c, add], i) => {
      const y = ty + i * rh;
      T(s, n, { x: M + 0.15, y, w: c1 - 0.2, h: rh, size: 20, bold: true, color: c, valign: 'middle' });
      T(s, add, { x: M + c1, y, w: tw - c1 - 0.2, h: rh, size: 18, color: C.text, valign: 'middle', lh: 1.2 });
      line(s, M, y + rh, M + tw, y + rh, { color: C.border, width: 1 });
    });
    const ey = ty + 4 * rh;
    rect(s, { x: M - 0.02, y: ey + 0.02, w: tw + 0.04, h: rh - 0.04, stroke: C.pink, strokeW: 3, name: 'b1:hilite' });
    const tx = colX(9), tw2 = colW(3);
    rect(s, { x: tx, y: ey + 0.03, w: tw2, h: rh - 0.06, fill: C.surface, stroke: C.border, name: 'b1:tag' });
    rect(s, { x: tx, y: ey + 0.03, w: 0.045, h: rh - 0.06, fill: C.pink, radius: 0, name: 'b1:tag-bar' });
    T(s, 'every source names this the hardest', { x: tx + 0.25, y: ey + 0.03, w: tw2 - 0.4, h: rh - 0.06, size: 16, color: C.text, valign: 'middle', lh: 1.2, name: 'b1:tag-t' });
  }

  // ---------------------------------------------------------------- 17
  {
    const s = newSlide(17, notes(17));
    const by = title(s, 'Seven mistakes, seven antidotes.');
    const c1x = M, c1w = 4.6, c2x = 5.7, c2w = M + CW - 5.7;
    const hy = by + 0.2;
    T(s, 'Mistake', { x: c1x, y: hy, w: c1w, h: 0.4, size: 20, bold: true, color: C.amber, valign: 'middle' });
    T(s, 'Antidote', { x: c2x, y: hy, w: c2w, h: 0.4, size: 20, bold: true, color: C.green, valign: 'middle' });
    line(s, M, hy + 0.42, M + CW, hy + 0.42, { color: C.border, width: 1 });
    const rows = [
      ['An agent when a workflow would do', 'Start with a workflow', 0.52],
      ['Prompt and pray', '20 to 50 eval cases from real examples before tuning the first prompt', 0.76],
      ['Frameworks before primitives', 'Direct API calls first, then a framework you can read. Own your prompts, context, and control flow.', 0.76],
      ['Generic metrics instead of reading traces', 'Read a hundred', 0.76],
      ['Shipping unread output', null, 0.76],
      ['Treating the demo as done', null, 0.52],
      ['Ignoring cost and latency until the invoice arrives', 'On the scorecard from day one', 0.76],
    ];
    let y = hy + 0.42;
    rows.forEach(([m, a, h], i) => {
      const b = `b${i + 1}`;
      T(s, m, { x: c1x, y, w: c1w, h, size: 18, color: C.amber, valign: 'middle', lh: 1.2, name: `${b}:m` });
      if (i === 4) {
        T(s, [{ text: '"Shipping unread code spells disaster within months."', options: { italic: true, color: C.green, breakLine: true } }, { text: 'Dex Horthy, 2026', options: { color: C.muted, fontSize: 16 } }],
          { x: c2x, y, w: c2w, h, size: 18, color: C.green, valign: 'middle', lh: 1.2, name: `${b}:a` });
      } else if (i === 5) {
        T(s, [{ text: 'works.any()', options: { fontFace: MONO } }, { text: ' is not ' }, { text: 'works.all()', options: { fontFace: MONO } }], { x: c2x, y, w: c2w, h, size: 18, color: C.green, valign: 'middle', name: `${b}:a` });
      } else {
        T(s, a, { x: c2x, y, w: c2w, h, size: 18, color: C.green, valign: 'middle', lh: 1.2, name: `${b}:a` });
      }
      y += h;
      line(s, M, y, M + CW, y, { color: C.border, width: 1, name: `${b}:d` });
    });
  }

  // ---------------------------------------------------------------- 18
  {
    const s = newSlide(18, notes(18));
    const by = title(s, 'Build one narrow, real agent for a task you already understand.');
    const lw = 3.75;
    T(s, 'First project', { x: M, y: by + 0.15, w: lw, h: 0.35, size: 20, bold: true, color: C.pink });
    const steps = [
      'A read-only agent over a repo you own: a pull-request reviewer or an issue-triage agent.',
      '20 to 50 eval cases from real examples before the first prompt is tuned.',
      'Direct API calls before a framework. A trace viewer from day one.',
      'One agent, one tier at a time. Let the evals tell you when.',
    ];
    let sy = by + 0.6;
    for (let i = 0; i < steps.length; i++) {
      const lines = Math.ceil(steps[i].length / 31);
      await icon(s, FaCheck, C.green, { x: M, y: sy + 0.04, w: 0.24 });
      T(s, steps[i], { x: M + 0.4, y: sy, w: lw - 0.4, h: 0.28 * lines, size: 16, lh: 1.2 });
      sy += 0.28 * lines + 0.16;
    }
    const ax = 4.9, aw = 3.65, bx = 8.9, bw = 3.63;
    const group = (x, y, w, head, color, items) => {
      T(s, head, { x, y, w, h: 0.32, size: 19, bold: true, color });
      const runs = items.map((t, i) => ({ text: t, options: { breakLine: i < items.length - 1, paraSpaceAfter: 3, bullet: { indent: 14 } } }));
      s.addText(runs, { x, y: y + 0.34, w, h: 2.4, isTextBox: true, margin: 0, fontFace: SANS, fontSize: 16, color: C.text, valign: 'top', lineSpacingMultiple: 1.1 });
    };
    group(ax, by + 0.15, aw, 'Books', C.pink, ['Chip Huyen, AI Engineering (O\'Reilly, 2025)', 'Hamel Husain and Shreya Shankar, Evals for AI Engineers (O\'Reilly, due October 2026)']);
    group(ax, by + 2.1, aw, 'Guides', C.blue, ['Anthropic: "Building Effective Agents," "Effective Context Engineering for AI Agents," "Demystifying Evals for AI Agents"', 'OpenAI: "A Practical Guide to Building Agents"', 'Dex Horthy: "12-Factor Agents"']);
    group(bx, by + 0.15, bw, 'Courses', C.green, ['Hamel Husain and Shreya Shankar\'s evals course', 'Google and Kaggle\'s 5-Day AI Agents Intensive (free)', 'The Hugging Face Agents course (free)', 'Anthropic Academy (free)', 'OpenAI Academy (free)']);
    group(bx, by + 3.0, bw, 'Staying current', C.amber, ['Latent Space', 'The Pragmatic Engineer']);
    T(s, "AI engineer is LinkedIn's fastest-growing US role for the second year. The premium outside frontier labs is modest. Postings want shipped production LLM work.", { x: M, y: 6.28, w: CW, h: 0.6, size: 16, color: C.muted, lh: 1.15 });
  }

  // ---------------------------------------------------------------- 19
  {
    const s = newSlide(19, notes(19));
    ringMap(s, W / 2, 2.2, { variant: 'bare', scale: 0.58 });
    T(s, [{ text: 'Using AI makes you an ' }, { text: 'AI-enabled software engineer', options: { color: C.pink, bold: true } }, { text: '.' }],
      { x: M, y: 4.25, w: CW, h: 0.42, size: 24, align: 'center' });
    T(s, [{ text: 'Engineering systems whose behavior depends on AI makes you an ' }, { text: 'AI engineer', options: { color: C.pink, bold: true } }, { text: '.' }],
      { x: 2.17, y: 4.7, w: 9.0, h: 0.85, size: 24, align: 'center', lh: 1.2 });
    T(s, 'Go build one where the customer is on the other end.', { x: M, y: 5.65, w: CW, h: 0.42, size: 24, bold: true, color: C.pink, align: 'center', name: 'b1:close' });
    T(s, 'Questions', { x: M, y: 6.15, w: CW, h: 0.55, size: 32, bold: true, align: 'center', name: 'b2:questions' });
  }

  const out = require('path').join(__dirname, 'deck-raw.pptx');
  await pres.writeFile({ fileName: out });
  console.log('wrote', out);
}

main().catch((e) => { console.error(e); process.exit(1); });
