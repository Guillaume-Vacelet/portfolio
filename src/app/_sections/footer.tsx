import SocialLinkList from "@/_components/socialLinkList";

export default function Footer() {
  return (
    <section id="footer" className="w-full flex justify-center bg-black py-16 px-4 sm:px-12 md:px-20 xl:px-40 border-t-[0.35px] border-zinc-800">
      <div className="w-full flex flex-col justify-between gap-4">
        <SocialLinkList />
        <span className="text-base font-medium">guillaume.vacelet@gmail.com</span>
        <span className="text-[10px] sm:text-xs leading-none text-zinc-500">© 2025 Guillaume Vacelet. All rights reserved.</span>
      </div>
    </section>
  );
}
