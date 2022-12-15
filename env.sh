#!/usr/bin/env sh

for arg; do
  echo "$arg"
  echo "$arg" >> ".env"
done
