import Image from "next/image";
import LinkIcon from "@/_components/linkIcon";

export interface SchoolCard {
  image: string;
  imgW: string;
  imgH: string;
  url: string;
  title: string;
  desc: string;
}

export default function SchoolLinkCard({schoolCard} : {schoolCard: SchoolCard}) {
  return (
    <div className="w-full flex flex-col p-[2px] bg-cardBackground rounded-2xl border-cardBorder border-[0.35px] shadow-md">
      <a href={schoolCard.url} target="_blank" className="flex flex-col bg-white p-1 rounded-[14px] border-cardBorder border-[0.35px]">
        <div className="p-[14px] rounded-[10px] hover:bg-cardHover">
          <div className="flex flex-row justify-end">
            <LinkIcon />
          </div>
          <div className="flex flex-col items-center justify-center pb-5 h-28">
            <div className={`relative ${schoolCard.imgW} ${schoolCard.imgH}`}>
              <Image
                src={schoolCard.image}
                alt="school logo"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </div>
        </div>
      </a>

      <div className="p-4">
        <h3 className="text-lg font-medium">{schoolCard.title}</h3>
        <h3 className="text-sm font-normal text-gray-600">{schoolCard.desc}</h3>
      </div>
    </div>
  )
}