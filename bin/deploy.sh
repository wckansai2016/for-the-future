#!/usr/bin/env bash

set -e

if [[ "false" != "$TRAVIS_PULL_REQUEST" ]]; then
	echo "Not deploying pull requests."
	exit
fi

if [[ "master" != "$TRAVIS_BRANCH" ]]; then
	echo "Not on the 'master' branch."
	exit
fi

if [[ "7" != "$TRAVIS_PHP_VERSION" ]]; then
	echo "deploy only 7"
	exit
fi

git clone -b dist --quiet "https://github.com/${TRAVIS_REPO_SLUG}.git" dist

rm -rf dist/*

npm run dist

cd dist

git add -A
git commit -m "Update from travis $TRAVIS_COMMIT"
git push --quiet "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" dist 2> /dev/null
