install:
	npm install
brian-games:
	node bin/brian-games.js
brian-even:
	node bin/brian-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
