#!/bin/sh
# Optional QA: renders every slide to qa/slide-NN.jpg. Needs LibreOffice (soffice) and poppler (pdftoppm).
set -e
cd "$(dirname "$0")"
SOFFICE=$(command -v soffice || echo /Applications/LibreOffice.app/Contents/MacOS/soffice)
[ -x "$SOFFICE" ] || { echo "LibreOffice not found; install it or skip the render step"; exit 1; }
command -v pdftoppm >/dev/null || { echo "pdftoppm not found (brew install poppler)"; exit 1; }
mkdir -p qa && rm -f qa/*.jpg qa/*.pdf
"$SOFFICE" --headless --convert-to pdf --outdir qa ../beyond-the-coding-agent.pptx >/dev/null
pdftoppm -jpeg -r 80 qa/beyond-the-coding-agent.pdf qa/slide
ls qa/*.jpg | wc -l
