#!/bin/env bash

# Build project
yarn ssr:build

# Copy some built files for server/functions
mkdir -p functions/dist
cp -R dist/.uvue functions/dist

# Firebase deploy
firebase deploy --only hosting,functions