import { useSelector } from "react-redux/es/exports";
import { RootState } from "@/store/store";
import FilterLayout from "./filterLayout";

export default function ProductSection() {
  const products = useSelector(
    (state: RootState) => state.productsData.filteredProducts
  );
  return (
    <>
      <div className="flex lg:px-20 w-full py-5">
        <FilterLayout productItems={products}></FilterLayout>
      </div>
    </>
  );
}
