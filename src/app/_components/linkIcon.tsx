import Image from "next/image";

export default function LinkIcon() {
  return (
    <div className="size-fit p-2 bg-cardBackground rounded-full">
      <div className="relative size-[6px]">
        <Image
          src={'/static/images/arrow.up.right.svg'}
          alt="Up right arrow icon"
          fill
          style={{objectFit: "cover"}}
        />
      </div>
    </div>
  )
}