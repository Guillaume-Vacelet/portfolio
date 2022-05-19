<template lang="en">
  <div class="contact-card">
    <h3 class="title">{{ title }}</h3>
    <ul>
      <li v-for="el in data" :key="el.img">
        <EmojiCardSmall
          :img-src="el.img"
          :text="el.text"
          :color="el.color"
          :isLink="el.isLink"
          :link="el.link"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import EmojiCardSmall from "@/components/EmojiCardSmall";

export default {
  name: "ListCard",
  components: {
    EmojiCardSmall,
  },
  props: {
    title: String,
    data: Array,
  },
};
</script>

<style lang="scss" scoped>
.contact-card {
  width: 440px;
  height: 420px;
  padding: 20px 20px 0 20px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  border-radius: 25px;
  background: white;
  .title {
    color: var(--text);
    font-size: 25px;
    font-family: var(--font-family-bold);
    margin: 0 0 15px 10px;
  }
}
</style>
