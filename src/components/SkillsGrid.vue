<template lang="en">
  <div class="skill-grid">
    <div v-for="row in skills" class="row">
      <div 
        v-for="skill in row"
        :key="skill.imgSrc"
        :style="{ 'background': skill.color }"
        class="item"
      >
        <img 
          :src="require(`@/assets/images/skills/${skill.imgName}.png`)"
          :style="{ 'width': skill.width + 'px', 'height': skill.height + 'px' }"
          :alt="skill.name + ' logo'"
        />
        <p>{{skill.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsGrid",
  props: {
    skills: Array,
    small: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.skill-grid {
  display: flex;
  flex-direction: column;
  .row:not(:first-child) {
    margin: 50px 0 0 0;
  }
  .row {
    display: flex;
    flex-direction: row;
    .item {
      height: 115px;
      width: 115px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin: 0 50px 0 0;
      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
      -moz-box-sizing: border-box; /* Firefox, other Gecko */
      box-sizing: border-box; /* Opera/IE 8+ */
      cursor: pointer;
      p {
        display: none;
        position: absolute;
        font-family: var(--font-family-bold);
        font-size: 24px;
        color: white;
      }
    }
    .item:hover {
      opacity: 0.6;
      background-color: black !important;
      img {
        opacity: 0.3;
        background-color: black;
      }
      p {
        display: block;
      }
    }
  }
}
</style>
