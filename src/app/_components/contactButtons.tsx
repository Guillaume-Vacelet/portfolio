import { useTranslations } from "next-intl";
import HoverableButtonLink from "@/app/_components/hoverableButtonLink";
import { calendlyLink, maltLink } from "@/app/_data/socialLinks";

// "Book a call" and "Hire me on Malt" buttons. Returns a fragment so each section lays them out.
export default function ContactButtons() {
  const t = useTranslations('cta');

  return (
    <>
      <HoverableButtonLink label={t('bookACall')} url={calendlyLink.url} />
      <HoverableButtonLink label={t('hireMeOnMalt')} url={maltLink.url} primary />
    </>
  );
}
