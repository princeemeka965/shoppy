import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface BreadcrumbsProps {
  crumbs: string[];
}

const BreadCrumb: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <>
      <div className="w-full lg:flex md:flex hidden gap-3">
        <div className="w-max gap-2 flex">
          <span className="text-base text-gray-500">Home</span>
          <span className="text-gray-500 w-5 flex justify-center flex-col">
            <ChevronRightIcon />
          </span>
        </div>
        {crumbs.map((crumb: string, index: number) => (
          <div className="w-max gap-2 flex" key={index}>
            <span className="text-base text-gray-500 capitalize">
              {crumb.replaceAll("-", " ")}
            </span>
            {index < crumbs.length - 1 ? (
              <span className="text-gray-500 w-5 flex justify-center flex-col">
                <ChevronRightIcon />
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default BreadCrumb;
