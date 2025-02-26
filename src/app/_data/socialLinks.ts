export interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

const SocialLinkList: SocialLink[] = [
  { label: "linkedin", icon: "linkedin.svg", url: "https://www.linkedin.com/in/guillaume-vacelet/" },
  { label: "github", icon: "github.svg", url: "https://github.com/Guillaume-Vacelet" },
  { label: "malt", icon: "malt.svg", url: "https://www.malt.fr/profile/guillaumevacelet" },
  { label: "email", icon: "envelope.fill.svg", url: "mailto:guillaume.vacelet@gmail.com" },
];

export const maltLink: SocialLink = SocialLinkList[2]; 

export default SocialLinkList;