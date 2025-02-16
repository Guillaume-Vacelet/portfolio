import ProjectCard from "../components/projectCard";

export default function ProjectsSection() {
  const projects = [
    // {
    //   image: "/static/images/bordeaux-bg.jpg",
    //   title: "Bento",
    //   desc: "A web agency platform to centralize the company tools and resources.",
    //   techstack: ["react", "java", "docker"],
    // },
    {
      image: "/static/images/bento-thumbnail.png",
      title: "Bento",
      desc: "A fullstack application centralizing resources and allowing widgets creation.",
      techstack: ["react", "java", "docker"],
    },
    {
      image: "/static/images/blindspot-thumbnail.svg",
      title: "Blindspot",
      desc: "A belt prototype equiped with cameras to help visually impaired people.",
      techstack: ["react", "java", "docker"],
    },
    {
      image: "/static/images/safecheck-thumbnail.svg",
      title: "Safecheck",
      desc: "A mobile application using artificial intelligence to detect counterfeit sneakers products from authentic ones.",
      techstack: ["react", "java", "docker"],
    },
  ]

  return (
    <section id="projects" className="section flex-col items-center p-6">
      <div className="w-full flex flex-col items-start gap-8">
        <h2 className="text-black text-5xl font-medium">Milestones in the learning journey</h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map(project =>
            <ProjectCard key={project.title} project={project} />
          )}
        </div>
      </div>
    </section>
  );
}
