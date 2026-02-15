// Sanity schema: Site Settings (singleton)
// Créez ce schéma dans votre projet Sanity Studio
// Type: document (singleton)

const siteSettings = {
  name: "siteSettings",
  title: "Réglages du site",
  type: "document",
  fields: [
    {
      name: "ownerName",
      title: "Votre nom",
      type: "string",
      initialValue: "Enguerrand",
    },
    {
      name: "ownerBio",
      title: "Votre bio",
      type: "text",
      rows: 4,
      description: "Texte de présentation qui apparaît dans la section 'Qui suis-je'",
    },
    {
      name: "ownerPhoto",
      title: "Votre photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "address",
      title: "Adresse",
      type: "string",
      initialValue: "Flines-lez-Raches, Nord (59)",
    },
    {
      name: "phone",
      title: "Téléphone",
      type: "string",
    },
    {
      name: "email",
      title: "Email de contact",
      type: "string",
    },
    {
      name: "lat",
      title: "Latitude (carte)",
      type: "number",
      initialValue: 50.4267,
    },
    {
      name: "lng",
      title: "Longitude (carte)",
      type: "number",
      initialValue: 3.2372,
    },
  ],
};

export default siteSettings;
