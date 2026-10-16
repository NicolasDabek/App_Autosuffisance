#!/bin/sh
# Publie dist/client sur la branche gh-pages (GitHub Pages, sans Actions).
set -e
npm run build:pages
REMOTE=$(git remote get-url origin)
TMP=$(mktemp -d)
cp -r dist/client/. "$TMP"
touch "$TMP/.nojekyll"
cd "$TMP"
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C "$OLDPWD" config user.name || echo deploy)" -c user.email="$(git -C "$OLDPWD" config user.email || echo deploy@localhost)" commit -qm "Publication GitHub Pages $(date -u +%Y-%m-%dT%H:%MZ)"
git push -qf "$REMOTE" gh-pages
cd - >/dev/null
rm -rf "$TMP"
echo "[pages] publié sur gh-pages"
