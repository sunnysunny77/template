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

our $PREFIX             = '/';
our $BINDIR             = '/bin';
our $BINDIR_REL         = 'bin';
our $LIBDIR             = '/';
our $LIBDIR_REL         = '.';
our $INCLUDEDIR         = '/include';
our $INCLUDEDIR_REL     = 'include';
our $APPLINKDIR         = '/include/openssl';
our $APPLINKDIR_REL     = 'include/openssl';
our $ENGINESDIR         = '/lib/engines-3';
our $ENGINESDIR_REL     = 'lib/engines-3';
our $MODULESDIR         = '/lib/ossl-modules';
our $MODULESDIR_REL     = 'lib/ossl-modules';
our $PKGCONFIGDIR       = '/lib/pkgconfig';
our $PKGCONFIGDIR_REL   = 'lib/pkgconfig';
our $CMAKECONFIGDIR     = '/lib/cmake/OpenSSL';
our $CMAKECONFIGDIR_REL = 'lib/cmake/OpenSSL';
our $VERSION            = '3.3.1';
our @LDLIBS             =
    # Unix and Windows use space separation, VMS uses comma separation
    split(/ +| *, */, '/Users/pcone/Documents/GitHub/template/static-php-cli/buildroot/lib/libz.a ');

1;
