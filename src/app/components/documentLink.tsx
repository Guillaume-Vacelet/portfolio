// import Image from "next/image";

export interface Document {
  label: string;
  url: string;
}

export default function DocumentLink({document} : { document: Document }) {
  return (
    <div className="w-fit flex items-center px-3 py-1 rounded-lg bg-slate-800">
      <a
        href={document.url}
        target="_blank"
        className="w-full flex flex-row items-center gap-2 text-sm group hover:text-accent">
        { document.label }
        <svg width="12.7852" height="12.4434" viewBox="0 0 15 15">
          <path className="group-hover:fill-accent" d="M14.4238 10.8008L14.4141 0.976562C14.4141 0.419922 14.0527 0.0292969 13.4668 0.0292969L3.64258 0.0292969C3.0957 0.0292969 2.72461 0.449219 2.72461 0.917969C2.72461 1.38672 3.14453 1.78711 3.60352 1.78711L7.00195 1.78711L11.7676 1.63086L9.95117 3.22266L0.273438 12.9199C0.0976562 13.0957 0 13.3203 0 13.5352C0 14.0039 0.419922 14.4434 0.908203 14.4434C1.13281 14.4434 1.34766 14.3652 1.52344 14.1797L11.2207 4.49219L12.832 2.66602L12.6562 7.22656L12.6562 10.8398C12.6562 11.2988 13.0566 11.7285 13.5352 11.7285C14.0039 11.7285 14.4238 11.3281 14.4238 10.8008Z" fill="#ffffff" fillOpacity="0.85"/>
        </svg>

        {/* <Image
          src="/static/images/arrow.up.right.svg"
          width={4}
          height={4}
          alt="arrow icon"
          className="w-auto h-auto"
        /> */}
      </a>
    </div>
  )
}