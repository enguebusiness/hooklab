import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description:
    "CGV de HookLab - Conditions générales de vente pour les prestations de création de sites internet et référencement.",
  alternates: {
    canonical: "https://hooklab.eu/cgv",
  },
};

export default function CGV() {
  return (
    <main className="min-h-screen py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2 mb-10 text-white/40 hover:text-white text-sm transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">Conditions Générales de Vente</h1>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Article 1 - Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent la vente du programme de formation
              en ligne &ldquo;HookLab&rdquo; proposé par Enguerrand Ozano, entrepreneur individuel, SIREN 994 538 932,
              situé au 35 rue Moïse Lambert, 59148 Flines-lez-Raches, France.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Article 2 - Description du service</h2>
            <p>
              HookLab est un programme de coaching en ligne d&apos;une durée de 8 semaines, comprenant :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Des modules vidéo hebdomadaires</li>
              <li>Des appels de groupe hebdomadaires</li>
              <li>Un support WhatsApp illimité</li>
              <li>L&apos;accès à une communauté privée d&apos;entrepreneurs</li>
              <li>Des templates et scripts de contenu</li>
              <li>Une certification HookLab</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Article 3 - Prix et modalités de paiement</h2>
            <p>
              Le prix du programme est de <strong className="text-white">980€ TTC</strong>, payable en 2 mensualités
              de 490€. Le premier paiement est exigé lors de l&apos;inscription et donne accès immédiat au programme.
              Le second paiement est prélevé automatiquement 30 jours après le premier.
            </p>
            <p className="mt-3">
              TVA applicable : FR16994538932. Les paiements sont sécurisés via la plateforme Stripe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Article 4 - Processus de candidature</h2>
            <p>
              L&apos;accès au programme est soumis à la validation d&apos;un formulaire de candidature. L&apos;éditeur
              se réserve le droit de refuser toute candidature sans avoir à en justifier les raisons. En cas de
              refus, aucun paiement n&apos;est effectué.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Article 5 - Droit de rétractation</h2>
            <p>
              Conformément à l&apos;article L221-18 du Code de la consommation, le client dispose d&apos;un délai de
              <strong className="text-white"> 14 jours</strong> à compter de la date d&apos;achat pour exercer son droit
              de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
            </p>
            <p className="mt-3">
              Pour exercer ce droit, le client doit envoyer un email à <strong className="text-white">contact@hooklab.fr</strong> en
              indiquant sa volonté de se rétracter. Le remboursement sera effectué dans un délai de 14 jours
              suivant la réception de la demande.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Article 6 - Accès au programme</h2>
            <p>
              L&apos;accès au programme est personnel et non cessible. Le client s&apos;engage à ne pas partager ses
              identifiants de connexion ni le contenu du programme avec des tiers. Tout manquement à cette
              obligation pourra entraîner la résiliation immédiate de l&apos;accès sans remboursement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Article 7 - Limitation de responsabilité</h2>
            <p>
              HookLab est un programme de formation et de coaching. Les résultats obtenus dépendent de
              l&apos;implication et des actions de chaque participant. Aucune garantie de revenus n&apos;est formulée.
              Les témoignages présentés sur le site sont des exemples individuels et ne constituent pas une
              promesse de résultats similaires.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Article 8 - Protection des données</h2>
            <p>
              Les données personnelles collectées sont traitées conformément à notre{" "}
              <Link href="/confidentialite" className="text-primary hover:underline">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Article 9 - Droit applicable et litiges</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera
              recherchée avant toute action judiciaire. À défaut, les tribunaux compétents seront ceux du
              ressort du siège social de l&apos;éditeur.
            </p>
            <p className="mt-3">
              Conformément à l&apos;article L612-1 du Code de la consommation, le consommateur peut recourir
              gratuitement au service de médiation MEDICYS, par voie électronique à{" "}
              <span className="text-white">www.medicys.fr</span> ou par courrier.
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
