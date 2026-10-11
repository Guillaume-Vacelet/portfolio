export interface Project {
  slug: string;
  title: string;
  year: string;
  // Projects with a public website link to it instead of having their own page
  url?: string;
  // Labels of the tech chips, see IconChip
  techstack: string[];
}

// Projects in display order. Each one also needs translated `desc`, `context` and
// `concept` texts under `projectsPage.<slug>` in every messages file, and a
// `/static/images/<slug>-thumbnail.png` image.
export const projects: Project[] = [
  { slug: 'doozis', title: 'Doozis', year: '2025', url: 'https://www.doozis.fr/', techstack: [] },
  { slug: 'ilie-nastase', title: 'Ilie Nastase', year: '2025', url: 'https://hypnose-ilie.fr/', techstack: [] },
  { slug: 'insho-atelier', title: 'Insho Atelier', year: '2025', url: 'https://www.insho-atelier.com/', techstack: [] },
  { slug: 'canal-plus', title: 'Canal+', year: '2024', techstack: ['angular16', 'rxjs', 'observables'] },
  { slug: 'bento', title: 'Bento', year: '2023', techstack: ['react', 'spring', 'java', 'docker'] },
  { slug: 'blindspot', title: 'Blindspot', year: '2021 - 2023', techstack: ['nextjs', 'flutter', 'python', 'docker'] },
  { slug: 'safecheck', title: 'Safecheck', year: '2021', techstack: ['react-native', 'python', 'scikit-learn'] },
];

export function findProject(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}
