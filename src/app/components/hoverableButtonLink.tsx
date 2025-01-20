import Image from "next/image";

export default function HoverableButtonLink({
  url, label, bgColor='black', hoverBgColor='white', textColor='white', hoverTextColor='black' 
} : { url: string, label: string, bgColor?: string, hoverBgColor?: string, textColor?: string, hoverTextColor?: string}) {
  return (
    <a className="group flex flex-col items-center gap-2 px-3 py-2 rounded-md overflow-hidden bg-[var(--bg-color)] hover:bg-[var(--hover-bg-color)]"
      style={{
        '--bg-color': bgColor,
        '--hover-bg-color': hoverBgColor,
      }}
      href={url}
      target="_blank">
      <span className="h-full relative text-sm text-[var(--text-color)]" style={{'--text-color': textColor}}>
        <span className="w-full flex flex-row items-center gap-2 group-hover:-translate-y-full group-hover:opacity-0">
          {label}
          <div className="relative size-2">
            <Image
              src={'/static/images/arrow.up.right.svg'}
              alt="Up right arrow icon"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </span>

        <span
          className="absolute w-full flex flex-row items-center gap-2 opacity-0 translate-y-0 group-hover:-translate-y-full group-hover:opacity-100 text-[var(--hover-text-color)]"
          style={{'--hover-text-color': hoverTextColor}}>
            
          {label}

          <div className="relative size-2">
            <Image
              src={'/static/images/arrow.up.right.svg'}
              alt="Up right arrow icon"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </span>
      </span>
    </a>
  );
}