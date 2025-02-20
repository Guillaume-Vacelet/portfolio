import ProjectCard from "@/_components/projectCard";
import projects from "@/_data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section flex-col items-center p-6 pb-20">
      <div className="w-full max-w-md sm:max-w-xl md:max-w-4xl flex flex-col items-start gap-8">
        <h2 className="text-black text-5xl font-medium">Milestones in the learning journey</h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map(project =>
            <ProjectCard key={project.title} project={project} />
          )}
        </div>
      </div>
    </section>
  );
}
