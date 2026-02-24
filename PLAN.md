# Plan de déploiement HookLab — Sites Artisans

---

## PHASE 1 — Serveur OVH `(toi + moi)`

### 1.1 — VPS ✅ FAIT
- [x] VPS OVH commandé — IP : `51.83.162.147` / host : `vps-9993ccd0.vps.ovh.net`
- [x] Ubuntu **22.04** LTS
- [x] WordOps installé et accessible sur `https://51.83.162.147:22222`

### 1.2 — Accès SSH

> **Problème connu :** `Permission denied (publickey,password)`
>
> **Solutions selon le cas :**

**Cas A — Tu as une clé SSH (créée à la commande du VPS)**
```bash
ssh -i ~/.ssh/ta_cle_privee root@51.83.162.147
```

**Cas B — Mot de passe root OVH (reçu par email à la création)**
```bash
# Vérifier que l'auth par mot de passe est autorisée :
# → Espace client OVH > VPS > Console KVM
# → puis dans le terminal KVM :
nano /etc/ssh/sshd_config
# Vérifier/changer : PasswordAuthentication yes
systemctl restart ssh
```

**Cas C — Réinitialiser le mot de passe root depuis OVH**
```
Espace client OVH → VPS → "Réinitialiser le mot de passe"
(reçu par email dans les 2 minutes)
```

**Cas D — Root déjà désactivé (si étape 1.2 déjà faite)**
```bash
# Essayer avec l'utilisateur hooklab
ssh hooklab@51.83.162.147
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

### 2.1 à 2.4 — Installation WordPress Multisite via WordOps

```bash
# Se connecter en SSH d'abord (voir Phase 1.2)
ssh root@51.83.162.147

# Créer le site WordPress Multisite (sous-répertoires)
# WordOps gère : BDD, Nginx, PHP, permissions automatiquement
wo site create hooklab.fr --wpsubdir --php82

# Activer HTTPS (Let's Encrypt)
wo site update hooklab.fr --letsencrypt

# Voir les identifiants générés (BDD, WP admin...)
wo site info hooklab.fr
```

> **Si le DNS hooklab.fr ne pointe pas encore vers le serveur**, utiliser l'IP :
> ```bash
> wo site create 51.83.162.147 --wpsubdir --php82
> # Puis migrer vers hooklab.fr une fois le DNS configuré (Phase 6)
> ```

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
