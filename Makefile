.DEFAULT_GOAL=main
PWD := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))

.PHONY: svgs
svgs:
	@find -type d -name "svgs" -print0 | xargs -0 -I "%" npx svgr --svg-props height=1em --memo --ref % -d %
	@find -type d -name "svgs" -print0 | xargs -0 -I "%" npx create-index -i %

.PHONY: main
main: svgs
	@rm -rf "$(PWD)/dist/" && yarn run build && cp $(PWD)/package.json $(PWD)/dist

.PHONY: publish
publish: main
	@npm version minor --no-git-tag-version
	@cp $(PWD)/package.json $(PWD)/dist/package.json
	@cd $(PWD)/dist && npm publish

.PHONY: publish-breaking
publish-breaking: main
	@npm version major --no-git-tag-version
	@cp $(PWD)/package.json $(PWD)/dist/package.json
	@cd $(PWD)/dist && npm publish
