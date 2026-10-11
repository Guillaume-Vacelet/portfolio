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
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}>
          <div className="border bg-cardBorder group-hover:bg-accent p-2 rounded-md transition-colors">
            <Image
              src={`/static/icons/${link.icon}`}
              alt=""
              width={16}
              height={16}
              title={link.name}
            />
          </div>
          <span className="leading-none text-xs sm:text-sm font-medium group-hover:underline group-hover:text-accent transition-colors">
            {link.shortUrl}
          </span>
        </Link>
      )}
    </div>
  );
}

