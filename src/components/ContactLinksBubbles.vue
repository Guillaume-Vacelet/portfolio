<template lang="en">
  <div class="contact-links-bubbles">
    <div class="bubble">
      <a href="https://github.com/Guillaume-Vacelet" target="_blank">
        <font-awesome-icon 
          :icon="github"
          size="lg"
          color="gray"
        />
      </a>
    </div>
    <div class="bubble">
      <a href="https://www.linkedin.com/in/guillaume-vacelet/" target="_blank">
        <font-awesome-icon
          :icon="linkedin"
          size="lg"
          color="gray"
          onClick
        />
      </a>
    </div>
  </div>
</template>

<script>
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default {
  name: "ContactLinksBubbles",
  computed: {
    github() {
      return faGithub;
    },
    linkedin() {
      return faLinkedin;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-links-bubbles {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  // position: fixed;
  // left: var(--section-padding);
  // top: calc(100% - 100px - var(--section-padding));
  .bubble {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgray;
    border-radius: 100%;
    cursor: hand;
  }
  .bubble:hover {
    border: 1px solid var(--primary);
    .fa-github {
      color: var(--primary);
    }
    .fa-linkedin {
      color: var(--primary);
    }
  }
}
</style>
