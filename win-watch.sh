#!/bin/bash

source %INIT_CWD%/.env

set -e

set -x

npm run watch-js &

S1=$!

npm run php-server &

S2=$!

npm run https-server &

S3=$!

npm run watch-css &

S4=$!

start "https://$CN:3000" &

S5=$!

wait
 
kill $S1 $S2 $S3 $S4 $S5