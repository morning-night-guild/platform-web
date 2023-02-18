#!/bin/bash

BRANCH_NAME=main

docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i https://raw.githubusercontent.com/morning-night-guild/platform/${BRANCH_NAME}/api/openapi.yaml \
    -g typescript-fetch -o /local/src/openapi
