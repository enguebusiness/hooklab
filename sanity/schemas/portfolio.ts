// Sanity schema: Portfolio
// Créez ce schéma dans votre projet Sanity Studio
// Type: document

const portfolio = {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre du projet",
      type: "string",
      description: 'Ex: "Couvreur à Arleux"',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "image",
      title: "Image du site (mockup)",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "result",
      title: "Résultat chiffré",
      type: "string",
      description: 'Ex: "+30% de devis en 3 mois"',
    },
    {
      name: "orderRank",
      title: "Ordre d'affichage",
      type: "number",
    },
  ],
};

export default portfolio;
