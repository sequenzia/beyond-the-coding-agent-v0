#!/bin/sh
# Regenerates ../beyond-the-coding-agent.pptx from the slide files. Run from anywhere.
set -e
cd "$(dirname "$0")"
[ -d node_modules ] || npm install
node build.js
python3 post.py
echo "wrote $(cd .. && pwd)/beyond-the-coding-agent.pptx"
