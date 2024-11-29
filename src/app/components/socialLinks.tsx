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
            <li key={socialLink.label} className="flex w-8 h-8 items-center rounded-full border border-white p-2 hover:bg-slate-900">
              <a className="relative w-full h-full"
                href={socialLink.url}
                target="_blank">
                <Image
                  src={`/static/images/${socialLink.icon}`}
                  // width={14}
                  // height={14}
                  fill
                  alt={`${socialLink.label} icon`}
                />
              </a>
            </li>
          )}
        </ul>
      </div>
  );
}

