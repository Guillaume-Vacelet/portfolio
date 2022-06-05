<template lang="en">
  <div class="project-card" @click="onClick(id)">
    <img :src="require(`@/assets/images/projects/${project}/${project}.png`)" />
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: String,
    id: Number,
    onClick: Function,
  },
};
</script>

<style lang="scss" scoped>
.project-card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  // box-shadow: 10px 10px 20px rgb(173, 173, 173);
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
