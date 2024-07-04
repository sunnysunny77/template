package OpenSSL::safe::installdata;

use strict;
use warnings;
use Exporter;
our @ISA = qw(Exporter);
our @EXPORT = qw($PREFIX
                  $BINDIR $BINDIR_REL
                  $LIBDIR $LIBDIR_REL
                  $INCLUDEDIR $INCLUDEDIR_REL
                  $APPLINKDIR $APPLINKDIR_REL
                  $ENGINESDIR $ENGINESDIR_REL
                  $MODULESDIR $MODULESDIR_REL
                  $PKGCONFIGDIR $PKGCONFIGDIR_REL
                  $CMAKECONFIGDIR $CMAKECONFIGDIR_REL
                  $VERSION @LDLIBS);

our $PREFIX             = '/Users/pcone/Documents/GitHub/template/static-php-cli/source/openssl';
our $BINDIR             = '/Users/pcone/Documents/GitHub/template/static-php-cli/source/openssl/apps';
our $BINDIR_REL         = 'apps';
our $LIBDIR             = '/Users/pcone/Documents/GitHub/template/static-php-cli/source/openssl';
our $LIBDIR_REL         = '.';
our $INCLUDEDIR         = '/Users/pcone/Documents/GitHub/template/static-php-cli/source/openssl/include';
our $INCLUDEDIR_REL     = 'include';
our $APPLINKDIR         = '/Users/pcone/Documents/GitHub/template/static-php-cli/source/openssl/ms';
our $APPLINKDIR_REL     = 'ms';
our $ENGINESDIR         = '/Users/pcone/Documents/GitHub/template/static-php-cli/source/openssl/engines';
our $ENGINESDIR_REL     = 'engines';
our $MODULESDIR         = '/Users/pcone/Documents/GitHub/template/static-php-cli/source/openssl/providers';
our $MODULESDIR_REL     = 'providers';
our $PKGCONFIGDIR       = '';
our $PKGCONFIGDIR_REL   = '';
our $CMAKECONFIGDIR     = '';
our $CMAKECONFIGDIR_REL = '';
our $VERSION            = '3.3.1';
our @LDLIBS             =
    # Unix and Windows use space separation, VMS uses comma separation
    split(/ +| *, */, '/Users/pcone/Documents/GitHub/template/static-php-cli/buildroot/lib/libz.a ');

1;
