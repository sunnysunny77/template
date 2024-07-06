#!/bin/bash
file=server.crt
if [ -e "$file" ]; then
    echo "server.cert exist"
else 
   npm run mkcert; npm run install-cert
fi 