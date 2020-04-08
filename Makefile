.DEFAULT_GOAL=main
PWD := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))

main:
	@rm -rf "$(PWD)/dist/" && yarn run build && cp $(PWD)/package.json $(PWD)/dist

publish:
	@rm -rf "$(PWD)/dist/" && yarn run build && cp $(PWD)/package.json $(PWD)/dist && cd $(PWD)/dist && npm publish
