rd public /s /q
if exist public rd /s /q public
cd alh
npm --no-git-tag-version version patch & ionic build --aot --prod