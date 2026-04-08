import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2 mb-10 text-white/40 hover:text-white text-sm transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">Mentions légales</h1>

        <div className="space-y-8 text-white/70 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Éditeur du site</h2>
            <p>
              Le site <strong className="text-white">hooklab.fr</strong> est édité par :
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-white">Nom :</strong> Enguerrand Ozano</li>
              <li><strong className="text-white">Statut :</strong> Entrepreneur individuel</li>
              <li><strong className="text-white">SIREN :</strong> 994 538 932</li>
              <li><strong className="text-white">Numéro de TVA :</strong> FR16994538932</li>
              <li><strong className="text-white">Adresse :</strong> 35 rue Moïse Lambert, 59148 Flines-lez-Raches, France</li>
              <li><strong className="text-white">Email :</strong> contact@hooklab.fr</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-white">Vercel Inc.</strong></li>
              <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li>Site web : vercel.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur le site hooklab.fr (textes, images, vidéos, logos, éléments graphiques)
              sont protégés par le droit d&apos;auteur et le droit de la propriété intellectuelle. Toute reproduction,
              représentation, modification ou exploitation non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Responsabilité</h2>
            <p>
              L&apos;éditeur s&apos;efforce de fournir des informations aussi précises que possible. Toutefois, il ne
              pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour.
              Les résultats présentés dans les témoignages sont des exemples individuels et ne constituent pas une
              garantie de résultats similaires.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers d&apos;autres sites. L&apos;éditeur ne dispose d&apos;aucun moyen
              de contrôle du contenu de ces sites tiers et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux
              français seront seuls compétents.
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
