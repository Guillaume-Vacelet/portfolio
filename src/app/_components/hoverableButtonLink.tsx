'use client'
import Image from "next/image";
import Link from "next/link";

export default function HoverableButtonLink({ label, url, primary=false } : { label: string, url: string, primary?: boolean }) {
  function handleOnClick(event: React.MouseEvent, sectionId: string) {
    if (primary) {
      return;
    }
    const element = document.getElementById(sectionId);

    event.preventDefault();
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <Link className={`group w-full box-border group self-start flex flex-col items-center gap-1 sm:gap-2 px-3 py-2 rounded-md overflow-hidden ${primary ? 'bg-accent' : 'bg-none border-white border-[1px]'} hover:bg-white`}
      href={url}
      onClick={(e) => handleOnClick(e, url)}>
      <span className={`h-full relative text-xs sm:text-sm font-medium ${primary ? 'text-black' : 'text-white'}`}>
        <span className="duration-500 w-full flex flex-row items-center gap-2 group-hover:-translate-y-full group-hover:opacity-0">
          {label}
          <div className={`relative ${primary ? 'size-2' : 'size-[10px] svg-to-white'}`}>
            <Image
              src={`/static/images/${primary ? 'arrow.up.right.svg' : 'arrow.right.svg'}`}
              alt="Up right arrow icon"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </span>

        <span className={`duration-500 absolute w-full flex flex-row items-center gap-2 opacity-0 translate-y-0 group-hover:-translate-y-full group-hover:opacity-100 text-black font-medium`}>
          {label}
          <div className={`relative ${primary ? 'size-2' : 'size-[10px]'}`}>
            <Image
              src={`/static/images/${primary ? 'arrow.up.right.svg' : 'arrow.right.svg'}`}
              alt="Up right arrow icon"
              fill
              className={primary ? "" : "group-hover:rotate-90"}
              style={{objectFit: "cover"}}
            />
          </div>
        </span>
      </span>
    </Link>
  );
}