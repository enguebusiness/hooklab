<?php get_header(); ?>

<!-- ══════════════════════════════════
     HERO
══════════════════════════════════ -->
<section id="hl-hero" aria-label="Introduction">
  <div class="h-g1"></div>
  <div class="h-g2"></div>
  <div class="h-grid"></div>
  <div class="h-blob h-blob-1"></div>
  <div class="h-blob h-blob-2"></div>
  <div class="h-blob h-blob-3"></div>

  <div class="h-cont container">
    <div class="h-gl">

      <!-- Left -->
      <div>
        <div class="h-loc">
          <span class="dot"></span>
          Flines-lez-Raches, Nord (59)
        </div>

        <h1 class="h-h1">
          <span class="l1">Artisans du Nord&nbsp;:</span>
          <span class="l2">Votre savoir-faire</span>
          <span class="l3">mérite d'être vu.</span>
        </h1>

        <p class="h-sub">
          Vous construisez du solide sur vos chantiers. Je construis votre réputation solide sur internet.
          Basé à Flines-lez-Raches, j'aide les professionnels du bâtiment de Douai, Orchies et Valenciennes
          à être trouvés et choisis par les bons clients.
        </p>

        <div class="h-ctas">
          <a href="#contact" class="btn btn-orange btn-lg pulse">
            DÉMARRER MON DIAGNOSTIC GRATUIT
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
        <p class="h-ne">Sans engagement. Réponse sous 24h.</p>

        <div class="h-chks">
          <?php foreach (['Réponse sous 24h', '100% Géré pour vous', 'Pas de jargon'] as $item): ?>
          <div class="h-chk">
            <div class="cc">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <span><?php echo esc_html($item); ?></span>
          </div>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Right – portrait -->
      <div class="h-portrait">
        <div class="h-p-inner">
          <div class="h-p-glow"></div>
          <div class="h-p-img">
            <?php
            $portrait = get_theme_mod('hero_portrait', '');
            if ($portrait):
            ?>
              <img src="<?php echo esc_url($portrait); ?>" alt="Enguerrand Ozano – HookLab">
            <?php else: ?>
              <div class="h-p-ph">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <p>Votre photo ici</p>
              </div>
            <?php endif; ?>
          </div>
          <div class="h-p-badge">Expert Nord (59)</div>
        </div>
      </div>

    </div>
  </div>

  <a href="#hl-pb" class="h-scroll" aria-label="Défiler vers le bas">
    <span>Scroll</span>
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
    </svg>
  </a>
</section>

<!-- ══════════════════════════════════
     PROBLÉMATIQUE
══════════════════════════════════ -->
<section id="hl-pb" class="sec" aria-label="La problématique">
  <div class="container" style="max-width:56rem">

    <div class="sr sr-up" style="text-align:center;margin-bottom:3rem">
      <h2 class="pb-title">Mon rôle&nbsp;? <em>Faire savoir que vous êtes le meilleur.</em></h2>
      <p class="pb-sub">
        Vous avez l'expertise terrain, j'ai les outils pour la valoriser. Mon travail est simple&nbsp;:
        m'assurer que la qualité de votre travail se voit aussi bien sur Google que sur vos chantiers.
      </p>
    </div>

    <div class="sr sr-up" style="transition-delay:.1s">
      <p class="pb-lead">Ce que je règle pour vous&nbsp;:</p>
    </div>

    <div class="pb-list">
      <?php
      $items = [
        ['Fini les « touristes »', 'Votre site filtre les demandes. Ceux qui vous appellent ont déjà vu vos réalisations et votre sérieux. Ils ne cherchent pas « un prix », ils cherchent votre qualité.'],
        ['Devant les concurrents', 'Quand un client tape « Terrassement » ou « Sol équestre » dans le secteur, c'est votre entreprise qui doit s'afficher en premier. Pas celle du voisin moins équipé.'],
        ['Zéro jargon, 100 % efficace', 'Pas de baratin technique. Je m'occupe de toute la mécanique (référencement, mises à jour, sécurité). Vous, vous avez juste un outil qui tourne et qui remplit le planning.'],
      ];
      foreach ($items as $i => $item):
        $delay = $i * 150;
      ?>
      <div class="pb-item sr sr-lf" style="transition-delay:<?php echo $delay; ?>ms">
        <div class="chk chk-or">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <div class="pb-item-text">
          <strong><?php echo esc_html($item[0]); ?></strong>
          <p><?php echo esc_html($item[1]); ?></p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>

    <div class="sr sr-fd">
      <div class="pb-engage">
        <p>
          <strong>Mon engagement&nbsp;:</strong>
          Je ne suis pas là pour vous vendre du &laquo;&nbsp;rêve digital&nbsp;&raquo;. Je construis votre
          <strong>Dossier de Confiance</strong> numérique pour que vos devis soient signés plus vite, et plus souvent.
        </p>
      </div>
    </div>

  </div>
</section>

<!-- ══════════════════════════════════
     PROCESS
══════════════════════════════════ -->
<section id="hl-proc" class="sec" aria-label="Le processus" style="background:var(--bg)">
  <div class="container">

    <div class="sec-h sr sr-up">
      <span class="badge badge-or">Le Triptyque HookLab</span>
      <h2>3 piliers pour remplir votre <em>carnet de commandes.</em></h2>
      <p>Un système complet qui travaille pour vous 24h/24, même quand vous êtes sur le chantier.</p>
    </div>

    <div class="proc-steps">
      <?php
      $steps = [
        [
          'num'   => '01',
          'sub'   => 'Être trouvé par les bons clients',
          'title' => 'Avis Google Maps automatiques',
          'desc'  => 'Vos clients satisfaits laissent un avis en 30 secondes grâce à notre système automatisé. Plus d'avis = meilleur classement Google Maps = plus de clients qualifiés qui vous trouvent avant votre concurrent.',
          'pts'   => ["Système d'envoi automatique après chaque chantier", 'QR Code personnalisé à montrer au client', 'Vos avis montent, votre classement Google aussi'],
          'img'   => get_theme_mod('process_google', ''),
          'rev'   => false,
        ],
        [
          'num'   => '02',
          'sub'   => 'Montrer votre savoir-faire au quotidien',
          'title' => 'Facebook géré pour vous',
          'desc'  => 'Je gère votre page Facebook avec vos photos de chantier. Vous prenez une photo, je la transforme en publication professionnelle qui donne envie. Micro-formation incluse pour prendre de belles photos sur le chantier.',
          'pts'   => ['Publications régulières avec vos réalisations', 'Micro-formation : photos qui vendent', 'Vos futurs clients voient votre travail avant de vous appeler'],
          'img'   => get_theme_mod('process_facebook', ''),
          'rev'   => true,
        ],
        [
          'num'   => '03',
          'sub'   => 'Transformer les visiteurs en devis qualifiés',
          'title' => 'Site internet qui convertit',
          'desc'  => 'Un site pro qui met en avant votre travail, votre savoir-faire, votre plus-value. Avec un formulaire intelligent qui trie les curieux et augmente le nombre de devis qualifiés. Fini les appels pour « juste un prix ».',
          'pts'   => ['Design pro qui inspire confiance immédiate', 'Formulaire intelligent : filtre les curieux', 'Optimisé Google pour votre zone (Douai, Orchies, Valenciennes)'],
          'img'   => get_theme_mod('process_site', ''),
          'rev'   => false,
        ],
      ];
      foreach ($steps as $i => $s):
        $dir = ($i % 2 === 0) ? 'sr-lf' : 'sr-rt';
        $rev = $s['rev'] ? 'rev' : '';
      ?>
      <div class="proc-step <?php echo $rev; ?> sr <?php echo $dir; ?>" style="transition-delay:<?php echo $i*100; ?>ms">

        <!-- Image -->
        <div class="ps-img">
          <div class="ps-img-inner">
            <?php if ($s['img']): ?>
              <img src="<?php echo esc_url($s['img']); ?>" alt="<?php echo esc_attr($s['title']); ?>" loading="lazy">
            <?php else: ?>
              <div style="width:100%;height:20rem;background:var(--navy-l);display:flex;align-items:center;justify-content:center">
                <span style="color:rgba(255,255,255,.3);font-size:.875rem">Image à configurer</span>
              </div>
            <?php endif; ?>
          </div>
          <div class="ps-num"><?php echo esc_html($s['num']); ?></div>
        </div>

        <!-- Text -->
        <div class="ps-txt">
          <span class="sub"><?php echo esc_html($s['sub']); ?></span>
          <h3><?php echo esc_html($s['title']); ?></h3>
          <p><?php echo esc_html($s['desc']); ?></p>
          <ul class="ps-pts">
            <?php foreach ($s['pts'] as $pt): ?>
            <li class="ps-pt">
              <div class="chk chk-or" style="margin-top:.125rem">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span><?php echo esc_html($pt); ?></span>
            </li>
            <?php endforeach; ?>
          </ul>
        </div>

      </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>

<!-- ══════════════════════════════════
     DEMOS LIVE
══════════════════════════════════ -->
<section id="exemples" class="sec" aria-label="Exemples" style="background:var(--bg)">
  <div class="container">

    <div class="sec-h sr sr-up" style="margin-bottom:3.5rem">
      <span class="badge badge-or">Exemples</span>
      <h2>Ne signez pas les yeux fermés. <em>Regardez ce que je peux faire pour vous.</em></h2>
      <p>Je ne vous demande pas de me croire sur parole. J'ai préparé des modèles adaptés à votre métier. Cliquez et imaginez votre logo à la place.</p>
    </div>

    <div class="demos-grid">
      <?php
      $demos = [
        [
          'title' => 'Le Modèle « Gros Œuvre »',
          'sub'   => 'Maçons, Couvreurs',
          'desc'  => 'Idéal pour montrer la technique. Un site qui met en avant vos photos « Avant / Après » pour prouver la qualité de vos finitions.',
          'cta'   => 'Voir un exemple Maçonnerie',
          'href'  => home_url('/macon'),
          'icon'  => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>',
        ],
        [
          'title' => 'Le Modèle « Création »',
          'sub'   => 'Paysagistes, Peintres',
          'desc'  => 'Idéal pour vendre du rêve. Un design épuré qui laisse toute la place à la beauté de vos réalisations.',
          'cta'   => 'Voir un exemple Paysagiste',
          'href'  => home_url('/paysagiste'),
          'icon'  => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>',
        ],
        [
          'title' => 'Le Modèle « Intervention »',
          'sub'   => 'Plombiers, Électriciens',
          'desc'  => 'Idéal pour l'urgence. Un site ultra-rapide avec votre numéro de téléphone bien visible pour être appelé en un clic.',
          'cta'   => 'Voir un exemple Plombier',
          'href'  => home_url('/plombier'),
          'icon'  => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>',
        ],
      ];
      foreach ($demos as $i => $d):
      ?>
      <div class="card sr sr-up" style="transition-delay:<?php echo $i*200; ?>ms">
        <div class="dc-head">
          <div class="dc-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><?php echo $d['icon']; ?></svg>
          </div>
          <h3><?php echo esc_html($d['title']); ?></h3>
          <p><?php echo esc_html($d['sub']); ?></p>
        </div>
        <div class="dc-body">
          <p><?php echo esc_html($d['desc']); ?></p>
          <a href="<?php echo esc_url($d['href']); ?>" class="dc-cta">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            <?php echo esc_html($d['cta']); ?>
          </a>
        </div>
      </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>

<!-- ══════════════════════════════════
     ABOUT ME
══════════════════════════════════ -->
<section id="qui-suis-je" class="sec" aria-label="Qui suis-je">
  <div id="hl-about">
    <div class="ab-c1"></div>
    <div class="ab-c2"></div>

    <div class="container" style="position:relative;z-index:1">
      <div style="display:grid;grid-template-columns:1fr;gap:3rem;align-items:center" id="about-grid">

        <!-- Photo -->
        <div class="ab-wrap sr sr-lf">
          <div class="ab-inner">
            <div class="ab-frame">
              <?php
              $photo = get_theme_mod('about_photo', '');
              if ($photo):
              ?>
                <img src="<?php echo esc_url($photo); ?>" alt="Enguerrand Ozano">
              <?php else: ?>
                <div class="ab-ph">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <p>Votre photo ici<br><small style="color:rgba(255,255,255,.35)">Personnalisable</small></p>
                </div>
              <?php endif; ?>
            </div>
            <div class="ab-loc">Basé à Flines-lez-Raches</div>
          </div>
        </div>

        <!-- Text -->
        <div class="ab-txt sr sr-rt">
          <span class="badge badge-wh" style="margin-bottom:1rem">Votre expert local</span>
          <h2>Enguerrand Ozano. <em>Votre voisin à Flines-lez-Raches.</em></h2>
          <p>Oubliez les plateformes téléphoniques à l'autre bout du monde. Je suis ici, dans le Nord (59). Je connais la réalité de vos métiers et vos contraintes géographiques.</p>

          <ul class="ab-list">
            <?php
            $items = [
              ['Un interlocuteur unique',   'C'est moi qui gère votre dossier du début à la fin.'],
              ['100% Géré pour vous',       'Une fois le site lancé, vous n'avez rien à faire. Si vous avez une nouvelle photo de chantier, vous me l'envoyez, je la mets en ligne.'],
              ['Pas de mauvaise surprise',  'Tout est clair dès le départ.'],
            ];
            foreach ($items as $item):
            ?>
            <li class="ab-li">
              <div class="chk chk-wh" style="flex-shrink:0;margin-top:.125rem">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <p><strong><?php echo esc_html($item[0]); ?>&nbsp;:</strong> <?php echo esc_html($item[1]); ?></p>
            </li>
            <?php endforeach; ?>
          </ul>

          <a href="#contact" class="btn btn-navy">
            Discutons de votre situation
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════
     FAQ
══════════════════════════════════ -->
<section id="hl-faq" class="sec" aria-label="Questions fréquentes">
  <div class="container" style="max-width:48rem">

    <div class="sec-h sr sr-up" style="margin-bottom:3rem">
      <span class="badge badge-nv">FAQ</span>
      <h2 style="color:var(--navy)">Questions Franches</h2>
    </div>

    <div class="faq-list">
      <?php
      $faqs = [
        ['Je n'y connais rien en informatique, est-ce un problème ?', 'Absolument pas. C'est mon travail. Vous continuez à gérer vos chantiers, je m'occupe de tout ce qui est technique (sécurité, mise en ligne, affichage sur mobile).'],
        ['J'ai déjà une page Facebook, ça suffit non ?', 'Facebook est utile, mais ce n'est pas à vous. Un site internet est votre propriété et inspire beaucoup plus confiance pour signer des devis importants. C'est la différence entre un bricoleur et une entreprise établie.'],
        ['Combien ça coûte ?', 'Chaque artisan a des besoins différents. Je propose des forfaits clairs et adaptés aux TPE. Pas de frais cachés. Nous en parlerons de vive voix lors de l'audit.'],
      ];
      foreach ($faqs as $i => $faq):
      ?>
      <div class="faq-item sr sr-up" style="transition-delay:<?php echo $i*100; ?>ms">
        <button class="faq-q" aria-expanded="false">
          <span><?php echo esc_html($faq[0]); ?></span>
          <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div class="faq-a" role="region">
          <div class="faq-a-in"><?php echo esc_html($faq[1]); ?></div>
        </div>
      </div>
      <?php endforeach; ?>
    </div>

    <!-- JSON-LD FAQ -->
    <script type="application/ld+json">
    <?php
    $faq_ld = ['@context'=>'https://schema.org','@type'=>'FAQPage','mainEntity'=>[]];
    foreach ($faqs as $f) {
      $faq_ld['mainEntity'][] = ['@type'=>'Question','name'=>$f[0],'acceptedAnswer'=>['@type'=>'Answer','text'=>$f[1]]];
    }
    echo json_encode($faq_ld, JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
    ?>
    </script>

  </div>
</section>

<!-- ══════════════════════════════════
     CONTACT
══════════════════════════════════ -->
<section id="contact" class="sec" aria-label="Contact">
  <div id="hl-contact">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr;gap:3rem;align-items:center" id="contact-grid">

        <!-- Left -->
        <div class="ct-l sr sr-lf">
          <span class="badge badge-or">Audit gratuit</span>
          <h2>Prêt à sécuriser votre carnet de commandes&nbsp;?</h2>
          <p>Je regarde votre situation actuelle sur internet (gratuitement) et je vous dis honnêtement ce qu'on peut améliorer.</p>
          <ul class="ct-chks">
            <?php
            $checks = [
              'Audit de votre présence Google actuelle',
              'Analyse de vos concurrents locaux',
              'Plan d'action concret et chiffré',
              'Réponse sous 24h',
            ];
            foreach ($checks as $c):
            ?>
            <li class="ct-chk">
              <div class="chk-or2">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span><?php echo esc_html($c); ?></span>
            </li>
            <?php endforeach; ?>
          </ul>
        </div>

        <!-- Right – form -->
        <div class="sr sr-rt">
          <div class="ct-box">
            <!-- Success -->
            <div class="ct-success" id="ct-success">
              <div class="si">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3>Demande envoyée&nbsp;!</h3>
              <p>Je vous recontacte sous 24h pour planifier votre audit.</p>
            </div>

            <!-- Form -->
            <div class="ct-form-wrap" id="ct-form-wrap">
              <h3>Réserver mon audit gratuit</h3>
              <p>Remplissez le formulaire, je vous recontacte rapidement.</p>

              <form class="ct-form" id="hl-contact-form" novalidate>
                <?php wp_nonce_field('hl_contact_nonce', 'hl_nonce'); ?>

                <div class="form-g">
                  <label class="form-l" for="hl-name">Votre nom</label>
                  <input class="form-i" id="hl-name" name="name" type="text" required placeholder="Marc Dupont">
                </div>
                <div class="form-g">
                  <label class="form-l" for="hl-phone">Téléphone</label>
                  <input class="form-i" id="hl-phone" name="phone" type="tel" required placeholder="06 12 34 56 78">
                </div>
                <div class="form-g">
                  <label class="form-l" for="hl-metier">Votre métier</label>
                  <input class="form-i" id="hl-metier" name="metier" type="text" required placeholder="Couvreur, Menuisier, Paysagiste...">
                </div>
                <div class="form-g">
                  <label class="form-l" for="hl-ville">Ville / Zone</label>
                  <input class="form-i" id="hl-ville" name="ville" type="text" required placeholder="Douai, Valenciennes, Orchies...">
                </div>

                <p class="form-err" id="ct-error" style="display:none"></p>

                <button type="submit" class="btn btn-orange btn-lg btn-full" id="ct-submit">
                  RÉSERVER MON AUDIT GRATUIT
                </button>
                <p class="form-hint">Gratuit &middot; Sans engagement &middot; Réponse sous 24h</p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<?php
// Responsive about grid
add_action('wp_footer', function () {
?>
<style>
@media(min-width:768px){
  #about-grid{grid-template-columns:1fr 1fr}
  #contact-grid{grid-template-columns:1fr 1fr}
}
</style>
<?php
});
?>

<?php get_footer(); ?>
