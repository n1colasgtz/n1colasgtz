#!/usr/bin/env sh
# abort on errors
set -e
# build static files
npm run build
# navigate into the build output directory
cd dist
# create a fresh new git repo in the output directory
git init
git checkout -b main
git add -A
git commit -m 'deploy'
# Force push to the "publishing source" of your GitHub pages site
# in this case, the gh-pages branch
git push -f git@github.com:n1colasgtz/n1colasgtz.git main:gh-pages
# Back to previous directory (the root of your repo)
cd -