import MobileFilter from "./mobileFilter";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "@/store/store";

export default function ProductSection() {
  const products = useSelector(
    (state: RootState) => state.productsData.filteredProducts
  );

  console.log(products);
  return (
    <>
      <div className="flex lg:px-20 w-full">
        <div className="w-full lg:hidden md:hidden flex">
          <MobileFilter />
        </div>
      </div>
    </>
  );
}
