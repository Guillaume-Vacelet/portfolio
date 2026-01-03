export interface SocialLink {
  label: string;
  icon: string;
  url: string;
  shortUrl: string;
}

export const socialLinkList: SocialLink[] = [
  { 
    label: "linkedin",
    icon: "linkedin.svg",
    url: "https://www.linkedin.com/in/guillaume-vacelet/",
    shortUrl: "linkedin.com/in/guillaume-vacelet/"
  },
  { 
    label: "malt",
    icon: "malt.svg",
    url: "https://www.malt.fr/profile/guillaumevacelet",
    shortUrl: "malt.fr/profile/guillaumevacelet"
  },
  { 
    label: "github",
    icon: "github.svg",
    url: "https://github.com/Guillaume-Vacelet",
    shortUrl: "github.com/Guillaume-Vacelet"
  },
  { 
    label: "calendly",
    icon: "calendly.svg",
    url: "https://calendly.com/guillaume-vacelet/30min",
    shortUrl: "calendly.com/guillaume-vacelet/30min"
  },
    { 
    label: "email",
    icon: "envelope.fill.svg",
    url: "mailto:guillaume.vacelet@gmail.com",
    shortUrl: "guillaume.vacelet@gmail.com"
  },
];

export const linkedinLink: SocialLink = socialLinkList[0];
export const maltLink: SocialLink = socialLinkList[1];
export const githubLink: SocialLink = socialLinkList[2];
export const calendlyLink: SocialLink = socialLinkList[3];
export const emailLink: SocialLink = socialLinkList[4];