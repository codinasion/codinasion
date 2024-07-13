#!/bin/bash

# Checkout to master branch
git checkout master

# Pull the latest changes
git pull

# Checkout to the dev branch
git checkout dev

# Merge the latest changes from master
git merge master

# Push the changes to the dev branch
git push
