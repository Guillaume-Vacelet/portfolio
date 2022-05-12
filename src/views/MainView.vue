<template lang="en">
  <div id="main-view">
    <HomeSection />
    <ContactSection />
    <FormationSection />
    <ExperienceSection />
  </div>
</template>

<script>
import HomeSection from "@/components/HomeSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FormationSection from "@/components/FormationSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";

export default {
  name: "HomeView",
  components: {
    HomeSection,
    ContactSection,
    FormationSection,
    ExperienceSection,
  },
};
</script>

<style lang="scss" scoped></style>
