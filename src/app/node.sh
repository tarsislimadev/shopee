#!/usr/bin/sh

docker run --rm -it --network host -v $(pwd):/app -w /app node:alpine sh
