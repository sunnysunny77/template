#!/bin/bash

powershell Import-Certificate -FilePath certs\\ca.crt -CertStoreLocation cert:\\CurrentUser\\Root