import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles du site HookLab.eu, conformément au RGPD.",
  alternates: {
    canonical: "https://hooklab.eu/confidentialite",
  },
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen py-20 md:py-32 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2 mb-10 text-white/40 hover:text-white text-sm transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">Politique de confidentialité</h1>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est :
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-white">Enguerrand Ozano</strong></li>
              <li>SIREN : 994 538 932</li>
              <li>35 rue Moïse Lambert, 59148 Flines-lez-Raches, France</li>
              <li>Email : contact@hooklab.fr</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li><strong className="text-white">Formulaire de candidature :</strong> prénom, email, téléphone, âge, profil (étudiant/parent), expérience, disponibilité, motivation, objectifs, pseudo TikTok</li>
              <li><strong className="text-white">Inscription :</strong> email, mot de passe (chiffré)</li>
              <li><strong className="text-white">Paiement :</strong> les données bancaires sont traitées directement par Stripe et ne sont jamais stockées sur nos serveurs</li>
              <li><strong className="text-white">Navigation :</strong> cookies techniques nécessaires au fonctionnement du site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Finalités du traitement</h2>
            <p>Les données personnelles sont collectées pour :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Traiter les candidatures au programme HookLab</li>
              <li>Gérer l&apos;accès à la plateforme de formation</li>
              <li>Traiter les paiements et la facturation</li>
              <li>Envoyer des communications relatives au programme (emails transactionnels)</li>
              <li>Améliorer nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Base légale</h2>
            <p>
              Le traitement des données est fondé sur :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>L&apos;exécution du contrat (accès au programme après paiement)</li>
              <li>Le consentement (formulaire de candidature)</li>
              <li>L&apos;intérêt légitime (amélioration des services)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Durée de conservation</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>Données de candidature : 2 ans à compter de la collecte</li>
              <li>Données de compte utilisateur : durée de l&apos;abonnement + 3 ans</li>
              <li>Données de facturation : 10 ans (obligation légale)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Sous-traitants</h2>
            <p>Vos données peuvent être transmises aux sous-traitants suivants :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li><strong className="text-white">Supabase</strong> (hébergement base de données et authentification) - Singapour/UE</li>
              <li><strong className="text-white">Stripe</strong> (paiement sécurisé) - États-Unis, certifié Privacy Shield</li>
              <li><strong className="text-white">Vercel</strong> (hébergement du site) - États-Unis</li>
              <li><strong className="text-white">Resend</strong> (envoi d&apos;emails transactionnels) - États-Unis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li><strong className="text-white">Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong className="text-white">Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong className="text-white">Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong className="text-white">Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
              <li><strong className="text-white">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong className="text-white">Droit de limitation :</strong> restreindre le traitement de vos données</li>
            </ul>
            <p className="mt-3">
              Pour exercer vos droits, contactez-nous à <strong className="text-white">contact@hooklab.fr</strong>.
              Vous pouvez également adresser une réclamation à la CNIL (www.cnil.fr).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Cookies</h2>
            <p>
              Le site utilise uniquement des cookies techniques nécessaires au fonctionnement de la plateforme
              (authentification, préférences de session). Aucun cookie publicitaire ou de tracking tiers n&apos;est
              utilisé.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
              vos données personnelles : chiffrement des mots de passe, connexions HTTPS, accès restreint
              aux données, hébergement sécurisé.
            </p>
          </section>

          <p className="text-white/40 pt-4 border-t border-dark-border">
            Dernière mise à jour : février 2026
          </p>
        </div>
      </div>
    </main>
  );
}
