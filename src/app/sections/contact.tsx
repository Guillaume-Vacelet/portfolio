import Image from "next/image";
import { Squircle } from "@squircle-js/react";

export default function ContactSection() {
  const contacts = [
    { label: "email", icon: "envelope.fill.svg", url: "mailto:guillaume.vacelet@gmail.com" },
    { label: "linkedin", icon: "linkedin.svg", url: "https://www.linkedin.com/in/guillaume-vacelet/" },
    { label: "github", icon: "github.svg", url: "https://github.com/Guillaume-Vacelet" },
  ];

  return (
    <section id="contact" className="section">
      <div className="w-full flex flex-col items-center justify-evenly gap-4">
        {contacts.map(contact =>
          <Squircle
            cornerRadius={40}
            cornerSmoothing={1}
            width={160}
            height={160}
            className="flex items-center gap-1 bg-white bg-opacity-10 text-white border-white border-1">
            <a className="flex w-full h-full p-8"
              href={contact.url}
              target="_blank">
              <div className="relative w-full h-full">
                <Image
                  src={`/static/images/${contact.icon}`}
                  alt={`${contact.label} icon`}
                  fill
                />
              </div>
              {/* {contact.label} */}
            </a>
          </Squircle>
        )}
      </div>
    </section>
  );
}
