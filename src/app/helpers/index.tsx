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
          _slug: "desktop",
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
  ];
};
