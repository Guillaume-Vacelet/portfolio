import SocialLinks from "@/_components/socialLinks";

export default function Footer() {
  return (
    <section id="footer" className="w-full">
      <div className="w-full flex flex-col justify-between gap-6 py-12 px-6 text-xs md:text-base font-medium bg-black">
        <SocialLinks />
        <span className="text-base">guillaume.vacelet@gmail.com</span>
        <span className="text-[10px] sm:text-xs leading-none text-zinc-500">© 2025 Guillaume Vacelet. All rights reserved.</span>
      </div>
    </section>
  );
}
