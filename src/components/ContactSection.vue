<template lang="en">
  <section id="contact-section" class="main-view-section">
    <h2 class="section-title">Contactez-moi !</h2>
    <div class="body">
      <ul class="contact-cards-list">
        <li v-for="contact in contacts" :key="contact.img">
          <EmojiCardSmall
            :img-src="contact.img"
            :text="contact.text"
            :color="contact.color"
            :isLink="contact.isLink"
            :link="contact.link"
          />
        </li>
      </ul>
      <ContactLinksBubbles />
    </div>
  </section>
</template>

<script>
import ListCard from "@/components/ListCard";
import EmojiCardSmall from "@/components/EmojiCardSmall";
import ContactLinksBubbles from "@/components/ContactLinksBubbles";

export default {
  name: "ContactSection",
  components: {
    ListCard,
    EmojiCardSmall,
    ContactLinksBubbles,
  },
  data() {
    return {
      contacts: [
        {
          img: "mail.png",
          text: "guillaume.vacelet@gmail.com",
          color: "#f8f4eb",
          isLink: false,
        },
        {
          img: "phone.png",
          text: "(+33) 0761-440-769",
          color: "#e8faf0",
          isLink: false,
        },
        {
          img: "linkedin.png",
          text: "@guillaume-vacelet",
          color: "#e8f6ff",
          isLink: true,
          link: "https://www.linkedin.com/in/guillaume-vacelet/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#contact-section {
  background-color: white;
  flex-direction: column;
  font-size: 1rem;
  .body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .contact-cards-list {
      width: 400px;
      height: 450px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
        margin: 20px;
      }
    }
    .contact-links-bubbles {
      align-self: flex-start;
    }
  }
}
</style>
