'use client'
import Image from "next/image";
import Link from "next/link";

export default function HoverableButtonLink({ label, url, primary=false, onclick } : { label: string, url: string, primary?: boolean, onclick?: (event: React.MouseEvent, sectionId: string) => void }) {
  function handleOnClick(event: React.MouseEvent, sectionId: string) {
    if (onclick) {
      return onclick(event, sectionId);
    }
  }

  return (
    <Link className={`w-full px-3 py-2 rounded-md border ${primary ? 'bg-accent border-accent' : 'bg-white border-cardBorder'} whitespace-nowra`}
      href={url}
      onClick={(e) => handleOnClick(e, url)}
      target="_blank"
      rel="noreferrer noopener">
      <span className="w-full text-xs sm:text-sm font-medium text-black flex flex-row items-center justify-center gap-2">
        {label}
        <div className="relative size-2">
          <Image
            src={`/static/icons/arrow.up.right.svg`}
            alt="Up right arrow icon"
            fill
            style={{objectFit: "cover"}}
          />
        </div>
      </span>
    </Link>
  );
}