<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- NAVBAR -->
<nav id="hl-nav" role="navigation" aria-label="Navigation principale">
  <div class="container">
    <div class="nav-in">

      <!-- Logo -->
      <a href="<?php echo home_url('/'); ?>" class="nav-logo" aria-label="HookLab – Accueil">
        <div class="lb">H</div>
        Hook<em>Lab</em>
      </a>

      <!-- Desktop links -->
      <div class="nav-links">
        <a href="#methode">Notre Méthode</a>
        <a href="#exemples">Exemples</a>
        <a href="#qui-suis-je">Qui suis-je</a>
      </div>

      <!-- Desktop CTA -->
      <div class="nav-cta">
        <a href="tel:+33604408157" class="btn btn-orange">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          06 04 40 81 57
        </a>
      </div>

      <!-- Burger -->
      <button class="nav-burger" id="nav-burger" aria-label="Menu" aria-expanded="false">
        <svg id="burger-open" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg id="burger-close" style="display:none" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="nav-mob" id="nav-mob">
      <a href="#methode">Notre Méthode</a>
      <a href="#exemples">Exemples</a>
      <a href="#qui-suis-je">Qui suis-je</a>
      <a href="tel:+33604408157" class="btn btn-orange">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        06 04 40 81 57
      </a>
    </div>
  </div>
</nav>
