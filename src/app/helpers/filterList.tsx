"use client";

import { CategoriesList } from ".";

interface FilterPayload {
  category: string;
  categoryTypes: string[];
  categoryBrands: string[];
}

/**
 * This filters through all categories,
 * displaying list of sub categories of a selected category
 */

export const GetSelectedTypes = (data: string): any => {
  const categoriesList: any = CategoriesList();
  const filteredCategory = categoriesList.filter(
    (list: any) => list._slug === data
  );
  const subCategories = filteredCategory.map(
    (category: any) => category._subCategories
  );
  return subCategories.flat();
};

/**
 * This filters through all categories,
 * displaying list of brands of selected category
 */

export const GetSelectedBrands = (data: string): any => {
  const categoriesList: any = CategoriesList();
  const filteredCategory = categoriesList.filter(
    (list: any) => list._slug === data
  );
  const brands = filteredCategory.map((category: any) => category._brands);
  return brands.flat();
};

/**
 * This filters through the products,
 * displaying products based on selected category, types and brands
 */

export const FilterProducts = (payload: FilterPayload, products: any): any => {
  var filteredProducts: [] = [];

  const getSubCategories = GetSelectedTypes(payload.category).map(
    (category: any) => category._slug
  );
  const getBrands = GetSelectedBrands(payload.category).map(
    (category: any) => category._name
  );

  // Filter products based on the category selected
  if (payload.category !== "") {
    filteredProducts = products.filter(
      (product: any) =>
        getSubCategories.includes(product.category) &&
        getBrands.includes(product.brand)
    );
  }

  // Filter products based on the types of category selected
  if (payload.categoryTypes.length > 0) {
    filteredProducts = products.filter(
      (product: any) =>
        payload.categoryTypes.includes(product.category) &&
        getSubCategories.includes(product.category) &&
        getBrands.includes(product.brand)
    );
  }

  // Filter products based on the brands of category selected
  if (payload.categoryBrands.length > 0) {
    filteredProducts = products.filter((product: any) =>
      payload.categoryBrands.includes(product.brand)
    );
  }
  return filteredProducts;
};
