<?php
add_action( 'wp_enqueue_scripts', 'sayara_child_enqueue_styles' );
function sayara_child_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

add_filter( 'woocommerce_currency', function( $currency ) {
    return 'KES';
});

add_filter( 'woocommerce_currency_symbol', function( $currency_symbol, $currency ) {
    if ( 'KES' === $currency ) {
        return 'KSh';
    }
    return $currency_symbol;
}, 10, 2 );