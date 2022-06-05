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
  font-size: 16px;
  body::-webkit-scrollbar {
    display: none;
  }
  body {
    min-height: 100vh;
    margin: 0;
    #app {
      height: 100%;
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
