import Image from "next/image";
import { Squircle } from "@squircle-js/react";

export default function ContactSection() {
  const contacts = [
    { label: "email", icon: "envelope.fill.svg", url: "mailto:guillaume.vacelet@gmail.com" },
    { label: "linkedin", icon: "linkedin.svg", url: "https://www.linkedin.com/in/guillaume-vacelet/" },
    { label: "github", icon: "github.svg", url: "https://github.com/Guillaume-Vacelet" },
  ];

  return (
    <section id="contact" className="section flex-col px-4 pt-24">
      <h2 className="text-black">Contact me</h2>
      <div className="flex flex-col items-center justify-evenly gap-4 bg-red-200">
        {contacts.map(contact =>
          <div className="rounded-lg p-2 bg-gray-400" key={contact.label}>
            <div className="relative w-[32px] h-[32px]">
              <Image
                src={`/static/images/${contact.icon}`}
                alt={`${contact.label} icon`}
                fill
                style={{objectFit:"cover"}}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
