export interface ProjectInfos {
  image: string;
  title: string;
  subtitle: string;
  year: string;
  techstack: string[];
  context: string;
  concept: string;
}

const projects: ProjectInfos[] = [
  {
    image: "/static/images/canal+.png",
    title: "Canal+",
    subtitle: "An.",
    year: "2024",
    techstack: ["react", "java", "docker"],
    context: "",
    concept: "",
  },
  {
    image: "/static/images/bento-thumbnail.png",
    title: "Bento",
    subtitle: "A fullstack application centralizing resources and allowing widgets creation.",
    year: "2024",
    techstack: ["react", "java", "docker"],
    context: "",
    concept: "",
  },
  {
    image: "/static/images/blindspot-thumbnail.png",
    title: "Blindspot",
    subtitle: "A belt prototype equiped with cameras to help visually impaired people.",
    year: "2024",
    techstack: ["react", "java", "docker"],
    context: "",
    concept: "",
  },
  {
    image: "/static/images/safecheck-thumbnail.png",
    title: "Safecheck",
    subtitle: "A mobile application using artificial intelligence to detect counterfeit sneakers products from authentic ones.",
    year: "2024",
    techstack: ["react", "java", "docker"],
    context: "",
    concept: "",
  },
]

export default projects;