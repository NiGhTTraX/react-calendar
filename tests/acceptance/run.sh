#!/bin/bash

# Exit on any error.
set -e

npm run build-playground
cd tests/acceptance
docker-compose build

# Raise the required testing infrastructure.
docker-compose up -d hub chrome playground

SELENIUM_START_DELAY=6
echo Waiting $SELENIUM_START_DELAY seconds for the Selenium hub \
  to start and the nodes to register...
sleep $SELENIUM_START_DELAY

# Run the tests.
docker-compose run tests
RESULT=$?

# Bring done the testing infrastructure.
docker-compose stop

exit $RESULT
