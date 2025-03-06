import Image from "next/image";
import socialLinks from "@/app/_data/socialLinks";

export default function SocialLinkList() {
  return (
    <div className="w-fit flex flex-row justify-start gap-5 sm:gap-6">
      {socialLinks.map(link =>
        <a href={link.url} target="_blank" className="relative size-5 sm:size-6 flex p-2" key={link.label}>
          <Image
            src={`/static/images/${link.icon}`}
            alt={`${link.label} icon`}
            fill
            style={{objectFit: "cover"}}
            title={link.label}
          />
        </a>
      )}
    </div>
  );
}

