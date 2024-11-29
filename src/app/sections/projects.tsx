import ProjectCard from "../components/projectCard";

export default function ProjectsSection() {
  const projects = [
    {
      image: "/static/images/bordeaux-bg.jpg",
      title: "Bento",
      desc: "A web agency platform to centralize the company tools and resources.",
      techstack: ["react", "java", "docker"],
    },
    {
      image: "/static/images/bento-thumbnail.png",
      title: "Bento",
      desc: "A web agency platform to centralize the company tools and resources.",
      techstack: ["react", "java", "docker"],
    },
    {
      image: "/static/images/blindspot-thumbnail.svg",
      title: "Blindspot",
      desc: "An IoT belt prototype equiped with cameras to help visually impaired people to navigate through their environment.",
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
    <section id="projects" className="section bg-slate-900">
      <div className="w-full grid grid-cols-[auto] sm:grid-cols-[auto_auto] auto-rows-min items-start gap-6">
        {projects.map(project =>
          <ProjectCard project={project} />
        )}
      </div>
    </section>
  );
}
