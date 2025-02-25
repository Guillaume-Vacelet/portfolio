import Link from "next/link";
import Image from "next/image";

export default function CallToActionCard() {
  return (
    <Link href="#" className="h-full w-full relative overflow-hidden flex flex-row items-center justify-between p-4 bg-black border-cardBorder border-[0.35px] rounded-2xl shadow-md card-hover-style hover:shadow-md">
      <div className="w-full flex flex-col justify-center gap-4">
        <span className="text-[32px] text-white font-medium">Let's get in touch.</span>
        <div className="w-fit flex items-center gap-2 rounded-md py-2 px-3 bg-accent text-sm sm:text-base text-black">
          Contact me on Malt
          <div className="relative size-2">
            <Image
              src={'/static/images/arrow.up.right.svg'}
              alt="Up right arrow icon"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </div>
      </div>

      {/* <div className="absolute -right-16">
        <div className="relative size-32">
          <Image
            src={'/static/images/waves.svg'}
            alt="Up right arrow icon"
            fill
            style={{objectFit: "cover"}}
          />
        </div>
      </div> */}
    </Link>
  )
}