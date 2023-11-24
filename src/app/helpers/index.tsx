/**
 * Helper function that returns array of objects containing
 * Categories and sub categories
 */

export const CategoriesList = (): any => {
  return [
    {
      _id: 1,
      _name: "Computing",
      _slug: "computing",
      _subCategories: [
        {
          _id: 456,
          _name: "Desktop",
          _slug: "desktops",
        },
        {
          _id: 457,
          _name: "Laptops",
          _slug: "laptops",
        },
      ],
      _brands: [
        {
          _id: 4561,
          _name: "HP Pavilion",
        },
        {
          _id: 4562,
          _name: "Infinix",
        },
        {
          _id: 4563,
          _name: "Microsoft Surface",
        },
        {
          _id: 4564,
          _name: "Apple",
        },
      ],
    },
    {
      _id: 2,
      _name: "Health & Beauty",
      _slug: "Health & Beauty",
      _subCategories: [
        {
          _id: 256,
          _name: "Make Up",
          _slug: "makeup",
        },
        {
          _id: 257,
          _name: "Fragrances",
          _slug: "fragrances",
        },
        {
          _id: 258,
          _name: "Skin Care",
          _slug: "skincare",
        },
      ],
      _brands: [
        {
          _id: 2561,
          _name: "Impression of Acqua Di Gio",
        },
        {
          _id: 2562,
          _name: "Royal_Mirage",
        },
        {
          _id: 2563,
          _name: "Fog Scent Xpressio",
        },
        {
          _id: 2564,
          _name: "Al Munakh",
        },
        {
          _id: 2565,
          _name: "Lord - Al-Rehab",
        },
        {
          _id: 2566,
          _name: "Hemani Tea",
        },
        {
          _id: 2567,
          _name: "Dermive",
        },
        {
          _id: 2568,
          _name: "ROREC White Rice",
        },
      ],
    },
    {
      _id: 3,
      _name: "Home & Office",
      _slug: "Home & Office",
      _subCategories: [
        {
          _id: 356,
          _name: "Home Decoration",
          _slug: "home-decoration",
        },
      ],
      _brands: [
        {
          _id: 3561,
          _name: "Boho Decor",
        },
        {
          _id: 3562,
          _name: "Flying Wooden",
        },
        {
          _id: 3563,
          _name: "LED Lights",
        },
        {
          _id: 3564,
          _name: "luxury palace",
        },
        {
          _id: 3565,
          _name: "Golden",
        },
      ],
    },
  ];
};
