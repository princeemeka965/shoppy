"use client";

import Image from "next/image";

interface Region {
  name: string;
  flag: string;
  link: string;
}

export default function SuppliersRegion() {
  const regionLists: Region[] = [
    {
      name: "Arabic Emirates",
      flag: "uae.png",
      link: "shoppy.ae",
    },
    {
      name: "Australia",
      flag: "australia.png",
      link: "shoppy.ae",
    },
    {
      name: "United States",
      flag: "usa.png",
      link: "shoppy.us",
    },
    {
      name: "Russia",
      flag: "russia.png",
      link: "shoppy.ru",
    },
    {
      name: "Italy",
      flag: "italy.png",
      link: "shoppy.it",
    },
    {
      name: "Denmark",
      flag: "denmark.png",
      link: "shoppy.dk",
    },
    {
      name: "France",
      flag: "france.png",
      link: "shoppy.fr",
    },
    {
      name: "China",
      flag: "china.png",
      link: "shoppy.us",
    },
    {
      name: "Great Britain",
      flag: "britain.png",
      link: "shoppy.co.uk",
    },
  ];
  return (
    <>
      <div className="lg:flex md:flex hidden flex-col lg:px-20 w-full px-3 lg:py-3 my-2">
        <p className="text-base w-full font-semibold my-3 px-1 lg:px-0 md:px-0">
          Suppliers by region
        </p>
        <div className="w-full flex flex-wrap gap-y-5 my-2">
          {regionLists.map((region, index) => (
            <div className="w-1/5 flex gap-3" key={index}>
              <div className="flex">
                <Image
                  src={`/${region.flag}`}
                  width={28}
                  height={28}
                  style={{
                    height: `28px`,
                    objectFit: "contain",
                  }}
                  alt="_watch"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-base">{region.name}</p>
                <p className="text-xs text-gray-500">{region.link}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
