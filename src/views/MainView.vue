<template lang="en">
  <div id="main-view">
    <AppNavbar :pages="pages" :on-click="scrollTo" :current-page="activeSection" />
    <ScrollDots :pages="pages" :on-click="scrollTo" :current-page="activeSection" />
    <HomeSection />
    <AboutMeSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import ScrollDots from "@/components/ScrollDots.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutMeSection from "@/components/AboutMeSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "HomeView",
  components: {
    AppNavbar,
    ScrollDots,
    HomeSection,
    AboutMeSection,
    ProjectsSection,
    ContactSection,
  },
  data() {
    return {
      currentPage: "home-section",
      pages: [
        { id: 0, DOMid: "home-section", label: "ACCUEIL" },
        { id: 1, DOMid: "about-me-section", label: "PROFIL" },
        { id: 2, DOMid: "projects-section", label: "PROJETS" },
        { id: 3, DOMid: "contact-section", label: "CONTACT" },
      ],
      lastScrollPos: window.window.pageYOffset,
      timerId: 0,
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
    };
  },
  created() {
    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.addEventListener("touchstart", this.touchStart, { passive: false }); // mobile devices
    window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices
  },
  mounted() {
    this.calculateSectionOffsets();
  },
  unmounted() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.removeEventListener("touchstart", this.touchStart); // mobile devices
    window.removeEventListener("touchmove", this.touchMove); // mobile devices
  },
  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName("section");
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) {
        return false;
      }
      this.activeSection = id;
      this.inMove = true;
      document.getElementsByTagName("section")[id].scrollIntoView({
        behavior: "smooth",
      });
      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function (e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      return false;
    },
    moveDown() {
      if (this.activeSection <= 0) {
        return;
        // this.activeSection = this.offsets.length - 1;
      }
      this.inMove = true;
      this.activeSection--;
      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      if (this.activeSection >= this.offsets.length - 1) {
        return;
        // this.activeSection = 0;
      }
      this.inMove = true;
      this.activeSection++;
      this.scrollToSection(this.activeSection, true);
    },
    touchStart(e) {
      e.preventDefault();
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if (this.inMove) {
        return false;
      }
      e.preventDefault();
      const currentY = e.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      this.touchStartY = 0;
      return false;
    },
    scrollTo(id) {
      this.inMove = true;
      this.activeSection = id;
      this.scrollToSection(this.activeSection, true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
