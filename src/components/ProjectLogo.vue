<template lang="en">
  <div class="project-logo"
    v-bind:class="{ 
      selected: projectName ==  selectedProject 
    }"
    @click="this.onClick(projectName)"
  >
    <img :src="require(`@/assets/images/projects/${projectName}/logo.png`)" />
  </div>
</template>

<script>
export default {
  name: "ProjectLogo",
  props: {
    projectName: String,
    onClick: Function,
    selectedProject: String,
  },
};
</script>

<style lang="scss" scoped>
.project-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  img {
    height: 60%;
    width: 60%;
    border-radius: 25%;
  }
}
.project-logo:hover {
  img {
    height: 75%;
    width: 75%;
  }
}
.project-logo.selected {
  img {
    height: 100%;
    width: 100%;
    // box-shadow: 3px 5px 15px #505254;
  }
}
</style>
