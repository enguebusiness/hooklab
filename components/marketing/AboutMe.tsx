export default function AboutMe() {
  return (
    <section id="qui-suis-je" className="py-16 md:py-24 bg-bg" aria-label="Qui suis-je">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1.5 bg-navy/5 border border-navy/10 rounded-full text-navy text-xs font-semibold mb-4">
            Votre expert local
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-[-0.02em]">
            Pas une plateforme anonyme.{" "}
            <span className="text-orange">Un voisin.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-72 sm:w-72 sm:h-80 bg-bg-muted border-2 border-border rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-text-muted text-sm">Votre photo ici</p>
                  <p className="text-text-muted text-xs mt-1">(configurable via Sanity)</p>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                Bas&eacute; &agrave; Flines-lez-Raches
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <p className="text-text text-base sm:text-lg leading-relaxed mb-4">
              Je suis <strong className="text-navy">Enguerrand</strong>, sp&eacute;cialis&eacute; dans la
              visibilit&eacute; locale et la construction de{" "}
              <strong className="text-navy">syst&egrave;mes de confiance en ligne</strong>{" "}
              pour les TPE/PME du Nord.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-4">
              Je ne suis pas un call center parisien. Je connais la r&eacute;alit&eacute; de vos
              chantiers &agrave; Douai, Orchies ou Valenciennes. Je sais que vous n&rsquo;avez pas
              le temps de g&eacute;rer &ldquo;un truc internet&rdquo; et que vous voulez des r&eacute;sultats
              concrets : des appels de <strong>vrais</strong> clients.
            </p>
            <p className="text-text-light text-base leading-relaxed mb-6">
              Mon approche : je vous construis un <strong className="text-navy">dossier de confiance</strong>{" "}
              (Google + site + preuves) qui transforme votre bouche-&agrave;-oreille en syst&egrave;me
              permanent. Pas de jargon, pas de blabla &mdash; du concret.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-bg-white border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-navy">100%</p>
                <p className="text-text-muted text-xs mt-1">Local Nord</p>
              </div>
              <div className="bg-bg-white border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-navy">24h</p>
                <p className="text-text-muted text-xs mt-1">D&eacute;lai de r&eacute;ponse</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 bg-bg-white border border-border rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-border flex items-center gap-2">
            <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-navy font-semibold text-sm">Zone d&rsquo;intervention : Douai, Orchies, Arleux, Valenciennes et environs</span>
          </div>
          <div className="relative h-48 sm:h-64">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.8%2C50.25%2C3.7%2C50.55&amp;layer=mapnik&amp;marker=50.4267%2C3.2372"
              className="absolute inset-0 w-full h-full border-0"
              title="Carte de localisation - Flines-lez-Raches"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
