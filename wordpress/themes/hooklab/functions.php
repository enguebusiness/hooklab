<?php
if (!defined('ABSPATH')) exit;

/* ── Setup ── */
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(['primary' => 'Navigation principale']);
});

/* ── Enqueue ── */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('inter-font', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap', [], null);
    wp_enqueue_style('hooklab-style', get_stylesheet_uri(), ['inter-font'], '1.0.0');
    wp_enqueue_script('hooklab-js', get_template_directory_uri() . '/js/main.js', [], '1.0.0', true);
    wp_localize_script('hooklab-js', 'hlAjax', [
        'url'   => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('hl_contact_nonce'),
    ]);
});

/* ── Contact form AJAX ── */
add_action('wp_ajax_hl_contact',        'hl_handle_contact');
add_action('wp_ajax_nopriv_hl_contact', 'hl_handle_contact');

function hl_handle_contact() {
    check_ajax_referer('hl_contact_nonce', 'nonce');

    $name   = sanitize_text_field($_POST['name']   ?? '');
    $phone  = sanitize_text_field($_POST['phone']  ?? '');
    $metier = sanitize_text_field($_POST['metier'] ?? '');
    $ville  = sanitize_text_field($_POST['ville']  ?? '');

    if (!$name || !$phone || !$metier || !$ville) {
        wp_send_json_error(['message' => 'Tous les champs sont obligatoires.'], 400);
    }

    $to      = 'contact@hooklab.eu';
    $subject = "[HookLab] Nouveau diagnostic – $name ($metier)";
    $message = "Nom : $name\nTéléphone : $phone\nMétier : $metier\nVille : $ville";
    $headers = ['Content-Type: text/plain; charset=UTF-8', "From: HookLab <noreply@hooklab.eu>"];

    wp_mail($to, $subject, $message, $headers);
    wp_send_json_success(['message' => 'Envoyé']);
}
