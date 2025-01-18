import LightIndicator from "../components/lightIndicator";
import SocialLinks from "../components/socialLinks";

export default function HomeSection() {
  return (
    <section id="home" className="section">
      <div className="overflow-hidden w-full flex flex-col items-start justify-center gap-8 p-4 sm:p-16 sm:pt-16 bg-black shrink-animation">
        <div className="w-full flex flex-col fade-in-right">

          <div className="w-fit flex flex-row items-center gap-2 py-1 px-2 md:py-1 md:px-3 mb-10 rounded-full border border-gray-600">
            <LightIndicator />
            <span className="text-xs sm:text-sm leading-none mt-[2px]">
              Available to work in
              <span style={{fontFamily: "NotoColorEmoji"}}> 🇰🇷</span>
              Seoul
            </span>
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <div className="flex flex-col">
              <span className="text-xs sm:text-base font-bold">Hello, I'm</span>
              <h1 className="text-[29px] sm:text-5xl md:text-6xl lg:text-7xl leading-none font-bold text-start">
                Guillaume Vacelet
                {/* Hello,<br/>I'm Guillaume.<br/>
                A <strong>software engineer</strong> */}
              </h1>
            </div>
            <span className="text-sm sm:text-base font-medium text-slate-400">A software engineer building applications that matters.</span>
          </div>

          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
