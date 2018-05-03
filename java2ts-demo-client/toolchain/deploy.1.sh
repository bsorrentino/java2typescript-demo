#!/bin/sh

#
# Deploy 
#
TARGET=../java2ts-semo-server/src/main/resources/public
rm -rf $TARGET
#ionic cordova build browser --prod --release
$(npm bin)/ionic cordova build browser
#unzip platforms/browser/build/package.zip -d $TARGET
cp -r  platforms/browser/www/ $TARGET
echo "finished! $TARGET"