source $INIT_CWD/.env

powershell Import-Certificate -FilePath %INIT_CWD%\\certs\\ca.crt -CertStoreLocation cert:\\CurrentUser\\Root