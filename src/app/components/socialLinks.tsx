import Image from "next/image";

export interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

export default function SocialLinks({socialLinks} : { socialLinks: SocialLink[] }) {
  return (
    <div className="flex flex-col w-fit">
        <ul className="flex flex-col gap-2">
          {socialLinks.map(socialLink =>
            <li key={socialLink.label}>
              <a href={socialLink.url}>
                <Image
                  src={`/static/images/${socialLink.icon}`}
                  width={24}
                  height={24}
                  alt={`${socialLink.label} icon`}
                />
              </a>
            </li>
          )}
        </ul>
      </div>
  );
}

