#!/usr/bin/env bash
set -euo pipefail

PROJECT_PATH="/micah-portfolio"

rm -rf _site
mkdir _site

for item in assets case-studies css js index.html portfolio.html resume.html robots.txt sitemap.xml; do
  cp -R "$item" _site/
done

# The custom-domain site lives at /. The Pages copy lives under /micah-portfolio/.
# Only rewrite root-relative navigation in the generated copy.
find _site -type f \( -name '*.html' -o -name '*.js' \) -exec \
  perl -pi -e 's{href="/}{href="/micah-portfolio/}g; s{href: '\''/}{href: '\''/micah-portfolio/}g' {} +

# Make document assets independent of the route depth used by Pages.
find _site -maxdepth 1 -name '*.html' -exec \
  perl -pi -e 's{(href|src)="(?![a-z]+:|/|#)}{$1="/micah-portfolio/}gi' {} +
find _site/case-studies -maxdepth 1 -name '*.html' -exec \
  perl -pi -e 's{(href|src)="\.\./}{$1="/micah-portfolio/}g' {} +
perl -pi -e 's{(["'\''])\.\./assets/}{$1/micah-portfolio/assets/}g' _site/js/case-content.js

# GitHub Pages has no .htaccess rewrite rules, so create directory indexes for
# the extension-free routes used by the custom-domain version.
for page in portfolio resume; do
  mkdir -p "_site/$page"
  cp "_site/$page.html" "_site/$page/index.html"
done

for page in _site/case-studies/*.html; do
  route="${page%.html}"
  mkdir -p "$route"
  cp "$page" "$route/index.html"
done

touch _site/.nojekyll
