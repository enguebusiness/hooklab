import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales | HookLab",
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
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique (LCEN), 
            il est précisé aux utilisateurs du site <strong>hooklab.eu</strong> l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
          </p>

          {/* Section 1 : Édition */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-primary">1.</span> Édition du site
            </h2>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="mb-4">
                Le présent site, accessible à l&apos;URL <a href="https://hooklab.eu" className="text-primary hover:underline">https://hooklab.eu</a> (le « Site »), est édité par :
              </p>
              <p className="mb-4">
                <strong className="text-white">Enguerrand OZANO</strong><br />
                Exerçant sous l&apos;enseigne commerciale <strong className="text-white">HookLab</strong>.
              </p>
              <ul className="space-y-2">
                <li><strong className="text-white">Statut :</strong> Entrepreneur individuel (EI)</li>
                <li><strong className="text-white">SIREN :</strong> 994 538 932 (R.C.S. de Douai)</li>
                <li><strong className="text-white">Numéro de TVA Intracommunautaire :</strong> FR16994538932</li>
                <li><strong className="text-white">Siège social :</strong> 35 rue Moïse Lambert, 59148 Flines-lez-Raches, France</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="font-semibold text-white mb-2">Contact officiel :</p>
                <ul className="space-y-1">
                  <li><strong className="text-white">Téléphone :</strong> <a href="tel:+33604408157" className="hover:text-white transition-colors">06 04 40 81 57</a></li>
                  <li><strong className="text-white">Email :</strong> <a href="mailto:contact@hooklab.eu" className="hover:text-white transition-colors">contact@hooklab.eu</a></li>
                </ul>
              </div>
              <p className="mt-4">
                <strong className="text-white">Directeur de la publication :</strong> Enguerrand OZANO
              </p>
            </div>
          </section>

          {/* Section 2 : Hébergement */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-primary">2.</span> Hébergement
            </h2>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="mb-3">
                Le Site est hébergé par la société <strong className="text-white">Vercel Inc.</strong>, dont les serveurs assurent une disponibilité et une sécurité optimales.
              </p>
              <ul className="space-y-1">
                <li><strong className="text-white">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><strong className="text-white">Contact technique :</strong> <a href="mailto:privacy@vercel.com" className="hover:text-white transition-colors">privacy@vercel.com</a></li>
              </ul>
            </div>
          </section>

          {/* Section 3 : Propriété Intellectuelle */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              <span className="text-primary">3.</span> Propriété intellectuelle et Droits d&apos;auteur
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white mb-2">Contenu HookLab :</p>
                <p>
                  L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés. La structure générale, les textes, graphismes, logos (notamment le logo HookLab), 
                  et la mise en forme sont la propriété exclusive d&apos;Enguerrand OZANO.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">Contenu Tiers (Portfolio et Clients) :</p>
                <p>
                  Les marques, logos et visuels des sites clients présentés dans la section &quot;Réalisations&quot; ou &quot;Portfolio&quot; appartiennent à leurs propriétaires respectifs. 
                  Ils sont utilisés sur ce site à titre d&apos;illustration du savoir-faire de HookLab, avec l&apos;accord des clients concernés.
                </p>
              </div>

              <p className="pt-2">
                Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon 
                et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </div>
          </section>

          {/* Section 4 : Responsabilité */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              <span className="text-primary">4.</span> Responsabilité
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white mb-2">Contenu :</p>
                <p>
                  HookLab s&apos;efforce de fournir sur le site des informations aussi précises que possible. Toutefois, Enguerrand OZANO ne pourra être tenu responsable 
                  des oublis, des inexactitudes et des carences dans la mise à jour.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">Technique :</p>
                <p>
                  L&apos;éditeur ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site 
                  (bug, incompatibilité, virus), bien que le site soit sécurisé par un protocole HTTPS et hébergé sur une infrastructure moderne.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 : Données Personnelles et Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              <span className="text-primary">5.</span> Données personnelles et Cookies
            </h2>
            <p className="mb-4">
              Dans une optique de transparence et de respect du RGPD, HookLab a défini une politique claire concernant la collecte et le traitement de vos données.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Le site ne collecte que les données strictement nécessaires au traitement de votre demande (Audit, Contact).</li>
              <li>
                Pour en savoir plus sur la gestion de vos données, vos droits (accès, rectification) et l&apos;utilisation des cookies, 
                veuillez consulter notre <Link href="/confidentialite" className="text-primary hover:underline">Politique de Confidentialité</Link>.
              </li>
            </ul>
          </section>

          {/* Section 6 : Liens hypertextes */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              <span className="text-primary">6.</span> Liens hypertextes
            </h2>
            <p>
              Le site <strong>hooklab.eu</strong> peut contenir des liens hypertextes vers d&apos;autres sites (partenaires, outils, informations). 
              Cependant, Enguerrand OZANO n&apos;a pas la possibilité de vérifier le contenu des sites ainsi visités et décline donc toute responsabilité 
              quant aux risques éventuels de contenus illicites.
            </p>
          </section>

          {/* Section 7 : Droit Applicable */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              <span className="text-primary">7.</span> Droit applicable et Juridiction
            </h2>
            <p>
              Tout litige en relation avec l&apos;utilisation du site <strong>hooklab.eu</strong> est soumis au droit français. 
              En cas de litige entre professionnels (B2B), et à défaut d&apos;accord amiable, il est fait attribution exclusive de juridiction 
              aux tribunaux compétents de <strong>Douai</strong>.
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
