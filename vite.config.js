npm run build

rm -rf docs
mkdir docs
cp -r dist/* docs/
cp docs/index.html docs/404.html

git add .
git commit -m "Fresh restart site"
git push
