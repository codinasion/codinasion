#!/bin/bash

# Extract version from web/package.json
PACKAGE_VERSION=$(grep -oP '(?<="version": ")[^"]*' web/package.json)
echo "Extracted version: $PACKAGE_VERSION"

# Check if version extraction was successful
if [ -z "$PACKAGE_VERSION" ]; then
    echo "Failed to extract version from web/package.json"
    exit 1
fi

# Create a git tag
git tag -a "v$PACKAGE_VERSION" -m "Release version $PACKAGE_VERSION"

# Push tag to git remote
git push origin "v$PACKAGE_VERSION"
