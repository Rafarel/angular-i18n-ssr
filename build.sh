#!/bin/sh

npm i
rm -rf ./dist
npm run prerender:fr
npm run prerender:en
cp ./proxy-server.js ./dist/ssr
