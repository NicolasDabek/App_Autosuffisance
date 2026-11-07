#!/bin/sh
# Publie dist/client sur la branche gh-pages (GitHub Pages, sans Actions).
# Nouveau commit au-dessus de l'historique existant, push normal (jamais --force).
set -e
npm run build:pages
ROOT=$(pwd)
git fetch -q origin gh-pages
WT=$(mktemp -d)
git worktree add -q --detach "$WT" origin/gh-pages
trap 'git -C "$ROOT" worktree remove --force "$WT" >/dev/null 2>&1 || true' EXIT
(cd "$WT" && git rm -rqf --ignore-unmatch . >/dev/null)
cp -r dist/client/. "$WT"
touch "$WT/.nojekyll"
cd "$WT"
git add -A
if git diff --cached --quiet; then
  echo "[pages] rien à publier"
else
  git commit -qm "Publication GitHub Pages $(date -u +%Y-%m-%dT%H:%MZ)"
  git push -q origin HEAD:gh-pages
  echo "[pages] publié sur gh-pages"
fi
