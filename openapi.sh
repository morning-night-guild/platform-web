#!/bin/bash

BRANCH_NAME=main

curl https://raw.githubusercontent.com/morning-night-guild/platform/${BRANCH_NAME}/api/openapi.yaml > openapi.yaml
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/openapi.yaml -g typescript-fetch -o /local/openapi
rm -r src/openapi
mv openapi/ src/
rm openapi.yaml
