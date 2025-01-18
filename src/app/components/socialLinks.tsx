import { Squircle } from "@squircle-js/react";
import Image from "next/image";

export default function SocialLinks() {
  const links = [
    { label: "linkedin", icon: "linkedin.svg", url: "https://www.linkedin.com/in/guillaume-vacelet/" },
    { label: "github", icon: "github.svg", url: "https://github.com/Guillaume-Vacelet" },
    { label: "email", icon: "envelope.fill.svg", url: "mailto:guillaume.vacelet@gmail.com" },
  ];

  return (
    <div className="flex flex-row gap-4">
      {links.map(link =>
        // <Squircle
        //   cornerRadius={10}
        //   cornerSmoothing={1}
        //   width={40}
        //   height={40}
        //   className="bg-gray-700 p-3 cursor-pointer">
        //   <a href={link.url} target="_blank" className="relative size-full flex">
          <a href={link.url} target="_blank" className="relative h-5 w-5 flex p-2" key={link.label}>
            <Image
              src={`/static/images/${link.icon}`}
              alt={`${link.label} icon`}
              fill
              style={{objectFit: "cover"}}
            />
          </a>
        // </Squircle>
      )}
    </div>
  );
}

