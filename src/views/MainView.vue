<template lang="en">
  <div id="main-view">
    <AppNavbar :pages="pages" :on-click="scrollTo" :current-page="currentPage" />
    <ScrollDots :pages="pages" :on-click="scrollTo" :current-page="currentPage" />
    <HomeSection />
    <AboutMeSection />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import ScrollDots from "@/components/ScrollDots.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutMeSection from "@/components/AboutMeSection.vue";
import Scroll from "@/modules/Scroll";

export default {
  name: "HomeView",
  components: {
    AppNavbar,
    ScrollDots,
    HomeSection,
    AboutMeSection,
  },
  data() {
    return {
      currentPage: "home-section",
      currentId: 0,
      pages: [
        { id: "home-section", label: "ACCUEIL" },
        { id: "about-me-section", label: "PROFIL" },
      ],
      lastScrollPos: window.window.pageYOffset,
      timerId: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollTo(id) {
      console.log(id);
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
      });
      this.currentPage = id;
    },
    handleScroll() {
      let scroll = new Scroll();
      let newScrollPos = scroll.getScrollPosition();
      let currentAnchor = document.getElementById(this.currentPage);

      if (newScrollPos < currentAnchor.getBoundingClientRect().top) {
        if (this.currentId > 0) {
          this.currentId--;
        }
      } else if (
        this.currentId < this.pages.length - 1 &&
        document
          .getElementById(this.pages[this.currentId + 1].id)
          .getBoundingClientRect().top <= 0
      ) {
        this.currentId++;
      }
      this.currentPage = this.pages[this.currentId].id;

      // this.currentPage = this.pages[this.currentId];
      // if (newScrollPos < this.lastScrollPos) {
      //   console.log("UP");
      // } else {
      //   console.log("DOWN");
      // }
      // this.lastScrollPos = newScrollPos;
    },
  },
};
</script>

<style lang="scss" scoped>
#main-view {
  height: 100%;
  // overflow: hidden;
}
</style>
