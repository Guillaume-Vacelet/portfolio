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
          :src="require(`@/assets/images/${skill.imgSrc}`)"
          :style="{ 'width': skill.width + 'px', 'height': skill.height + 'px' }" 
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsGrid",
  props: {
    skills: Array,
  },
};
</script>

<style lang="scss" scoped>
.skill-grid {
  display: flex;
  flex-direction: column;
  .row {
    display: flex;
    flex-direction: row;
    margin: 0 0 40px 0;
    .item {
      height: 110px;
      width: 110px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: white;
      margin: 0 40px 0 0;
      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
      -moz-box-sizing: border-box; /* Firefox, other Gecko */
      box-sizing: border-box; /* Opera/IE 8+ */
    }
  }
}
</style>
