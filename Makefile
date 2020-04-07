.DEFAULT_GOAL=main
PWD := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))

main:
	@rm -rf "$(PWD)/dist/" && yarn run build
