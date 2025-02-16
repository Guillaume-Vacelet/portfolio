import Image from "next/image";

export default function SocialLinks() {
  const links = [
    { label: "linkedin", icon: "linkedin.svg", url: "https://www.linkedin.com/in/guillaume-vacelet/" },
    { label: "github", icon: "github.svg", url: "https://github.com/Guillaume-Vacelet" },
    { label: "email", icon: "envelope.fill.svg", url: "mailto:guillaume.vacelet@gmail.com" },
  ];

  return (
    <div className="w-fit flex flex-row justify-start gap-5 sm:gap-6">
      {links.map(link =>
        <a href={link.url} target="_blank" className="relative size-5 sm:size-6 flex p-2" key={link.label}>
          <Image
            src={`/static/images/${link.icon}`}
            alt={`${link.label} icon`}
            fill
            style={{objectFit: "cover"}}
          />
        </a>
      )}
    </div>
  );
}

