import ProjectCard from "@/_components/projectCard";
import projects from "@/_data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section flex-col items-center px-4 sm:px-12 md:px-20 xl:px-40 py-16">
      <div className="w-full flex flex-col items-start gap-8">
        <h2 className="text-black text-5xl font-medium">Key projects</h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map(project =>
            <ProjectCard key={project.title} project={project} />
          )}
        </div>
      </div>
    </section>
  );
}
