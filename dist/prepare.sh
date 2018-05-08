#!/bin/bash


cd ../java2ts-demo-client

npm run deploy

cd ../java2ts-demo-server

mvn clean package

cd ../dist

cp ../java2ts-demo-server/target/java2ts-demo*.jar .

heroku container:push web
