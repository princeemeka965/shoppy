import MobileFilter from "./mobileFilter";

export default function ProductSection() {
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
