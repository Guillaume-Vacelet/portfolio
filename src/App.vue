<template>
  <AppNavbar :pages="pages" :on-click="scrollTo" :currentPage="current" />
  <ScrollDots :pages="pages" :on-click="scrollTo" :currentPage="current" />
  <MainView />
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import ScrollDots from "@/components/ScrollDots.vue";
import MainView from "@/views/MainView.vue";

export default {
  name: "AppView",
  components: {
    AppNavbar,
    ScrollDots,
    MainView,
  },
  data() {
    return {
      current: "home-section",
      pages: [
        { id: "home-section", label: "HOME" },
        { id: "contact-section", label: "CONTACT" },
        { id: "formation-section", label: "FORMATION" },
        { id: "experience-section", label: "EXPERIENCE" },
      ],
    };
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
      this.current = id;
      // var headerOffset = 50 + 32 + 16;
      // var element = document.getElementById(id);
      // var elementPosition = element.getBoundingClientRect().top;
      // var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // window.scrollTo({
      //   // top: offsetPosition,
      //   top: elementPosition,
      //   behavior: "smooth",
      // });
    },
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
    margin: 0;
    height: 100%;
    #app {
      background-color: #d3dee8;
    }
  }
}
</style>
