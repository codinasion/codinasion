#!/bin/bash

read -r -p "Use with caution! Proceed (y/n)? " answer
case $answer in
[Yy]*)

    # Update
    pnpm git-fetch-prune-verbose

    # Checkout to master branch
    git checkout master

    # Pull the latest changes
    git pull

    # Checkout to the dev branch
    git checkout dev

    # Rebase the latest changes from master
    git rebase master dev

    # Skip all the conflicts
    while [ $? -ne 0 ]; do
        git rebase --skip
    done

    # Force push the changes to the dev branch
    git push -f
    ;;
[Nn]*)
    echo "Operation cancelled."
    exit 1
    ;;
*)
    echo "Please answer yes or no."
    exit 1
    ;;
esac
