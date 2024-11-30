import Navbar from "@/app/component/navbar"
import HeroSection from "./component/hero";
export default function Home() {
  return (
    <div className="w-[1440px] h-[1132px] px-[59px] bg-[#252B42] font-[Montserrat]">
      <Navbar />
      <HeroSection />
    </div>
  );
}
