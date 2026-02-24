# Plan de déploiement HookLab — Sites Artisans

---

## PHASE 1 — Serveur OVH `(toi + moi)`

### 1.1 — VPS ✅ FAIT
- [x] VPS OVH commandé — IP : `51.83.162.147` / host : `vps-9993ccd0.vps.ovh.net`
- [x] Ubuntu **22.04** LTS
- [x] WordOps installé et accessible sur `https://51.83.162.147:22222`

### 1.2 — Accès SSH ✅ FAIT

> **Note :** Sur OVH Ubuntu, l'utilisateur par défaut est `ubuntu`, **pas** `root`.
> `ssh root@IP` → Permission denied (c'est normal)

```bash
# Connexion correcte :
ssh ubuntu@51.83.162.147

# Pour passer root une fois connecté :
sudo -i
```

### 1.3 — Stack LEMP ✅ FAIT (via WordOps)
> WordOps gère Nginx, PHP 8.2, MariaDB, Redis automatiquement.
> Pas besoin d'installer manuellement.

### 1.4 — Certbot ✅ FAIT (via WordOps)
> WordOps intègre Let's Encrypt nativement.

### 1.5 — Pare-feu
```bash
# À vérifier une fois connecté en SSH :
sudo ufw status
# Si inactif :
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22222  # WordOps backend
sudo ufw enable
```

---

## PHASE 2 — WordPress Multisite `(toi + moi)`

> **Objectif :** Un seul WordPress qui héberge tous les sites clients.
> Chaque client = un sous-site isolé avec son propre accès.
>
> **Avec WordOps, les étapes 2.1 à 2.4 se font en 2 commandes.**

### 2.1 à 2.4 — Installation WordPress Multisite via WordOps ✅ FAIT

```bash
# Commandes déjà exécutées :
ssh ubuntu@51.83.162.147
sudo wo site create hooklab.fr --wp --wpsubdomain
```

> **Mode choisi : sous-domaines**
> Chaque client aura son propre sous-domaine :
> `cyprien.hooklab.fr`, `dupont.hooklab.fr`, etc.
> (Nécessite un enregistrement DNS wildcard `*.hooklab.fr → 51.83.162.147`)

```bash
# Si HTTPS pas encore activé :
sudo wo site update hooklab.fr --letsencrypt

# Voir les identifiants WP admin et BDD :
sudo wo site info hooklab.fr
```

### 2.5 — Accéder au tableau de bord WordPress

> WordOps a créé ton WordPress. Voici comment y accéder.

**Récupérer le mot de passe WordPress :**
```bash
# Dans le terminal SSH :
sudo wo site info hooklab.fr
# → Affiche : URL admin, login, mot de passe, identifiants BDD
```

**Se connecter à WordPress :**
1. Ouvre ton navigateur
2. Va sur `http://hooklab.fr/wp-login.php`
   *(ou `http://51.83.162.147/wp-login.php` si le DNS n'est pas encore configuré)*
3. Saisis le login et mot de passe affichés par `wo site info`
4. Tu es dans le tableau de bord WordPress

**Accéder à l'administration réseau (Multisite) :**
- En haut à gauche, clique sur **"Mes sites"** → **"Administration du réseau"**
- OU va directement sur `http://hooklab.fr/wp-admin/network/`
- C'est depuis là que tu gères TOUS les sites clients

---

### 2.6 — Installer les plugins essentiels (réseau)

> Les plugins installés depuis l'administration réseau sont disponibles pour tous les sous-sites.
> Tu les installes une fois, tu les actives sur chaque sous-site.

**Aller dans les plugins réseau :**
1. Administration réseau → menu gauche → **"Extensions"** → **"Ajouter"**

**Installer chaque plugin (même procédure pour tous) :**
1. Dans la barre de recherche, tape le nom du plugin
2. Clique sur **"Installer maintenant"**
3. Clique sur **"Activer sur le réseau"** *(pas juste "Activer")*

**Plugins à installer dans cet ordre :**

- [ ] **Kadence Theme** *(thème de base)*
  - Menu gauche → **Apparence** → **Thèmes** → **Ajouter**
  - Recherche : `Kadence`
  - Clique **"Installer"** puis **"Activer"**

- [ ] **Kadence Blocks** *(constructeur de pages)*
  - Extensions → Ajouter → Recherche : `Kadence Blocks`
  - Installer → Activer sur le réseau

- [ ] **Rank Math SEO** *(référencement Google)*
  - Extensions → Ajouter → Recherche : `Rank Math`
  - Installer → Activer sur le réseau
  - Suivre l'assistant de configuration qui s'ouvre automatiquement

- [ ] **WP Super Cache** *(performances — gratuit)*
  - Extensions → Ajouter → Recherche : `WP Super Cache`
  - Installer → Activer sur le réseau

- [ ] **Wordfence Security** *(protection contre les hackers)*
  - Extensions → Ajouter → Recherche : `Wordfence`
  - Installer → Activer sur le réseau
  - Il te demandera un email pour les alertes → entre le tien

- [ ] **UpdraftPlus** *(sauvegardes automatiques)*
  - Extensions → Ajouter → Recherche : `UpdraftPlus`
  - Installer → Activer sur le réseau
  - Réglages → UpdraftPlus → Onglet "Réglages"
  - Fréquence : **Quotidien** (fichiers) / **Quotidien** (BDD)
  - Destination : **Google Drive** ou **Dropbox** (connexion en 2 clics)

- [ ] **NS Cloner** *(dupliquer des sites — gratuit)*
  - Extensions → Ajouter → Recherche : `NS Cloner`
  - Installer → Activer sur le réseau
  - *(Sert à créer rapidement un nouveau site client depuis un template)*

- [ ] **WPForms Lite** *(formulaire de contact)*
  - Extensions → Ajouter → Recherche : `WPForms`
  - Installer → Activer sur le réseau

---

### 2.7 — Structure des sous-sites
```
hooklab.fr               ← Site principal (vitrine HookLab)
cyprien.hooklab.fr       ← Site de Cyprien (maçon)
dupont.hooklab.fr        ← Site de M. Dupont (plombier)
martin.hooklab.fr        ← Site de M. Martin (paysagiste)
```

> DNS requis (Phase 6) :
> `Type A  *.hooklab.fr → 51.83.162.147`  (wildcard — un seul enregistrement pour tous)

---

### 2.8 — Créer le premier sous-site client (exemple)

1. Administration réseau → **"Sites"** → **"Ajouter"**
2. Remplis le formulaire :
   - **Adresse du site** : `cyprien` *(donnera `cyprien.hooklab.fr`)*
   - **Titre du site** : `Cyprien Maçonnerie`
   - **Langue** : Français
   - **Email admin** : ton email *(ou celui du client)*
3. Clique **"Ajouter un site"**
4. Le site est créé instantanément

---

### 2.9 — Donner accès à un client

> Le client peut modifier son site sans toucher aux autres.

1. Administration réseau → **"Sites"** → clique sur le nom du site client
2. Clique sur **"Utilisateurs"**
3. Clique **"Ajouter un utilisateur existant"** ou **"Ajouter un nouvel utilisateur"**
4. Entre l'email du client
5. Rôle : choisir **"Administrateur"** *(il ne peut gérer QUE son sous-site)*
6. Clique **"Ajouter un utilisateur"**
7. Le client reçoit un email avec ses identifiants

> **Le client voit uniquement son propre tableau de bord.**
> Il ne peut pas accéder aux autres sites ni installer des thèmes/plugins.

---

## PHASE 3 — Design avec Kadence `(toi)`

> Kadence est un constructeur de pages visuel — tu glisses-dépose des blocs.
> Pas besoin de coder.

### 3.1 — Configurer le thème Kadence (couleurs + polices)

1. Va sur un sous-site client : `cyprien.hooklab.fr/wp-admin`
2. Menu gauche → **"Apparence"** → **"Personnaliser"**
3. Un panneau s'ouvre à gauche, l'aperçu du site à droite

**Couleurs :**
- Clique **"Général"** → **"Couleurs"**
- **Couleur principale** : entre le code couleur HookLab (ex: `#FF6B2B`)
- **Couleur secondaire** : entre la deuxième couleur
- Les changements s'appliquent partout en temps réel

**Polices :**
- Clique **"Typographie"**
- **Police des titres** : choisis dans la liste (Google Fonts incluses)
- **Police du corps de texte** : idem
- Taille recommandée : 16-18px pour le corps de texte

**Logo :**
- Clique **"En-tête"** → **"Logo"**
- Clique **"Sélectionner le logo"** → téléverse le logo du client
- Clique **"Publier"** en haut pour sauvegarder

---

### 3.2 — Créer la page d'accueil avec Kadence Blocks

**Créer une nouvelle page :**
1. Menu gauche → **"Pages"** → **"Ajouter"**
2. Titre : `Accueil`
3. En haut à droite, clique sur les **3 points** → **"Éditeur de code"** si tu vois du code
   *(sinon tu es déjà en mode visuel — c'est bien)*

**Utiliser les modèles Kadence (le plus rapide) :**
1. Dans l'éditeur, clique sur le bouton **"Kadence"** (icône bleue en haut)
2. → **"Bibliothèque de designs"**
3. Choisis un modèle de page d'accueil pour artisan
4. Clique **"Importer"** → la page se remplit automatiquement
5. Tu n'as plus qu'à remplacer les textes et photos

**Sinon, construire bloc par bloc :**

**Bloc HERO (grande bannière en haut) :**
1. Clique **"+"** pour ajouter un bloc → cherche **"Row Layout"** (Kadence)
2. Choisis la disposition : 1 colonne pleine largeur
3. Ajoute dedans un bloc **"Titre avancé"** (Kadence Advanced Text)
4. Tape : `Maçon à [Ville] — Devis Gratuit`
5. En dessous, ajoute un bloc **"Bouton avancé"** (Kadence Advanced Button)
6. Texte du bouton : `Demander un devis gratuit`
7. Lien du bouton : `#contact` *(pointe vers la section contact plus bas)*

**Section SERVICES (3 colonnes) :**
1. Ajoute un bloc **"Row Layout"** → choisis **3 colonnes égales**
2. Dans chaque colonne, ajoute :
   - Une icône (bloc "Icon" Kadence)
   - Un titre (ex: "Rénovation de façade")
   - Un texte court (2-3 lignes de description)

**Section AVIS CLIENTS :**
1. Ajoute un bloc **"Row Layout"** → fond de couleur légèrement grisé
2. Ajoute un bloc **"Témoignage"** (Kadence Testimonial)
3. Remplis : nom client, texte de l'avis, note (étoiles)
4. Duplique le bloc pour avoir 3 avis côte à côte

**Section CONTACT :**
1. Ajoute un bloc **"Row Layout"**
2. Ajoute le bloc **"WPForms"** et sélectionne le formulaire de contact
3. À côté (colonne de droite), ajoute les coordonnées :
   - Téléphone (bloc Titre)
   - Adresse (bloc Paragraphe)
   - Horaires

**Publier la page :**
1. En haut à droite : clique **"Publier"**
2. Menu gauche → **"Réglages"** → **"Lecture"**
3. **"La page d'accueil affiche"** → sélectionne **"Une page statique"**
4. **"Page d'accueil"** → choisis `Accueil`
5. Clique **"Enregistrer les modifications"**

---

### 3.3 — Créer les autres pages

> Même procédure pour chaque page. Voici le contenu minimum.

**Page "À propos" :**
- Photo du client (artisan au travail)
- Son histoire / ses années d'expérience
- Ses certifications / qualifications (RGE, Qualibat, etc.)
- Pourquoi lui plutôt qu'un autre

**Page "Réalisations" :**
- Galerie de photos (bloc Galerie WordPress ou Kadence Gallery)
- Catégories par type de travaux
- Chaque photo avec une courte légende

**Page "Contact" :**
- Formulaire WPForms (nom, email, téléphone, message, type de travaux)
- Adresse + carte Google Maps intégrée
  *(Bloc HTML → colle le code d'intégration Google Maps)*
- Numéro de téléphone cliquable (important sur mobile)

**Page "Devis gratuit" :**
- Formulaire WPForms plus détaillé
- Champs : type de travaux, surface, ville, description, photos à joindre
- Message de confirmation : "Réponse sous 24h"

**Pages légales obligatoires :**
- **"Mentions légales"** — nom, adresse, SIRET du client
- **"Politique de confidentialité"** — WordPress en génère une automatiquement
  *(Menu → Réglages → Confidentialité)*

---

### 3.4 — Configurer le header et footer

**Header (en-tête) :**
1. Apparence → Personnaliser → **"En-tête"**
2. Ajoute le logo à gauche
3. Menu de navigation à droite : Accueil / Services / Réalisations / Contact
4. Optionnel : numéro de téléphone visible dans le header (très utile sur mobile)

**Créer le menu de navigation :**
1. Apparence → **"Menus"**
2. Clique **"Créer un menu"** → nom : `Menu principal`
3. Ajoute les pages : Accueil, Réalisations, Contact, Devis gratuit
4. Clique **"Enregistrer le menu"**
5. En bas, coche **"Menu principal"** pour l'emplacement

**Footer (pied de page) :**
1. Apparence → Personnaliser → **"Pied de page"**
2. Colonne 1 : logo + slogan
3. Colonne 2 : liens rapides (mêmes que le menu)
4. Colonne 3 : coordonnées + réseaux sociaux
5. Barre du bas : "© 2025 Nom du client — Mentions légales"

---

### 3.5 — Vérifier le rendu mobile

1. Dans le **Personnaliseur** (Apparence → Personnaliser)
2. En bas à gauche, clique sur l'icône **téléphone** 📱
3. Vérifie que tout est lisible et bien aligné
4. Le texte ne doit pas être trop petit
5. Les boutons doivent être facilement cliquables au doigt
6. Clique **"Publier"** quand tout est bon

---

## PHASE 4 — Blog + SEO `(toi)`

> Le blog sert à attirer des visiteurs depuis Google.
> Chaque article bien écrit = plus de clients potentiels.

### 4.1 — Configurer Rank Math SEO

1. Menu gauche → **"Rank Math"** → **"Assistant de configuration"**
2. Suis l'assistant :
   - **Type de site** : Site d'une entreprise locale
   - **Nom du site** : nom du client (ex: "Cyprien Maçonnerie")
   - **Logo** : téléverse le logo
3. À l'étape **"Sitemap"** : laisse tout activé par défaut → Continuer
4. À l'étape **"Optimisation"** : clique **"Analyse SEO"** pour voir le score actuel
5. Clique **"Terminer"**

**Configurer les informations locales (important pour artisans) :**
1. Rank Math → **"Réglages"** → **"Recherche locale"**
2. **Type** : Entreprise locale
3. **Nom** : nom complet du client
4. **Adresse** : adresse complète
5. **Téléphone** : numéro du client
6. **Horaires** : jours et heures d'ouverture
7. Clique **"Enregistrer les modifications"**
> Cela génère automatiquement les données Schema.org — Google affiche les infos directement dans les résultats de recherche.

---

### 4.2 — Créer des articles de blog SEO

> Chaque article doit cibler une recherche précise que les gens font sur Google.

**Exemples d'articles à créer pour un maçon à Lyon :**
```
"Combien coûte une rénovation de façade à Lyon ?"
"Maçon à Lyon : comment choisir le bon artisan ?"
"Ravalement de façade Lyon : prix et délais en 2025"
"Extension de maison à Lyon : maçon ou constructeur ?"
```

**Créer un article :**
1. Menu gauche → **"Articles"** → **"Ajouter"**
2. **Titre** : la question ou le mot-clé exact (ex: "Maçon Lyon — Devis Gratuit en 24h")
3. **Contenu** : minimum 600 mots, structuré avec des titres H2 et H3
4. **Image mise en avant** : une vraie photo du chantier du client
5. En bas de page, le panneau **Rank Math** apparaît :
   - **Mot-clé principal** : tape le mot-clé ciblé (ex: "maçon Lyon")
   - Rank Math donne un score sur 100 — vise au moins 70
   - Il te dit exactement quoi corriger (titre trop court, pas assez de mots-clés, etc.)
6. Clique **"Publier"**

**Structure d'un bon article (exemple) :**
```
H1 : Maçon à Lyon — Cyprien Maçonnerie, devis gratuit sous 24h
  H2 : Nos services de maçonnerie à Lyon
    H3 : Rénovation de façade
    H3 : Construction de mur
    H3 : Extension de maison
  H2 : Pourquoi choisir Cyprien Maçonnerie ?
  H2 : Zone d'intervention
  H2 : Demander un devis gratuit
```

---

### 4.3 — Connecter Google Search Console

> Google Search Console dit à Google que ton site existe et le surveille.

1. Va sur `https://search.google.com/search-console`
2. Connecte-toi avec un compte Google
3. Clique **"Ajouter une propriété"**
4. Entre l'URL : `https://cyprien.hooklab.fr`
5. Méthode de vérification : choisis **"Google Analytics"** ou **"Balise HTML"**
6. Avec Rank Math, c'est automatique :
   - Rank Math → Général → Google Search Console → clique **"Connecter"**
   - Suis les étapes de connexion Google
7. Une fois vérifié, clique **"Demander l'indexation"** sur les pages importantes
8. Va dans **"Sitemaps"** → entre : `sitemap_index.xml` → clique **"Envoyer"**

---

### 4.4 — Optimiser chaque page existante pour le SEO

> Pour chaque page publiée (Accueil, Contact, Réalisations...) :

1. Ouvre la page en édition
2. En bas, panneau Rank Math → entre le **mot-clé principal** de la page
3. Clique sur **"Modifier le snippet"** pour personnaliser :
   - **Titre SEO** : "Maçon Lyon — Cyprien Maçonnerie | Devis Gratuit" *(60 caractères max)*
   - **Meta description** : "Maçon à Lyon depuis 15 ans. Rénovation de façade, extension, gros œuvre. Devis gratuit sous 24h. Appelez le 06 XX XX XX XX." *(155 caractères max)*
4. Score Rank Math : vise 70+
5. Clique **"Mettre à jour"**

---

## PHASE 5 — Template client réutilisable `(toi)`

> Une fois le premier site fait, les suivants sont créés en 1h au lieu de 5h.

### 5.1 — Sauvegarder le premier site comme template

1. Sur le premier site client terminé (ex: `cyprien.hooklab.fr`)
2. Dans l'admin de CE sous-site → Extensions → **"NS Cloner"**
3. Clique **"Clone Site"**
4. **Site source** : `cyprien.hooklab.fr`
5. **Nouveau sous-domaine** : `template` *(donne `template.hooklab.fr`)*
6. **Nouveau titre** : `TEMPLATE ARTISAN`
7. Clique **"Cloner"** → le site est dupliqué en 30 secondes

> Ce site `template.hooklab.fr` est ton modèle de base.
> **Ne le publie pas** — c'est juste pour dupliquer.

---

### 5.2 — Créer un nouveau site client depuis le template

**Quand tu signes un nouveau client :**

**Étape 1 — Dupliquer le template**
1. Administration réseau → NS Cloner
2. Source : `template.hooklab.fr`
3. Nouveau sous-domaine : `martin` *(→ `martin.hooklab.fr`)*
4. Nouveau titre : `Martin Paysagiste`
5. Clique **"Cloner"**

**Étape 2 — Personnaliser le site**
1. Va sur `martin.hooklab.fr/wp-admin`
2. Apparence → Personnaliser → **change les couleurs** selon le client
3. **Remplace le logo** par le logo du client
4. Édite chaque page → remplace textes et photos

**Ce qu'il faut changer sur chaque page :**
```
- Nom de l'artisan partout dans les textes
- Ville(s) d'intervention
- Services proposés (différents d'un artisan à l'autre)
- Photos (demande les vraies photos du client)
- Numéro de téléphone
- Email de contact
- Adresse et zone d'intervention
- Avis clients (demande 3 vrais avis au client)
- Prix indicatifs si le client l'accepte
```

**Étape 3 — Configurer Rank Math pour ce client**
1. Rank Math → Réglages → Recherche locale
2. Mets les infos de Martin Paysagiste (nom, adresse, téléphone)

**Étape 4 — Créer l'accès client**
1. Administration réseau → Sites → `martin.hooklab.fr` → Utilisateurs
2. Ajouter l'email de Martin, rôle : Administrateur
3. Martin reçoit un email avec ses identifiants
4. Il peut se connecter sur `martin.hooklab.fr/wp-login.php`

**Étape 5 — Connecter son domaine (si le client a le sien)**
> Voir Phase 6.2

---

### 5.3 — Checklist de livraison client

```
Avant de livrer le site au client :
- [ ] Toutes les pages publiées et vérifiées
- [ ] Formulaire de contact testé (envoie un vrai message)
- [ ] Email de réception du formulaire vérifié
- [ ] Numéro de téléphone cliquable sur mobile
- [ ] Site testé sur mobile ET desktop
- [ ] HTTPS activé (cadenas vert dans le navigateur)
- [ ] Score PageSpeed > 80 (test sur pagespeed.web.dev)
- [ ] Rank Math configuré sur toutes les pages
- [ ] Google Search Console connecté
- [ ] Sitemap soumis à Google
- [ ] Mentions légales présentes
- [ ] Politique de confidentialité présente
- [ ] Accès client créé et testé
```

**Formation client (15 min en visio) :**
```
Montrer :
1. Comment se connecter (wp-login.php)
2. Comment modifier un texte (cliquer sur la page → modifier)
3. Comment changer une photo
4. Comment voir les messages du formulaire de contact
5. Comment créer un article de blog
```

---

## PHASE 6 — DNS `(toi + moi)`

> Le DNS c'est comme un annuaire téléphonique :
> il dit aux navigateurs "pour hooklab.fr, va à l'IP 51.83.162.147".

### 6.1 — Configurer le DNS de hooklab.fr (OVH)

**Connexion à l'espace OVH :**
1. Va sur `https://www.ovhcloud.com/fr/`
2. Clique **"Espace client"** en haut à droite
3. Connecte-toi avec ton compte OVH

**Accéder à la zone DNS :**
1. Menu gauche → **"Web Cloud"**
2. Clique sur **"Noms de domaine"**
3. Clique sur `hooklab.fr`
4. Clique sur l'onglet **"Zone DNS"**

**Ajouter les enregistrements :**

Clique **"Ajouter une entrée"** et répète pour chaque ligne :

| Type | Sous-domaine | Cible | TTL |
|------|-------------|-------|-----|
| A | *(vide = hooklab.fr)* | `51.83.162.147` | 3600 |
| A | `*` | `51.83.162.147` | 3600 |
| A | `www` | `51.83.162.147` | 3600 |

> Le `*` (wildcard) couvre automatiquement tous les sous-domaines :
> `cyprien.hooklab.fr`, `martin.hooklab.fr`, etc.
> **Un seul enregistrement pour tous les clients.**

**Valider :**
- Clique **"Valider"** après chaque entrée
- La propagation DNS prend **5 à 30 minutes** (parfois jusqu'à 24h)

---

### 6.2 — Domaine custom pour un client (optionnel)

> Si un client veut son propre domaine (ex: `martin-paysagiste.fr`)
> au lieu de `martin.hooklab.fr`.

**Dans la zone DNS du domaine client (chez son registrar) :**

| Type | Sous-domaine | Cible |
|------|-------------|-------|
| A | *(vide)* | `51.83.162.147` |
| A | `www` | `51.83.162.147` |

**Dans WordPress (Network Admin) :**
1. Administration réseau → Sites → `martin.hooklab.fr`
2. Clique **"Modifier"**
3. Change **"Adresse du site"** → `https://martin-paysagiste.fr`
4. Clique **"Enregistrer"**

**Activer le HTTPS pour ce domaine :**
```bash
# Dans le terminal SSH :
ssh ubuntu@51.83.162.147
sudo wo site update hooklab.fr --letsencrypt
# WordOps détecte automatiquement les nouveaux domaines
```

---

### 6.3 — Activer le HTTPS (cadenas vert)

```bash
# Dans le terminal SSH, une seule commande :
sudo wo site update hooklab.fr --letsencrypt
```

> WordOps génère automatiquement les certificats SSL pour :
> - `hooklab.fr`
> - `*.hooklab.fr` (tous les sous-domaines clients)
>
> Le certificat se renouvelle automatiquement tous les 90 jours.

---

### 6.4 — Vérifications finales après DNS

- [ ] Ouvre `https://hooklab.fr` → doit afficher ton site (avec cadenas vert)
- [ ] Ouvre `https://cyprien.hooklab.fr` → doit afficher le site de Cyprien
- [ ] Teste le formulaire de contact → vérifie que tu reçois l'email
- [ ] Teste depuis un téléphone → le site doit être lisible et rapide
- [ ] Va sur `https://pagespeed.web.dev/` → entre l'URL → score doit être > 80
- [ ] Va sur `https://search.google.com/search-console` → demande l'indexation

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
