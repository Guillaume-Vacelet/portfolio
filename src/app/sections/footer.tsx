import SocialLinks from "../components/socialLinks";

export default function Footer() {
  return (
    <section id="footer" className="w-full flex flex-col gap-4 p-6 text-xs font-medium bg-black">
      <SocialLinks />
      <span className="test">guillaume.vacelet@gmail.com</span>
      <span className="text-[10px] leading-none text-zinc-500">© 2025 Guillaume Vacelet. All rights reserved.</span>
    </section>
  );
}
