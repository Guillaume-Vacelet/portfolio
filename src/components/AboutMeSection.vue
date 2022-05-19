<template lang="en">
  <div id="about-me-section" class="main-view-section">
    <h2>Competences & Parcours</h2>
    <div class="body">
      <div class="column left">
        <SkillsGrid :skills="skills" />
      </div>
      <div class="column right">
        <ExperiencesList :experiences="experiences" />
      </div>
    </div>
  </div>
</template>

<script>
import SkillsGrid from "@/components/SkillsGrid";
import ExperiencesList from "@/components/ExperiencesList";

export default {
  name: "AboutMeSection",
  components: {
    SkillsGrid,
    ExperiencesList,
  },
  data() {
    return {
      skills: [
        [
          { imgSrc: "c.png", width: 36, height: 40, color: "#e1eefc" },
          { imgSrc: "cpp.png", width: 35.5, height: 40, color: "#e1eefc" },
        ],
        [
          { imgSrc: "js.png", width: 40, height: 40, color: "#fcfae1" },
          { imgSrc: "vue.png", width: 40, height: 40, color: "#d7fae9" },
          { imgSrc: "react.png", width: 43, height: 40, color: "#dbf8ff" },
        ],
        [{ imgSrc: "python.png", width: 40, height: 40, color: "#fcfae1" }],
      ],
      experiences: [
        {
          year: "2021",
          yearExperiences: [
            {
              title: "Master 1 en Échange universitaire",
              place: "Chung-Ang University, Seoul",
            },
          ],
        },
        {
          year: "2019",
          yearExperiences: [
            { title: "Stage développeur web", place: "ITEA, Nantes" },
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
        {
          year: "2016",
          yearExperiences: [
            {
              title: "Baccalauréat S - Informatique",
              place: "Lycée Grandmont, Tours",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#about-me-section {
  min-height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  h2 {
    font-family: var(--font-family-bold);
    font-size: 35px;
    color: var(--text);
    text-align: center;
    margin: 0 0 75px 0;
  }
  .body {
    display: flex;
    flex-direction: row;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .column.left {
    width: 50%;
  }
  .column.right {
    width: 50%;
    justify-content: center;
  }
}
</style>
