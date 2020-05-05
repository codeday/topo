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
publish: make
	@cd $(PWD)/dist && npm publish
