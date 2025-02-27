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
    techstack: ["angular16", "rxjs", "observables"],
    context: "As a fullstack consultant at Ippon Technologies, I collaborated with Canal+ for a full-remote frontend position.",
    concept: "Canal+ provides internet services in french overseas.\nThe mission consisted of supporting their frontend team to develop and maintain their monitoring application used by support and technical teams.\n\nI developed a new auto-diagnostic feature aimed at speeding up the support process for support teams. This module provides real-time analysis of a user's internet connection, using websockets directly retrieving data from equipments.",
  },
  {
    image: "/static/images/bento-thumbnail.png",
    title: "Bento",
    subtitle: "A fullstack application dedicated to company tools and resources.",
    year: "2023",
    techstack: ["react", "spring", "java", "docker"],
    context: "Master's degree internship project at Ippon Technologies.",
    concept: "A web agency platform aimed at developing an interactive application to centralize the company's resources and tools. The web app features Google OAuth integration, a masonry grid layout, and plugin creation capabilities. The design, inspired by the iOS home layout, was made using Figma with a focus on making a pleasant user-experience.",
  },
  {
    image: "/static/images/blindspot-thumbnail.png",
    title: "Blindspot",
    subtitle: "An IOT belt prototype to help visually impaired people.",
    year: "2021 - 2023",
    techstack: ["nextjs", "flutter", "python", "docker"],
    context: "Master's degree final project aiming at developing a tech solution with a positive societal impact, addressing environmental or social concerns. The team comprised eight members from various EPITECH campuses across France.",
    concept: "An IoT solution for visually impaired individuals: a connected belt equipped with a Raspberry Pi, cameras, and vibration motors. Using pattern recognition, the vibration motors indicate the direction and distance of obstacles around the user. Additionally, a mobile application developed with Flutter provides information about the belt, such as battery level and emergency call functionality.",
  },
  {
    image: "/static/images/safecheck-thumbnail.png",
    title: "Safecheck",
    subtitle: "A mobile application to authenticate sneakers with AI.",
    year: "2021",
    techstack: ["react-native", "python", "scikit-learn"],
    context: "Entrepreneurship training in Artificial Intelligence, offered in partnership with EPITECH IT School and EMLyon Business School. Over four months, participants had to identify a current challenge and develop a viable entrepreneurial solution leveraging artificial intelligence.",
    concept: "Addressing the growing issue of counterfeit products in the fashion industry, we developed a mobile application that authenticates sneakers using photographs.\n\nMy team and I created a dataset of counterfeit and authentic sneaker images, which we used to train an AI model using scikit-learn. I then developed a React Native mobile application that allows users to input pictures and output an authentication result.",
  },
]

export default projects;