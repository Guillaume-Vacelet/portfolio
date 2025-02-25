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
    image: "/static/images/canal-plus.svg",
    title: "Canal+",
    subtitle: "A web application monitoring the internet connection of Canal+ customers.",
    year: "2024",
    techstack: ["react", "java", "docker"],
    context: "",
    concept: "",
  },
  {
    image: "/static/images/bento-thumbnail.png",
    title: "Bento",
    subtitle: "A fullstack application dedicated to company tools and resources.",
    year: "2024",
    techstack: ["react", "java", "docker"],
    context: "",
    concept: "",
  },
  {
    image: "/static/images/blindspot-thumbnail.png",
    title: "Blindspot",
    subtitle: "An IOT belt prototype to help visually impaired people.",
    year: "2024",
    techstack: ["react", "java", "docker"],
    context: "",
    concept: "",
  },
  {
    image: "/static/images/safecheck-thumbnail.png",
    title: "Safecheck",
    subtitle: "A mobile application using AI to authenticate sneakers.",
    year: "2024",
    techstack: ["react", "java", "docker"],
    context: "",
    concept: "",
  },
]

export default projects;