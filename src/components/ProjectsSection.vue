<template lang="en">
  <section id="projects-section" class="main-view-section">
    <h2 class="section-title">Projets</h2>
    <div class="body">
      <div class="top">
        <div class="projects">
          <div class="project-card-container" v-for="project in projects" :key="project.id">
            <ProjectCard :project="project.title" :id="project.id" :on-click="expandProject" />
          </div>
          <ExpandedProject
            v-for="project in projects"
            :key="project.id"
            :show="currentExpandedProject == project.id"
            :project="project" 
            :on-close="expandProject"
          />
        </div>
      </div>
      <div class="bottom">
        <ContactLinksBubbles />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
import ExpandedProject from "@/components/ExpandedProject";
import ContactLinksBubbles from "@/components/ContactLinksBubbles";

export default {
  name: "ProjectsSection",
  components: {
    ProjectCard,
    ExpandedProject,
    ContactLinksBubbles,
  },
  data() {
    return {
      currentExpandedProject: -1,
      projects: [
        {
          id: 0,
          title: "blindspot",
          subtitle:
            "Solution d'aide à la navigation pour personnes malvoyantes.",
          description:
            "Projet de fin d'études EPITECH, en collaboration avec 9 étudiants sur 3 ans.\
            \nBlindspot est un appareil portatif, capable de d'évaluer les distances entre son porteur et les objets de son environnement. Une application mobile sert d'interface à cet appareil, pour ajuster des paramètres ou accéder à des fonctionnalités d'urgence. Un site web vitrine a été réalisé pour promouvoir notre solution.",
          infos: [
            { label: "role", text: "Développeur front-end\nUI/UX designer" },
            { label: "duration", text: "2 ans" },
            { label: "team", text: "9 étudiants EPITECH" },
            { label: "stack", text: "NextJS\nFlutter" },
          ],
          color: "#B4FFF6",
        },
        {
          id: 1,
          title: "safecheck",
          subtitle: "Application mobile d'authentification de contrefaçons.",
          description:
            "Réalisé dans le cadre de la formation \"Entrepreneurship & IA\",\n l'objectif était de collaborer entre étudiants en informatique (EPITECH), commerce (EMLyon) et design (Bellecour) pour imaginer un projet innovant qui répond à un problème grâce à l'intelligence artificielle.\
            \n\nNous avons donc créé Safecheck, une application mobile pour vérifier l'authenticité d'un produit, grâce à de la reconnaissance d'image poussée.",
          infos: [
            {
              label: "role",
              text: "Développeur front-end\nUI/UX designer\nAI developpeur",
            },
            { label: "duration", text: "2 mois" },
            {
              label: "team",
              text: "2 étudiants EPITECH\n2 étudiants EMLyon\n1 étudiant Bellecour",
            },
            { label: "stack", text: "React Native\nScikit-Learn" },
          ],
          color: "#A0FFCA",
        },
      ],
    };
  },
  methods: {
    expandProject(projectId) {
      this.currentExpandedProject = projectId;
    },
  },
};
</script>

<style lang="scss" scoped>
#projects-section {
  background: var(--background1);
  flex-direction: column;
  .body {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    .top {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .projects {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        .project-card-container {
          width: 400px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 15px 0 15px;
          cursor: pointer;
          transition: 0.4s;
        }
      }
      .projects:hover .project-card-container:not(:hover) {
        opacity: 0.4;
        // transform: scale(0.98);
      }
      .projects:hover .project-card-container:hover {
        opacity: 1;
        transform: scale(1.05);
      }
    }
    .bottom {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
}
</style>
