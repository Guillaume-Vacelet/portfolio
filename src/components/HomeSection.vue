<template lang="en">
  <section id="home-section" class="main-view-section">
    <PolaroidPicture :image="'me'" />
    <div id="home-section-left">
      <div class="top">
        <EmojiCardName />
        <TextCard :texts="['DEVELOPPEUR WEB & MOBILE', 'UI/UX']" />
      </div>
      <div class="bottom">
        <ContactLinksBubbles />
      </div>
    </div>
    <div id="home-section-right">
      <ImageBubble :img-name="'mobile'" :title="'MOBILE'" :size="'110px'" />
      <ImageBubble :img-name="'browser'" :title="'WEB'" :size="'200px'" :shadow="true" />
      <ImageBubble :img-name="'paint'" :title="'UI/UX'" :size="'110px'" />
      <ImageBubble :img-name="'chess'" :title="'AI'" :size="'130px'" />
    </div>
  </section>
</template>

<script>
import EmojiCardName from "@/components/EmojiCardName";
import EmojiCardSmall from "@/components/EmojiCardSmall";
import TextCard from "@/components/TextCard";
import ListCard from "@/components/ListCard";
import ContactLinksBubbles from "@/components/ContactLinksBubbles";
import ImageBubble from "@/components/ImageBubble";
import PolaroidPicture from "@/components/PolaroidPicture";

export default {
  name: "HomeSection",
  components: {
    EmojiCardSmall,
    TextCard,
    ListCard,
    ContactLinksBubbles,
    EmojiCardName,
    ImageBubble,
    PolaroidPicture,
  },
};
</script>

<style lang="scss" scoped>
#home-section {
  flex-direction: row;
  background: var(--background1);
  background: radial-gradient(circle, #58689b 0%, var(--background1) 55%);
  #home-section-left {
    display: flex;
    min-width: 50%;
    max-width: 50%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 0;
    .top {
      display: flex;
      height: 80%;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0;
      .emoji-card-name {
        position: relative;
        top: 0px;
        left: -70px;
      }
      .text-card {
        position: relative;
        top: 35px;
        left: -30px;
      }
    }
    .bottom {
      display: flex;
      height: 20%;
      align-items: flex-end;
    }
  }
  #home-section-right {
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    z-index: 0;
    .image-bubble:nth-child(1) {
      position: relative;
      top: 0px;
      left: 300px;
    }
    .image-bubble:nth-child(2) {
      position: relative;
      top: -35px;
      left: 405px;
    }
    .image-bubble:nth-child(3) {
      position: relative;
      top: 0px;
      left: 440px;
    }
    .image-bubble:nth-child(4) {
      position: relative;
      top: -30px;
      left: 295px;
    }
  }
}
</style>
