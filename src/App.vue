<template>
  <MainView />
</template>

<script>
import MainView from "@/views/MainView.vue";

export default {
  name: "AppView",
  components: {
    MainView,
  },
};
</script>

<style lang="scss">
@import "./styles/global.scss";

html {
  height: 100%;
  scrollbar-width: none;
  body::-webkit-scrollbar {
    display: none;
  }
  body {
    height: 100%;
    margin: 0;
    #app {
      height: 100%;
      background-color: #d3dee8;
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
