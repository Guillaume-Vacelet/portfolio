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
    <section id="projects" className="section flex-col items-center sm:px-16 px-4 pt-16">
      <div className="w-full flex items-start py-8">
        <h2 className="text-black">Projects</h2>
      </div>
      <div className="w-full grid sm:grid-cols-4 sm:gap-40 gap-8">
        {projects.map(project =>
          <ProjectCard key={project.title} project={project} />
        )}
      </div>
    </section>
  );
}
