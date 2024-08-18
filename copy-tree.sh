#!/bin/bash

PATH_TO_DIR="/home/$USER/Desktop/codinasion/packages/code/src"

# Check if tree command is available
if ! command -v tree &> /dev/null; then
  echo "tree command not found"
  exit 1
fi

# Check if xclip command is available
if ! command -v xclip &> /dev/null; then
  echo "xclip command not found"
  exit 1
fi

# Run the tree command and pipe to xclip
tree "$PATH_TO_DIR" -d -L 1 | xclip -selection clipboard

# Check if the previous command was successful
if [ $? -eq 0 ]; then
  echo "Directory structure copied to clipboard successfully."
else
  echo "Failed to copy directory structure to clipboard."
fi