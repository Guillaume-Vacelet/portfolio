import ProjectCard from "@/app/_components/projectCard";
import { useTranslations } from "next-intl";
import { projects } from "@/app/_data/projects";

export default function WorksSection() {
  const t = useTranslations('homePage.worksSection');

  return (
    <section id="works" className="section flex-col items-center py-16">
      <div className="w-full flex flex-col items-center gap-8">
        <h2 className="text-black text-3xl md:text-5xl font-medium">{t('title')}</h2>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map(project =>
            <ProjectCard key={project.slug} project={project} />
          )}
        </div>
      </div>
    </section>
  );
}
