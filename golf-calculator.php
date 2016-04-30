<?php
/**
 * Plugin Name: Golf Calculator
 * Description: Golf Calculator Plugin
 * Version: 1.0.0
 * Author: Marios Frixou
 * Author URI: http://mariosfrixou.me
 * Requires at least: 4.5.1
 * Tested up to: 4.5.1
 *
 * Text Domain: golfcp
 * Domain Path: /languages/
 *
 * @package Golf_Calculator
 * @category Core
 * @author Matty
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * Returns the main instance of Golf_Calculator to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return object Golf_Calculator
 */
function Golf_Calculator() {
	return Golf_Calculator::instance();
} // End Golf_Calculator()

add_action( 'plugins_loaded', 'Golf_Calculator' );

/**
 * Main Golf_Calculator Class
 *
 * @class Golf_Calculator
 * @version	1.0.0
 * @since 1.0.0
 * @package	Golf_Calculator
 * @author Matty
 */
final class Golf_Calculator {
	/**
	 * Golf_Calculator The single instance of Golf_Calculator.
	 * @var 	object
	 * @access  private
	 * @since 	1.0.0
	 */
	private static $_instance = null;

	/**
	 * The token.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $token;

	/**
	 * The version number.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $version;

	/**
	 * The plugin directory URL.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $plugin_url;

	/**
	 * The plugin directory path.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $plugin_path;

	// Admin - Start
	/**
	 * The admin object.
	 * @var     object
	 * @access  public
	 * @since   1.0.0
	 */
	public $admin;


	// Post Types - Start
	/**
	 * The post types we're registering.
	 * @var     array
	 * @access  public
	 * @since   1.0.0
	 */
	public $post_types = array();
	// Post Types - End
	/**
	 * Constructor function.
	 * @access  public
	 * @since   1.0.0
	 */
	public function __construct () {
		$this->token 			= 'golfcp';
		$this->plugin_url 		= plugin_dir_url( __FILE__ );
		$this->plugin_path 		= plugin_dir_path( __FILE__ );
		$this->version 			= '1.0.0';

		// Admin - Start

		if ( is_admin() ) {
			require_once( 'classes/class-golf-calculator-admin.php' );
			$this->admin = Golf_Calculator_Admin::instance();
		}
		// Admin - End
		require_once( 'golf-calculator-shortcodes.php' );
		require_once( 'widget.php' );

		register_activation_hook( __FILE__, array( $this, 'install' ) );

		add_action( 'init', array( $this, 'load_plugin_textdomain' ) );
		add_action( 'init', array( $this, 'load_assets' ) );
	} // End __construct()

	/**
	 * Main Golf_Calculator Instance
	 *
	 * Ensures only one instance of Golf_Calculator is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @static
	 * @see Golf_Calculator()
	 * @return Main Golf_Calculator instance
	 */
	public static function instance () {
		if ( is_null( self::$_instance ) )
			self::$_instance = new self();
		return self::$_instance;
	} // End instance()

	/**
	 * Load the localisation file.
	 * @access  public
	 * @since   1.0.0
	 */
	public function load_plugin_textdomain() {
		load_plugin_textdomain( 'golfcp', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	} // End load_plugin_textdomain()

	public function load_assets() {
		wp_enqueue_style( 'golf-calculator', plugin_dir_url( __FILE__ ) . 'css/golf-calculator.css', array(), $this->version, 'all' );

		wp_enqueue_script( 'jquery' );

		// Register the script
		wp_register_script( 'data_club_length_handle', plugin_dir_url( __FILE__ ) . 'js/golf-calculator.js', array('jquery'));

		// Localize the script with new data
		$club_length = array(
			'url' => plugin_dir_url( __FILE__ ) . 'data/club-length.json',
		);
		wp_localize_script( 'data_club_length_handle', 'data_club_length', $club_length );

		// Enqueued script with localized data.
		wp_enqueue_script( 'data_club_length_handle', array('jquery') );
	} 

	/**
	 * Cloning is forbidden.
	 * @access public
	 * @since 1.0.0
	 */
	public function __clone () {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?' ), '1.0.0' );
	} // End __clone()

	/**
	 * Unserializing instances of this class is forbidden.
	 * @access public
	 * @since 1.0.0
	 */
	public function __wakeup () {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?' ), '1.0.0' );
	} // End __wakeup()

	/**
	 * Installation. Runs on activation.
	 * @access  public
	 * @since   1.0.0
	 */
	public function install () {
		$this->_log_version_number();
	} // End install()

	/**
	 * Log the plugin version number.
	 * @access  private
	 * @since   1.0.0
	 */
	private function _log_version_number () {
		// Log the version number.
		update_option( $this->token . '-version', $this->version );
	} // End _log_version_number()
} // End Class
