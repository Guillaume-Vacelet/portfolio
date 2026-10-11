export interface SocialLink {
  label: string;
  // Display name, used as the accessible name of icon-only links
  name: string;
  icon: string;
  url: string;
  shortUrl: string;
}

export const linkedinLink: SocialLink = {
  label: "linkedin",
  name: "LinkedIn",
  icon: "linkedin.svg",
  url: "https://www.linkedin.com/in/guillaume-vacelet/",
  shortUrl: "linkedin.com/in/guillaume-vacelet/"
};

export const maltLink: SocialLink = {
  label: "malt",
  name: "Malt",
  icon: "malt.svg",
  url: "https://www.malt.fr/profile/guillaumevacelet",
  shortUrl: "malt.fr/profile/guillaumevacelet"
};

export const githubLink: SocialLink = {
  label: "github",
  name: "GitHub",
  icon: "github.svg",
  url: "https://github.com/Guillaume-Vacelet",
  shortUrl: "github.com/Guillaume-Vacelet"
};

export const calendlyLink: SocialLink = {
  label: "calendly",
  name: "Calendly",
  icon: "calendly.svg",
  url: "https://calendly.com/guillaume-vacelet/30min",
  shortUrl: "calendly.com/guillaume-vacelet/30min"
};

export const emailLink: SocialLink = {
  label: "email",
  name: "Email",
  icon: "envelope.fill.svg",
  url: "mailto:guillaume.vacelet@gmail.com",
  shortUrl: "guillaume.vacelet@gmail.com"
};

// Display order of the social icons
export const socialLinkList: SocialLink[] = [linkedinLink, maltLink, githubLink, calendlyLink, emailLink];
