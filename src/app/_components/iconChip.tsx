import Image from "next/image";

export default function IconChip({ icon, label } : { icon: string, label: string }) {
  return (
    <div className="flex flex-row items-center justify-center gap-2 px-3 py-[6px] rounded-lg border-zinc-800 border-[1px] icon-chip-gradient">
      {/* <div className="relative size-5 svg-to-gray">
        <Image
          src={icon}
          alt="icon"
          fill
          style={{objectFit: "cover"}}
        />
      </div> */}
      <span className="text-xs sm:text-sm font-normal leading-none text-zinc-400">
        {String(label).charAt(0).toUpperCase() + String(label).slice(1)}
      </span>
    </div>
  )
}