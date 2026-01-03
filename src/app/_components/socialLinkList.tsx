'use client'
import Image from "next/image";
import Link from "next/link";
import { socialLinkList } from "@/app/_data/socialLinks";

export default function SocialLinkList() {
  return (
    <div className="h-full w-fit flex flex-col justify-between z-50 pointer-events-auto">
      {[...socialLinkList].reverse().map(link =>
        <Link 
          className="group flex flex-row items-center gap-3 z-50 pointer-events-auto relative" key={link.label}
          href={link.url}
          target="_blank"
          onClick={(e) => e.stopPropagation()}>
          <div className="border bg-cardBorder group-hover:bg-accent p-2 rounded-md">
            <Image
              src={`/static/icons/${link.icon}`}
              alt={`${link.label} icon`}
              width={16}
              height={16}
              title={link.label}
            />
          </div>
          <span className="leading-none text-xs sm:text-sm font-medium group-hover:underline group-hover:text-accent">
            {link.shortUrl}
          </span>
        </Link>
      )}
    </div>
  );
}

