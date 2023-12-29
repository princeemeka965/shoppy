import { ReactNode } from "react";

export const CategoriesBlock = (): ReactNode => {
  const categoriesArray: String[] = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
  ];
  return (
    <>
      <div className="flex flex-col gap-3 p-2">
        {categoriesArray.map((category, index) => (
          <span
            className="p-2 flex hover:bg-[#E5F1FF] hover:font-semibold cursor-pointer"
            key={index}
          >
            <p className="text-base">{category}</p>
          </span>
        ))}
      </div>
    </>
  );
};
