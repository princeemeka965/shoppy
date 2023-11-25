import { CategoriesList } from "@/app/helpers";
import { FilterIcon } from "@/icons";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect, ReactNode } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux";
import { SET_FILTERED_PRODUCTS } from "@/reducers/productsDataSlice";
import { RootState } from "@/store/store";
import {
  GetSelectedBrands,
  GetSelectedTypes,
  FilterProducts,
} from "@/app/helpers/filterList";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface CategoriesList {
  _id: string;
  _name: string;
  _slug: string;
}

interface FilterPayload {
  category: string;
  categoryTypes: string[];
  categoryBrands: string[];
}

interface FilterLayoutProps {
  productItems: any; // Replace 'any' with the actual type of productItems
  children: ReactNode;
}

export default function FilterLayout({
  productItems,
  children,
}: FilterLayoutProps) {
  const dispatch = useDispatch();

  const products = useSelector(
    (state: RootState) => state.productsData.products
  );

  const categoriesList: CategoriesList[] = CategoriesList();

  const [filteringPayload, setFilteringData] = useState<FilterPayload>({
    category: "",
    categoryTypes: [],
    categoryBrands: [],
  });

  const [filteredCategory, setFilteredCategory] =
    useState<string>("All Categories");
  const [categoryTypes, setType] = useState<CategoriesList[]>([]);
  const [categoryBrands, setBrand] = useState<CategoriesList[]>([]);

  const [arraySelectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [arraySelectedBrands, setSelectedBrands] = useState<string[]>([]);

  const selectedCategory = (data: string): any => {
    setFilteredCategory(data);

    // get sub categories of selected category to display in a dropdown
    const categoryTypes = GetSelectedTypes(data);
    setType(categoryTypes);

    // get brand of selected category to display in a dropdown
    const categoryBrands = GetSelectedBrands(data);
    setBrand(categoryBrands);

    // set filtering Payload
    setFilteringData({ category: data, categoryTypes: [], categoryBrands: [] });
  };

  const selectedCategoryTypes = (data: string): void => {
    if (arraySelectedTypes.includes(data)) {
      // If data is already in the array, remove it
      const newArray = arraySelectedTypes.filter((item) => item !== data);
      setSelectedTypes(newArray);

      // set filtering Payload
      setFilteringData({
        category: filteredCategory,
        categoryTypes: newArray,
        categoryBrands: arraySelectedBrands,
      });
    } else {
      // If data is not in the array, push it
      setSelectedTypes((oldArray) => [data, ...oldArray]);

      // set filtering Payload
      setFilteringData({
        category: filteredCategory,
        categoryTypes: [data, ...arraySelectedTypes],
        categoryBrands: arraySelectedBrands,
      });
    }
  };

  const selectedCategoryBrands = (data: string): void => {
    if (arraySelectedBrands.includes(data)) {
      // If data is already in the array, remove it
      const newArray = arraySelectedBrands.filter((item) => item !== data);
      setSelectedBrands(newArray);

      // set filtering Payload
      setFilteringData({
        category: filteredCategory,
        categoryTypes: arraySelectedTypes,
        categoryBrands: newArray,
      });
    } else {
      // If data is not in the array, push it
      setSelectedBrands((oldArray) => [data, ...oldArray]);

      // set filtering Payload
      setFilteringData({
        category: filteredCategory,
        categoryTypes: arraySelectedTypes,
        categoryBrands: [data, ...arraySelectedBrands],
      });
    }
  };

  // filter out products based on selected criteria stored in filteringPayload State
  useEffect(() => {
    const productsFiltered = FilterProducts(filteringPayload, products);
    dispatch(SET_FILTERED_PRODUCTS(productsFiltered));
  }, [filteringPayload]);

  return (
    <>
      <div className="w-full flex gap-3">
        {/** DESKTOP VIEW OF FILTERS SELECTION BLOCK */}
        <Card
          className="w-1/4 lg:flex md:flex hidden flex-col p-3 gap-3"
          style={{ borderRadius: "0px" }}
        >
          <div className="border w-full" />
          <p className="text-base font-semibold px-5">Category</p>
          <div className="flex flex-col">
            {categoriesList.map((categories) => (
              <List
                key={categories._id}
                onClick={() => selectedCategory(categories._slug)}
              >
                <ListItem className="p-0">
                  <label
                    htmlFor="vertical-list-react"
                    className="flex w-full cursor-pointer items-center"
                  >
                    <ListItemPrefix className="mr-1">
                      <Checkbox
                        color="blue"
                        className="text-black"
                        crossOrigin="true"
                        checked={filteredCategory === categories._slug}
                        onChange={() => selectedCategory(categories._slug)}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      {categories._name}
                    </Typography>
                  </label>
                </ListItem>
              </List>
            ))}
          </div>

          <div className="border w-full" />
          <p className="text-base font-semibold px-5">Category Type</p>
          <div className="flex flex-col">
            {categoryTypes.map((categories) => (
              <List
                key={categories._id}
                onClick={() => selectedCategoryTypes(categories._slug)}
              >
                <ListItem className="p-0">
                  <label
                    htmlFor="vertical-list-react"
                    className="flex w-full cursor-pointer items-center"
                  >
                    <ListItemPrefix className="mr-1">
                      <Checkbox
                        color="blue"
                        className="text-black"
                        crossOrigin="true"
                        checked={arraySelectedTypes.includes(categories._slug)}
                        onChange={() => selectedCategoryTypes(categories._slug)}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      {categories._name}
                    </Typography>
                  </label>
                </ListItem>
              </List>
            ))}
          </div>

          <div className="border w-full" />
          <p className="text-base font-semibold px-5">Category Brands</p>
          <div className="flex flex-col">
            {categoryBrands.map((categories) => (
              <List
                key={categories._id}
                onClick={() => selectedCategoryBrands(categories._name)}
              >
                <ListItem className="p-0">
                  <label
                    htmlFor="vertical-list-react"
                    className="flex w-full cursor-pointer items-center"
                  >
                    <ListItemPrefix className="mr-1">
                      <Checkbox
                        color="blue"
                        className="text-black"
                        crossOrigin="true"
                        checked={arraySelectedBrands.includes(categories._name)}
                        onChange={() =>
                          selectedCategoryBrands(categories._name)
                        }
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      {categories._name}
                    </Typography>
                  </label>
                </ListItem>
              </List>
            ))}
          </div>
        </Card>
        {/** END OF DESKTOP VIEW FOR FILTERS SELECTION BLOCK */}

        <div className="lg:w-3/4 md:w-3/4 w-full flex flex-col gap-2">
          <Card
            className="p-2 flex w-full flex-col overflow-x-auto gap-2"
            style={{ borderRadius: "0px" }}
          >
            {/** MOBILE VIEW FOR FILTERS SELECTION BLOCK */}
            <div className="flex flex-row lg:hidden md:hidden gap-2">
              <Menu>
                <MenuHandler>
                  <Button
                    className="bg-white text-black w-full flex justify-center gap-1"
                    style={{ flex: "0 0 40%", height: "fit-content" }}
                  >
                    <span className="flex text-xs font-medium capitalize">
                      {filteredCategory}
                    </span>
                    <span className="flex">
                      <FilterIcon />
                    </span>
                  </Button>
                </MenuHandler>
                <MenuList>
                  {categoriesList?.map((category: CategoriesList) => (
                    <MenuItem
                      onClick={() => selectedCategory(category._slug)}
                      key={category._id}
                      className="text-black"
                    >
                      {category._name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Menu>
                <MenuHandler>
                  <Button
                    className="bg-white text-black w-full flex justify-center gap-8"
                    style={{ flex: "0 0 40%", height: "fit-content" }}
                  >
                    <span className="flex text-xs font-medium capitalize">
                      Type({arraySelectedTypes.length})
                    </span>
                    <span className="flex">
                      <FilterIcon />
                    </span>
                  </Button>
                </MenuHandler>
                <MenuList>
                  {categoryTypes?.map((categoryType) => (
                    <MenuItem
                      key={categoryType._id}
                      className="text-black flex"
                    >
                      <Checkbox
                        color="blue"
                        crossOrigin="true"
                        checked={arraySelectedTypes.includes(
                          categoryType._slug
                        )}
                        label={categoryType._name}
                        onChange={() =>
                          selectedCategoryTypes(categoryType._slug)
                        }
                      />
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Menu>
                <MenuHandler>
                  <Button
                    className="bg-white text-black w-full flex justify-center gap-8"
                    style={{ flex: "0 0 40%", height: "fit-content" }}
                  >
                    <span className="flex text-xs font-medium capitalize">
                      Brand({arraySelectedBrands.length})
                    </span>
                    <span className="flex">
                      <FilterIcon />
                    </span>
                  </Button>
                </MenuHandler>
                <MenuList>
                  {categoryBrands?.map((categoryBrand) => (
                    <MenuItem
                      key={categoryBrand._id}
                      className="text-black flex"
                    >
                      <Checkbox
                        color="blue"
                        crossOrigin="true"
                        checked={arraySelectedBrands.includes(
                          categoryBrand._name
                        )}
                        label={categoryBrand._name}
                        onChange={() =>
                          selectedCategoryBrands(categoryBrand._name)
                        }
                      />
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </div>
            {/******* END OF MOBILE FILTERS SELECTION BLOCK *****/}

            <div className="lg:flex md:flex hidden p-2">
              <p className="text-base text-black capitalize">
                {productItems?.length} items in <b>{filteredCategory}</b>
              </p>
            </div>

            <div className="flex flex-row px-1 gap-5">
              {filteringPayload.category !== "" && (
                <Badge
                  content={
                    <XMarkIcon
                      className="h-3 w-3 text-white"
                      strokeWidth={2.5}
                    />
                  }
                  className="bg-black border-2 p-0 min-h-[20px] min-w-[20px] border-white shadow-lg shadow-black/20"
                >
                  <span className="text-xs bg-shoppyBlue font-semibold text-white p-2 border shadow-lg rounded-md capitalize">
                    {filteringPayload.category}
                  </span>
                </Badge>
              )}

              {filteringPayload.categoryTypes.length > 0 && (
                <Badge
                  content={
                    <XMarkIcon
                      className="h-3 w-3 text-white"
                      strokeWidth={2.5}
                    />
                  }
                  className="bg-black border-2 p-0 min-h-[20px] min-w-[20px] gap-2 border-white shadow-lg shadow-black/20"
                >
                  <div className="text-xs bg-shoppyBlue text-white p-2 border shadow-lg rounded-md flex gap-2 capitalize">
                    <span className="font-semibold">
                      {filteringPayload.categoryTypes[0]}
                    </span>
                    {filteringPayload.categoryTypes.length > 1 && (
                      <span className="bg-white shadow-lg px-1 font-semibold rounded-full text-black">
                        +{filteringPayload.categoryTypes.length - 1}
                      </span>
                    )}
                  </div>
                </Badge>
              )}

              {filteringPayload.categoryBrands.length > 0 && (
                <Badge
                  content={
                    <XMarkIcon
                      className="h-3 w-3 text-white"
                      strokeWidth={2.5}
                    />
                  }
                  className="bg-black border-2 p-0 min-h-[20px] min-w-[20px] gap-2 border-white shadow-lg shadow-black/20"
                >
                  <div className="text-xs bg-shoppyBlue px-3 text-white p-2 border shadow-lg rounded-md flex gap-2 capitalize">
                    <span className="font-semibold">
                      {filteringPayload.categoryBrands[0]}
                    </span>
                    {filteringPayload.categoryBrands.length > 1 && (
                      <span className="bg-white shadow-lg px-1 font-semibold rounded-full text-black">
                        +{filteringPayload.categoryBrands.length - 1}
                      </span>
                    )}
                  </div>
                </Badge>
              )}
            </div>
          </Card>
          <div className="flex gap-x-16 gap-y-4 lg:px-0 md:px-0 px-3 flex-wrap">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
