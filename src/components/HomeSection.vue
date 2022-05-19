<template lang="en">
  <div id="home-section" class="main-view-section">
    <div id="home-section-left">
      <div class="emoji-card name">
        <div class="left">
          <img src="@/assets/images/wave.png" />
        </div>
        <div class="right">
          <p class="card-subtitle">Bonjour, je suis</p>
          <p class="card-title">Guillaume</p>
        </div>
      </div>
      <TextCard :texts="['DEVELOPPEUR WEB & MOBILE', 'UI/UX']" />
      <!-- <img class="big-image" src="@/assets/images/seoul2.jpeg" />
      <div class="emoji-card location">
        <img src="@/assets/images/south-korea-flag.png" />
        <p>EN ÉCHANGE UNIVERSITAIRE À SEOUL</p>
      </div> -->
    </div>
    <div id="home-section-right">
      <ListCard :title="'Contactez moi !'" :data="this.contacts"/>
    </div>
  </div>
</template>

<script>
import EmojiCardSmall from "@/components/EmojiCardSmall";
import TextCard from "@/components/TextCard";
import ListCard from "@/components/ListCard";

export default {
  name: "HomeSection",
  components: {
    EmojiCardSmall,
    TextCard,
    ListCard,
  },
  data() {
    return {
      contacts: [
        {
          img: "mail.png",
          text: "guillaume.vacelet@gmail.com",
          color: "#fcf2d9",
          isLink: false,
        },
        {
          img: "phone.png",
          text: "(+33) 0761-440-769",
          color: "#dcfcd9",
          isLink: false,
        },
        {
          img: "linkedin.png",
          text: "@guillaume-vacelet",
          color: "#dbf1ff",
          isLink: true,
          link: "https://www.linkedin.com/in/guillaume-vacelet/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#home-section {
  min-height: 100%;
  display: flex;
  flex-direction: row;
  background-color: var(--background1);
  #home-section-left {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    .emoji-card.name {
      width: 400px;
      height: 175px;
      flex-direction: row;
      box-shadow: 0 7px #e9ebef;
      border-radius: 24px;
      .left {
        flex: 1;
        img {
          width: 75px;
          height: 75px;
        }
      }
      .right {
        flex: 2;
        .card-title {
          font-family: var(--font-family-bold);
          font-size: 45px;
          padding: 10px 0 0 0;
        }
        .card-subtitle {
          font-size: 14px;
        }
      }
    }
    .emoji-card.location {
      width: 350px;
      height: 60px;
      flex-direction: row;
      align-items: center;
      border-radius: 15px;
      .row {
        display: flex;
        align-items: center;
      }
      img {
        width: 30px;
        height: 30px;
        margin: 0 6px 0 0;
      }
      .p {
        font-size: 14px;
        padding: 10px 0 0 0;
      }
    }
    .emoji-card {
      display: flex;
      background-color: white;
      margin: 0 0 35px 0;
      justify-content: center;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      p {
        font-family: var(--font-family-medium);
        margin: 0;
      }
    }
    .text-card {
      margin: 0 0 20px 0;
    }
    .mail-card {
      display: flex;
      width: 350px;
      height: 100px;
      border-radius: 20px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: white;
      img {
        width: 50px;
        height: 50px;
      }
      p {
        font-family: var(--font-family-medium);
        font-size: 18px;
        margin: 0;
      }
    }
  }
  #home-section-right {
    display: flex;
    width: 50%;
    padding: calc(50vh - var(--header-height) - 220px) 0 0 0;
    flex-direction: column;
    align-items: center;
  }
}
</style>
