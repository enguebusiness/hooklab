// Schema Sanity : Portfolio
// À copier dans votre projet Sanity Studio (sanity.config.ts > schema.types)
//
// Si vous utilisez le CLI Sanity :
//   npx sanity@latest init --create-project "HookLab" --dataset production
//   Puis copiez ce fichier dans schemas/portfolio.ts de votre projet Studio

export const portfolioSchema = {
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
  preview: {
    select: { title: "title", subtitle: "result", media: "image" },
  },
};

export default portfolioSchema;
