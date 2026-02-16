import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site HookLab.eu - Agence web pour artisans du bâtiment à Flines-lez-Raches (59). SIREN 994 538 932.",
  alternates: {
    canonical: "https://hooklab.eu/mentions-legales",
  },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen py-20 md:py-32 bg-dark-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Bouton retour */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 mb-10 text-white/40 hover:text-white text-sm transition-colors group"
        >
          <svg 
            className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">Mentions Légales</h1>

        <div className="space-y-12 text-white/70 text-sm leading-relaxed">
          
          {/* Introduction Légale */}
          <p className="text-white/60 italic">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique, 
            il est précisé aux utilisateurs du site <strong>hooklab.eu</strong> l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>

          {/* Section 1 : Édition */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-primary">1.</span> Édition du site
            </h2>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="mb-4">
                Le présent site, accessible à l’URL <a href="https://hooklab.eu" className="text-primary hover:underline">https://hooklab.eu</a> (le « Site »), est édité par :
              </p>
              <ul className="space-y-2">
                <li><strong className="text-white">Nom :</strong> Enguerrand OZANO</li>
                <li><strong className="text-white">Statut :</strong> Entrepreneur individuel</li>
                <li><strong className="text-white">SIREN :</strong> 994 538 932 (R.C.S. de Douai)</li>
                <li><strong className="text-white">Numéro de TVA Intracommunautaire :</strong> FR16994538932</li>
                <li><strong className="text-white">Adresse :</strong> 35 rue Moïse Lambert, 59148 Flines-lez-Raches, France</li>
                <li><strong className="text-white">Directeur de la publication :</strong> Enguerrand OZANO</li>
                <li><strong className="text-white">Contact :</strong> <a href="mailto:contact@hooklab.eu" className="hover:text-white transition-colors">contact@hooklab.eu</a></li>
              </ul>
            </div>
          </section>

          {/* Section 2 : Hébergement */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-primary">2.</span> Hébergement
            </h2>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="mb-2">Le Site est hébergé par la société :</p>
              <ul className="space-y-1">
                <li><strong className="text-white">Vercel Inc.</strong></li>
                <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><strong className="text-white">Contact :</strong> privacy@vercel.com</li>
                <li><strong className="text-white">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">vercel.com</a></li>
              </ul>
            </div>
          </section>

          {/* Section 3 : Propriété Intellectuelle */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              <span className="text-primary">3.</span> Propriété intellectuelle et contrefaçons
            </h2>
            <p className="mb-4">
              Enguerrand OZANO est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable d&apos;Enguerrand OZANO.
              Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </section>

          {/* Section 4 : Responsabilité */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              <span className="text-primary">4.</span> Limitations de responsabilité
            </h2>
            <p className="mb-4">
              Enguerrand OZANO ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site <strong>hooklab.eu</strong>.
            </p>
            <p className="mb-4">
              Enguerrand OZANO décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur <strong>hooklab.eu</strong>.
            </p>
            <p>
              L&apos;éditeur s&apos;engage à sécuriser au mieux le site, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
            </p>
          </section>

          {/* Section 5 : Données Personnelles (CNIL) */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              <span className="text-primary">5.</span> CNIL et gestion des données personnelles
            </h2>
            <p className="mb-4">
              Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site <strong>hooklab.eu</strong> dispose d’un droit d’accès, de modification et de suppression des informations collectées.
            </p>
            <p>
              Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : <a href="mailto:contact@hooklab.eu" className="text-primary hover:underline">contact@hooklab.eu</a>.
            </p>
          </section>

          {/* Section 6 : Liens et Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              <span className="text-primary">6.</span> Liens hypertextes et cookies
            </h2>
            <p className="mb-4">
              Le site <strong>hooklab.eu</strong> contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers <strong>hooklab.eu</strong>.
            </p>
            <p>
              La navigation sur le site <strong>hooklab.eu</strong> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. 
              Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.
            </p>
          </section>

          {/* Section 7 : Droit Applicable */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              <span className="text-primary">7.</span> Droit applicable et attribution de juridiction
            </h2>
            <p>
              Tout litige en relation avec l’utilisation du site <strong>hooklab.eu</strong> est soumis au droit français. 
              En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de <strong>Douai</strong>.
            </p>
          </section>

          <p className="text-white/40 pt-8 border-t border-white/10 text-xs">
            Dernière mise à jour : Février 2026
          </p>
        </div>
      </div>
    </main>
  );
}
