#!/bin/sh

#
# Deploy 
#
TARGET=../java2ts-demo-server/src/main/resources/public
rm -rf $TARGET
#ionic cordova build browser --prod --release
npm run ionic:build
#unzip platforms/browser/build/package.zip -d $TARGET
cp -r  www/ $TARGET
echo "finished! $TARGET"