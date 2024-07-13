#!/bin/bash

# Checkout to master branch
git checkout master

# Pull the latest changes
git pull

# Checkout to the dev branch
git checkout dev

# Merge the latest changes from master
git merge master

# Automatically generate a commit message with the current date
COMMIT_MESSAGE="Merge branch 'master' into dev"
git commit -am "$COMMIT_MESSAGE"

# Push the changes to the dev branch
git push
