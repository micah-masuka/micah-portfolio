#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-$(dirname "$ROOT")/micah-portfolio-deploy.zip}"

cd "$ROOT"

rm -f "$OUT"

zip -r "$OUT" \
  index.html portfolio.html resume.html robots.txt sitemap.xml .htaccess \
  css js case-studies assets \
  -x "**/_source/*" "**/.DS_Store" "**/__MACOSX/*" "**/*.png" "**/.git/*"

echo "Created: $OUT"
ls -lh "$OUT"
