import Image from "next/image";
import "./techStackCard.css";

export default function TechStackCard() {
  const techStackLogos = [
    { label: "Docker", url: "/static/images/docker.svg" },
    { label: "Karma", url: "/static/images/karma.svg" },
    { label: "Jasmine", url: "/static/images/jasmine.svg" },
    { label: "Jest", url: "/static/images/jest.svg" },
    { label: "Java", url: "/static/images/java.svg" },
    { label: "Typescript", url: "/static/images/typescript.svg" },
    { label: "TailwindCSS", url: "/static/images/tailwindcss.svg" },
    { label: "React", url: "/static/images/react.svg" },
    { label: "NextJS", url: "/static/images/nextjs.svg" },
    { label: "Angular", url: "/static/images/angular.svg" },
  ];

  const slideshowBlock = () => (
    <div className="slideshow-block">
      {techStackLogos.map(logo => 
        <div className="flex items-center py-0 px-6 sm:px-10 bg-cardPrimary border-cardBorder border-[0.35px] rounded-lg">
          <div className="relative size-8 sm:size-12">
            <Image
              src={logo.url}
              alt={`${logo.label} logo`}
              fill
              style={{objectFit: "cover"}}
              title={logo.label}
            />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="h-full w-full flex flex-col justify-between gap-4 p-4 bg-cardBackground rounded-2xl border-cardBorder border-[0.35px] shadow-md">
      <div className="slideshow-container">
        <div className="slideshow-row">
          {slideshowBlock()}
          {slideshowBlock()}
        </div>

        <div className="slideshow-row slideshow--reversed">
          {slideshowBlock()}
          {slideshowBlock()}
        </div>
      </div>

      <div className="">
        <h3 className="text-lg font-medium">Tech stacks I'm familiar with</h3>
        <h3 className="text-sm font-normal text-gray-600">Mainly centered around the JavaScript environment, yet always keen to learn new technologies.</h3>
      </div>
    </div>
  );
}