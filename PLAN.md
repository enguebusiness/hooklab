# Plan de déploiement HookLab — Sites Artisans

---

## PHASE 1 — Serveur OVH `(toi + moi)`

### 1.1 — Créer le VPS
- [ ] Commander VPS OVH (région Roubaix ou Gravelines)
- [ ] Choisir Ubuntu 24.04 LTS
- [ ] Noter l'IP publique

### 1.2 — Sécuriser l'accès SSH
```bash
# Connexion initiale
ssh root@TON_IP

# Créer un utilisateur admin
adduser hooklab
usermod -aG sudo hooklab

# Désactiver le login root SSH
nano /etc/ssh/sshd_config
# → PermitRootLogin no
systemctl restart ssh
```

### 1.3 — Installer la stack LEMP
```bash
sudo apt update && sudo apt upgrade -y

# Nginx
sudo apt install nginx -y

# MariaDB (base de données)
sudo apt install mariadb-server -y
sudo mysql_secure_installation

# PHP 8.2 + extensions WordPress
sudo apt install php8.2 php8.2-fpm php8.2-mysql php8.2-curl \
  php8.2-gd php8.2-mbstring php8.2-xml php8.2-zip php8.2-intl -y
```

### 1.4 — Installer Certbot (HTTPS gratuit)
```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 1.5 — Configurer le pare-feu
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## PHASE 2 — WordPress Multisite `(toi + moi)`

> **Objectif :** Un seul WordPress qui héberge tous les sites clients.
> Chaque client = un sous-site isolé avec son propre accès.

### 2.1 — Créer la base de données
```bash
sudo mysql -u root -p

CREATE DATABASE hooklab_wp;
CREATE USER 'wp_user'@'localhost' IDENTIFIED BY 'MOT_DE_PASSE_FORT';
GRANT ALL PRIVILEGES ON hooklab_wp.* TO 'wp_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### 2.2 — Télécharger WordPress
```bash
cd /var/www/
sudo wget https://wordpress.org/latest.tar.gz
sudo tar -xzf latest.tar.gz
sudo mv wordpress hooklab
sudo chown -R www-data:www-data /var/www/hooklab
```

### 2.3 — Configurer Nginx pour le Multisite
```nginx
# /etc/nginx/sites-available/hooklab
server {
    listen 80;
    server_name hooklab.fr *.hooklab.fr;
    root /var/www/hooklab;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
    }

    # Multisite — sous-répertoires
    if (!-e $request_filename) {
        rewrite /wp-admin$ $scheme://$host$uri/ permanent;
        rewrite ^(/[^/]+)?(/wp-.*) $2 last;
        rewrite ^(/[^/]+)?(/.*\.php) $2 last;
    }
}
```

### 2.4 — Activer le Multisite dans wp-config.php
```php
/* Multisite */
define('WP_ALLOW_MULTISITE', true);
define('MULTISITE', true);
define('SUBDOMAIN_INSTALL', false); // sous-répertoires
define('DOMAIN_CURRENT_SITE', 'hooklab.fr');
define('PATH_CURRENT_SITE', '/');
define('SITE_ID_CURRENT_SITE', 1);
define('BLOG_ID_CURRENT_SITE', 1);
```

### 2.5 — Installer les plugins essentiels (réseau)
- [ ] **Kadence Blocks** — page builder
- [ ] **Kadence Theme** — thème de base
- [ ] **WP Rocket** ou **LiteSpeed Cache** — performances
- [ ] **Wordfence** — sécurité
- [ ] **UpdraftPlus** — sauvegardes automatiques
- [ ] **Yoast SEO** ou **Rank Math** — SEO

### 2.6 — Structure des sous-sites
```
hooklab.fr/              ← Site principal (vitrine HookLab)
hooklab.fr/cyprien/      ← Site de Cyprien (maçon)
hooklab.fr/dupont/       ← Site de M. Dupont (plombier)
hooklab.fr/martin/       ← Site de M. Martin (paysagiste)
```

> Ou avec sous-domaines si préféré :
> `cyprien.hooklab.fr`, `dupont.hooklab.fr`

### 2.7 — Permissions client
- Chaque client reçoit un accès **Éditeur** (ou **Administrateur de sous-site**)
- Il peut modifier ses textes, images, pages
- Il **ne peut pas** modifier les autres sites
- Il **ne peut pas** installer des plugins ou thèmes

---

## PHASE 3 — Design Kadence `(surtout toi)`

> Reproduire le design actuel des pages `/macon`, `/plombier`, `/paysagiste`
> avec Kadence Blocks.

### Checklist design
- [ ] Importer la palette de couleurs HookLab dans Kadence
- [ ] Configurer la typographie (polices actuelles)
- [ ] Recréer le header / navbar
- [ ] Recréer la section Hero (titre + CTA)
- [ ] Section "Nos services" (3 colonnes)
- [ ] Section témoignages / avis Google
- [ ] Formulaire de contact / devis
- [ ] Footer avec coordonnées + mentions légales
- [ ] Responsive mobile vérifié

### Astuce Kadence
```
Kadence → Design Library → "Save as Template"
→ Réutiliser ce template pour chaque nouveau client
```

---

## PHASE 4 — Blog + SEO `(toi)`

### Structure recommandée
```
hooklab.fr/blog/                    ← Blog principal HookLab
hooklab.fr/cyprien/blog/            ← Articles SEO locaux de Cyprien
```

### Checklist SEO par site client
- [ ] Yoast / Rank Math configuré
- [ ] Sitemap XML généré
- [ ] Google Search Console connecté
- [ ] Meta title + description sur chaque page
- [ ] Balises H1/H2 structurées
- [ ] Images optimisées (WebP + alt text)
- [ ] Page "Mentions légales" + "Politique confidentialité"
- [ ] Schema.org LocalBusiness (nom, adresse, téléphone)

### Mots-clés cibles (exemple Maçon)
```
maçon [ville]
entreprise maçonnerie [ville]
devis maçon [ville]
rénovation façade [ville]
```

---

## PHASE 5 — Template client `(toi)`

> Créer **1 template Kadence réutilisable** pour tous les artisans.
> Nouveau client = dupliquer le template + changer textes/photos.

### Contenu du template
- [ ] Page d'accueil complète (Hero, Services, Avis, Contact)
- [ ] Page "À propos"
- [ ] Page "Réalisations" (galerie photos)
- [ ] Page "Contact" avec formulaire
- [ ] Page "Devis gratuit"
- [ ] Articles de blog pré-remplis (à adapter par ville)

### Livraison client
```
1. Dupliquer le sous-site template
2. Remplacer logo, couleurs, textes, photos
3. Configurer le nom de domaine client
4. Créer son accès Éditeur
5. Former le client (15 min en visio)
```

---

## PHASE 6 — Migration DNS `(toi + moi)`

> Faire pointer les domaines clients vers le serveur OVH.

### 6.1 — Domaine principal hooklab.fr
```
Type A    hooklab.fr        → TON_IP_OVH
Type A    *.hooklab.fr      → TON_IP_OVH  (wildcard pour sous-domaines)
```

### 6.2 — Domaine custom par client (optionnel)
```
# Si le client a son propre domaine (ex: cyprien-macon.fr)
Type A    cyprien-macon.fr  → TON_IP_OVH
Type A    www               → TON_IP_OVH
```

### 6.3 — HTTPS automatique
```bash
# Générer les certificats SSL
sudo certbot --nginx -d hooklab.fr -d www.hooklab.fr
sudo certbot --nginx -d cyprien-macon.fr -d www.cyprien-macon.fr

# Renouvellement automatique (déjà inclus avec Certbot)
sudo systemctl enable certbot.timer
```

### 6.4 — Vérifications post-migration
- [ ] https:// fonctionne sur tous les domaines
- [ ] Pas de contenu mixte HTTP/HTTPS
- [ ] Redirections www → non-www (ou inverse)
- [ ] Formulaires de contact fonctionnels
- [ ] Emails de notification reçus
- [ ] Google Search Console mise à jour

---

## Récapitulatif

| Phase | Responsable | Durée estimée |
|-------|------------|---------------|
| 1 — Serveur OVH | toi + moi | 1h |
| 2 — WordPress Multisite | toi + moi | 1-2h |
| 3 — Design Kadence | toi | 3-5h par template |
| 4 — Blog + SEO | toi | ongoing |
| 5 — Template client | toi | 1h par client |
| 6 — Migration DNS | toi + moi | 30min |

---

*Dernière mise à jour : 2026-02-24*
