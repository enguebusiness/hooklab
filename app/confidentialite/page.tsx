import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | HookLab",
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

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">Politique de Confidentialité</h1>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données est :</p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-white">Enguerrand Ozano (HookLab)</strong></li>
              <li>SIREN : 994 538 932</li>
              <li>Adresse : 35 rue Moïse Lambert, 59148 Flines-lez-Raches, France</li>
              <li>Email : <a href="mailto:contact@hooklab.eu" className="hover:text-white transition-colors">contact@hooklab.eu</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Données collectées</h2>
            <p>Nous collectons des informations à deux moments distincts de notre relation :</p>
            
            <div className="mt-4">
              <p className="font-semibold text-white mb-2">Sur le site internet (Demande d&apos;Audit) :</p>
              <p>Nous collectons les informations que vous nous transmettez volontairement via le formulaire :</p>
              <ul className="mt-2 space-y-1 list-disc list-inside ml-4">
                <li>Nom, Prénom</li>
                <li>Numéro de téléphone</li>
                <li>Adresse email</li>
                <li>Nom de l&apos;entreprise</li>
                <li>Ville d&apos;intervention</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="font-semibold text-white mb-2">Lors de la contractualisation (En rendez-vous ou à distance) :</p>
              <p>
                Pour la mise en place de votre dossier client, nous collectons via nos partenaires sécurisés les données 
                nécessaires à la facturation (Identité, IBAN pour le prélèvement, Signature électronique). 
                <strong className="text-white"> Aucune donnée bancaire n&apos;est stockée sur ce site internet.</strong>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Répondre à vos demandes d&apos;audit gratuit et vous recontacter.</li>
              <li>Établir le contrat de prestation et gérer la signature électronique.</li>
              <li>Mettre en place le prélèvement automatique sécurisé pour votre abonnement.</li>
              <li>Exécuter la prestation (création du site, référencement, gestion de votre visibilité).</li>
              <li>Vous envoyer vos factures et des informations importantes sur votre dossier.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Base légale</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Consentement :</strong> Pour les données envoyées via le formulaire de contact du site.</li>
              <li><strong className="text-white">Exécution du contrat :</strong> Pour les données collectées via PandaDoc et GoCardless nécessaires à la réalisation de la prestation et à la facturation.</li>
              <li><strong className="text-white">Obligation légale :</strong> Pour la conservation des factures et documents comptables.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Partage des données et Sous-traitants sécurisés</h2>
            <p className="mb-3">
              Nous ne vendons jamais vos données. Elles sont uniquement transmises aux prestataires techniques 
              rigoureusement sélectionnés pour assurer le fonctionnement du service :
            </p>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong className="text-white">PandaDoc :</strong> Pour la génération et la signature électronique sécurisée des contrats.</li>
              <li><strong className="text-white">GoCardless :</strong> Pour la gestion sécurisée des mandats de prélèvement SEPA (données bancaires).</li>
              <li><strong className="text-white">Sanity.io :</strong> Pour l&apos;hébergement des contenus (textes/photos) de votre futur site.</li>
              <li><strong className="text-white">Vercel :</strong> Pour l&apos;hébergement technique du site internet.</li>
              <li><strong className="text-white">Resend :</strong> Pour l&apos;envoi des emails transactionnels.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Sécurité des données</h2>
            <p className="mb-3">La sécurité est notre priorité.</p>
            
            <div className="space-y-3">
              <p>
                <strong className="text-white">Sur le site :</strong> Toutes les navigations se font sous protocole HTTPS 
                (cadenas fermé), garantissant le cryptage des données échangées.
              </p>
              <p>
                <strong className="text-white">Pour le paiement et les contrats :</strong> Nous utilisons des tiers de confiance 
                (GoCardless et PandaDoc) qui respectent les normes de sécurité bancaires et juridiques les plus strictes. 
                Vos coordonnées bancaires ne transitent jamais par nos serveurs informatiques.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Durée de conservation</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong className="text-white">Données prospects :</strong> 3 ans après le dernier contact.</li>
              <li><strong className="text-white">Données clients :</strong> Durant toute la relation contractuelle, puis archivées pendant 5 ans (prescription légale).</li>
              <li><strong className="text-white">Documents comptables :</strong> 10 ans (obligation légale).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Vos droits (RGPD)</h2>
            <p>
              Conformément à la réglementation, vous disposez d&apos;un droit d&apos;accès, de rectification, 
              d&apos;effacement et de portabilité de vos données.
            </p>
            <p className="mt-3">
              Pour exercer ce droit, envoyez simplement un email à : <a href="mailto:contact@hooklab.eu" className="text-white hover:underline">contact@hooklab.eu</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Cookies</h2>
            <p>
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement et des outils de mesure 
              d&apos;audience anonymes pour améliorer nos services. Aucune donnée n&apos;est revendue à des tiers publicitaires.
            </p>
          </section>

          <p className="text-white/40 pt-4 border-t border-dark-border">
            Dernière mise à jour : Février 2026
          </p>
        </div>
      </div>
    </main>
  );
}
