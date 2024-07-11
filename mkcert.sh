#!/bin/bash

source .env

openssl genrsa -des3 -passout pass:developemnt -out ca.key 2048 &&

openssl req \
-x509 \
-new \
-sha256 \
-days 1024 \
-out ca.crt \
-nodes \
-key ca.key \
-passin pass:developemnt \
-subj "/CN=$FQDN Root CA/C=AU/ST=Western Australia/L=Perth/O=Web Developers/OU=Dev" && 

openssl req \
-new \
-sha256 \
-nodes \
-out server.csr \
-newkey rsa:2048 \
-keyout server.key \
-config <(cat << EOF
[ req ]
default_bits = 2048
prompt = no
default_md = sha256
req_extensions = req_ext
distinguished_name = dn

[ dn ]
C = AU
ST = Perth
L = Western Australia
O = Web Developers
OU = Dev
CN = $FQDN

[ req_ext ]
subjectAltName = @alt_names

[ alt_names ]
DNS.1 = $FQDN
DNS.2 = $FQDN:3002
EOF
) &&

openssl x509 \
-req \
-in server.csr \
-CA ca.crt \
-CAkey ca.key \
-passin pass:developemnt \
-CAcreateserial \
-out server.crt \
-days 500 \
-sha256 \
-extfile <(cat << EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = $FQDN
DNS.2 = $FQDN:3002
EOF
); 

npm run install-cert
