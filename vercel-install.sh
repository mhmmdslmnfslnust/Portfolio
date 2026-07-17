#!/bin/bash
if [ "$VERCEL_GIT_COMMIT_REF" == "wheel-background" ]; then
  echo "Simple branch: Skipping dependency installation."
  exit 0
else
  echo "Main branch: Installing dependencies."
  npm install # Change to yarn install or pnpm install if your main branch uses them
fi
