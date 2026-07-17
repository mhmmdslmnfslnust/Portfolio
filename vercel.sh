#!/bin/bash

if [ "$VERCEL_GIT_COMMIT_REF" == "your-simple-branch-name" ]; then
  # For your simple branch: Do nothing because it is just a static HTML file
  echo "Simple branch detected. Skipping build step."
  exit 0
else
  # For your main advanced branch: Run your usual framework build command
  echo "Advanced branch detected. Running main build."
  npm run build
fi
