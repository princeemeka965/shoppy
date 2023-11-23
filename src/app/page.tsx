import AdvertSection from "./modules/advertSection";
import Header from "./modules/Header";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-1">
        <Header />
        <AdvertSection />
      </div>
    </>
  );
}
