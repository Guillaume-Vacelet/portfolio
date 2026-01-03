import Image from "next/image";
import { useTranslations } from "next-intl";
import { socialLinkList, calendlyLink, maltLink } from "@/app/_data/socialLinks";
import HoverableButtonLink from "../_components/hoverableButtonLink";

export default function ContactSection() {
  const t = useTranslations("homePage.contactSection");

  return (
    <section id="contact" className="section h-[50vh] py-16 bg-black">
      <div className="w-full flex flex-col justify-between">

        <div className="flex flex-col gap-">
          <span className="text-xl lg:text-3xl">Guillaume Vacelet</span>

          <div className="flex flex-row items-center gap-4 mt-4">
            {socialLinkList.map(social =>
              <a
                key={social.label}
                href={social.url}
                target="_blank">
                <Image
                  src={`/static/icons/${social.icon}`}
                  alt={`${social.label} icon`}
                  width={20}
                  height={20}
                  title={social.label}
                  className="size-6 sm:size-8 svg-to-white"
                />
              </a>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-2 lg:gap-4 mt-8">
          <HoverableButtonLink label={t('bookACall')} url={calendlyLink.url} />
          <HoverableButtonLink label={t('hireMeOnMalt')} url={maltLink.url} primary />
        </div>
        <span className="mt-8 text-xs">
          {t('allRightReserved')}
        </span>
      </div>
    </section>
  );
}
