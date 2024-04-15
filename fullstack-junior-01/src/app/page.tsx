import { Artwork } from "./components/Artwork";
import { Datails } from "./components/Datails";
import { TitleSection } from "./components/TitleSection";

export default function Home() {
  return (
    <main>
      <div className="flex w-full h-[100vh]">
        <div className="flex flex-col gap-[74px] justify-center w-[1076px]">
          <TitleSection />
          <Artwork />
        </div>
        <div className="w-[840px] bg-[#2E2F38]">
          <Datails />
        </div>
      </div>
    </main>
  );
}
