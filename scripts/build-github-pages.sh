#!/usr/bin/env bash
set -euo pipefail

PROJECT_PATH="/Micah-Portfolio"

rm -rf _site
mkdir _site

for item in assets case-studies css js index.html portfolio.html resume.html robots.txt sitemap.xml; do
  cp -R "$item" _site/
done

# The custom-domain site lives at /. The Pages copy lives under /Micah-Portfolio/.
# Only rewrite root-relative navigation in the generated copy.
find _site -type f \( -name '*.html' -o -name '*.js' \) -exec \
  perl -pi -e 's{href="/}{href="/Micah-Portfolio/}g; s{href: '\''/}{href: '\''/Micah-Portfolio/}g' {} +

# Make document assets independent of the route depth used by Pages.
find _site -maxdepth 1 -name '*.html' -exec \
  perl -pi -e 's{(href|src)="(?![a-z]+:|/|#)}{$1="/Micah-Portfolio/}gi' {} +
find _site/case-studies -maxdepth 1 -name '*.html' -exec \
  perl -pi -e 's{(href|src)="\.\./}{$1="/Micah-Portfolio/}g' {} +
perl -pi -e 's{(["'\''])\.\./assets/}{$1/Micah-Portfolio/assets/}g' _site/js/case-content.js

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
