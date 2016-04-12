<?php

function golfcp_func( $atts ) {
	$atts = shortcode_atts( array(
	), $atts, 'golfcp' );

	return 	'<form class="pure-form pure-form-aligned">'
			    .'<fieldset>'
			    .    '<div class="pure-control-group">'
			    .        '<label for="name">Height</label>'
			    .        '<input id="name" type="text" placeholder="Height">'
			    .    '</div>'
			    .    '<div class="pure-control-group">'
			    .        '<label for="password">WRIST TO FLOOR</label>'
			    .        '<input id="password" type="password" placeholder="WRIST TO FLOOR">'
			    .    '</div>'
			    .'</fieldset>'
			.'</form>';
}
add_shortcode( 'golfcp', 'golfcp_func' );