<?php

function include_output($filename)
{
    ob_start();
    include $filename;
    $contents = ob_get_contents();
    ob_end_clean();
    return $contents;
}

function golfcp_func( $atts ) {
	$atts = shortcode_atts( array(
	), $atts, 'golfcp' );

	return include_output("form.php");

}
add_shortcode( 'golfcp', 'golfcp_func' );