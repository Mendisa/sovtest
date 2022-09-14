<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/support/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'bitnami_wordpress' );


/** Database username */

define( 'DB_USER', 'bn_wordpress' );


/** Database password */

define( 'DB_PASSWORD', '038c0e75e0b08c9ff801619195a4baffd06af08a8336bea830636a0ddabaf715' );


/** Database hostname */

define( 'DB_HOST', 'localhost:3306' );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         'VgH5X2-`pFyS!$<4lj,d90zvQg#g_KNyLI[L&:jwpIw5 lwsIBdBD>4xdt0C2n4>' );

define( 'SECURE_AUTH_KEY',  'EELs;7&qBzvKD80 /:<KETzKpR_}.uXxW:Z;3nNmfaVt2W%`]7 g=8hU/QV,4UsY' );

define( 'LOGGED_IN_KEY',    'U,IKcO_VwD25wH[ipF~:n2;nO?$.gI**>$?({|`{yaetKYF9y!dwB^`#,9YZ*.K=' );

define( 'NONCE_KEY',        'k[-yUOt[gi$X~?{3Iqb_<60WTO.+w0hziT.?3] EX~2(D$xi-_}b(#jkYm+s)GKT' );

define( 'AUTH_SALT',        'JGp(2FTfi!=v@*(SCLwy/KFhOtni&PU?UV}qoXym&_GjL~LGIyt$C)Lr1IPh$qiQ' );

define( 'SECURE_AUTH_SALT', '+)Rt#D]x2:gx*|zs~UI_P!?b!Fhp:5pe4dyI5MyqJ-bXXh7PiHlt>LKEL4$c9X5^' );

define( 'LOGGED_IN_SALT',   'Z<x2#81M9m;EGy$B<Z@YLG={u7Ry.Q9+fGn0S@n+G_ _4<AJ?H#lh+->O6< zh<j' );

define( 'NONCE_SALT',       'g_L$4IRM3,&QajXej$Cfj7Fe+lq1Lz*.Nwih5]zZCw;X(Cn2+q8_`wRUJPhxPHo<' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/support/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */




define( 'FS_METHOD', 'direct' );
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
 */
if ( defined( 'WP_CLI' ) ) {
	$_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

/**
 * Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
 * More info at: https://docs.bitnami.com/general/apps/wordpress/troubleshooting/xmlrpc-and-pingback/
 */
if ( !defined( 'WP_CLI' ) ) {
	// remove x-pingback HTTP header
	add_filter("wp_headers", function($headers) {
		unset($headers["X-Pingback"]);
		return $headers;
	});
	// disable pingbacks
	add_filter( "xmlrpc_methods", function( $methods ) {
		unset( $methods["pingback.ping"] );
		return $methods;
	});
}
