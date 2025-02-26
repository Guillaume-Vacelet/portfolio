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
    year: "2023",
    techstack: ["react", "spring", "java", "docker"],
    context: "Master degree internship at Ippon Technologies.",
    concept: "A web agency platform with the goal of creating an interactive application to centralize the company's resources and tools. The web app included features such as Google oAuth, mansory grid layout and plugin creation. The design was inspired by IOS home layout and made on Figma.",
  },
  {
    image: "/static/images/blindspot-thumbnail.png",
    title: "Blindspot",
    subtitle: "An IOT belt prototype to help visually impaired people.",
    year: "2021 - 2023",
    techstack: ["nextjs", "flutter", "python", "docker"],
    context: "Master degree final project with a goal of creating a tech solution with a positive impact on society, such as environment or social concerns. The team consisted of 8 members from differents Epitech campus over France.",
    concept: "An IOT help for visually impaired people : a connected belt equiped with a raspberry, cameras and vibrators. Using pattern recognition, the vibrators would indicate the direction and distance of obstacles around the user. A mobile application has been developed with Flutter to provide informations about the belt, such as battery level or emergency calls.",
  },
  {
    image: "/static/images/safecheck-thumbnail.png",
    title: "Safecheck",
    subtitle: "A mobile application to authenticate sneakers with AI.",
    year: "2021",
    techstack: ["react-native", "python", "scikit-learn"],
    context: "Entrepreneurship in Artifical Intelligence training, in partnership with EPITECH IT school and EMLyon business school. Four months to identify a current issue and develop a viable entrepreneurial solution using artificial intelligence.",
    concept: "Finding a solution to the growing issue of counterfeits product in the fashion industry. We built a mobile application to authenticate pairs of sneakers from picture",
  },
]

export default projects;