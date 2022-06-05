<template lang="en">
  <section id="about-me-section" class="main-view-section">
    <h2 class="section-title">Compétences & Parcours</h2>
    <div class="body">
      <div class="column left">
        <div class="top">
          <SkillsGrid :skills="skills" />
        </div>
        <div class="bottom">
          <ContactLinksBubbles />
        </div>
      </div>
      <div class="column right">
        <ExperiencesList :experiences="experiences" />
      </div>
    </div>
  </section>
</template>

<script>
import SkillsGrid from "@/components/SkillsGrid";
import ExperiencesList from "@/components/ExperiencesList";
import ContactLinksBubbles from "@/components/ContactLinksBubbles";

export default {
  name: "AboutMeSection",
  components: {
    SkillsGrid,
    ExperiencesList,
    ContactLinksBubbles,
  },
  data() {
    return {
      skills: [
        [
          {
            imgName: "c",
            name: "C",
            width: 36,
            height: 40,
            color: "#f1f4fb",
          },
          {
            imgName: "cpp",
            name: "C++",
            width: 35.5,
            height: 40,
            color: "#f1f4fb",
          },
        ],
        [
          {
            imgName: "js",
            name: "JS",
            width: 40,
            height: 40,
            color: "#faf9e1",
          },
          {
            imgName: "vue",
            name: "Vue",
            width: 40,
            height: 40,
            color: "#e8faf0",
          },
          {
            imgName: "react",
            name: "React",
            width: 43,
            height: 40,
            color: "#e8f8fc",
          },
        ],
        [
          {
            imgName: "python",
            name: "Python",
            width: 40,
            height: 40,
            color: "#faf9e1",
          },
          {
            imgName: "flutter",
            name: "Flutter",
            width: 40,
            height: 40,
            color: "#ebf9ff",
          },
          {
            imgName: "git",
            name: "Git",
            width: 40,
            height: 40,
            color: "#ffece8",
          },
        ],
      ],
      experiences: [
        {
          year: "2021",
          yearExperiences: [
            {
              title: "Master 1 en Échange universitaire",
              place: "Chung-Ang University, Seoul",
            },
            {
              title: "Validation Bachelor EPITECH",
              place: "EPITECH, Nantes",
            },
            {
              title: "Formation IA & Entrepreneurship",
              place: "EM Lyon & EPITECH",
            },
          ],
        },
        {
          year: "2019",
          yearExperiences: [
            { title: "Stage développeur web fullstack", place: "ITEA, Nantes" },
          ],
        },
        {
          year: "2018",
          yearExperiences: [
            { title: "Entrée à EPITECH", place: "EPITECH, Nantes" },
          ],
        },
        {
          year: "2017",
          yearExperiences: [
            {
              title: "Licence 1 de Mathématique & Informatique",
              place: "Faculté des sciences et techniques, Tours",
            },
          ],
        },
        // {
        //   year: "2016",
        //   yearExperiences: [
        //     {
        //       title: "Baccalauréat S, Spécialité Informatique",
        //       place: "Lycée Grandmont, Tours",
        //     },
        //   ],
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#about-me-section {
  flex-direction: column;
  background-color: white;
  font-size: 1rem;
  .body {
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .column {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .column.left {
    width: 50%;
    height: 100%;
    .top {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bottom {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
    }
  }
  .column.right {
    width: 50%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    // padding: 0 0 0 50px;
  }
}
</style>
