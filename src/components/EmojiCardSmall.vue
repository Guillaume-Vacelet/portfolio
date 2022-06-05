<template lang="en">
  <div class="emoji-card-small">
    <img :src="require(`@/assets/images/${imgSrc}`)" />
    <a v-if="isLink" :href="this.link" target="_blank">{{text}}</a>
    <p v-else>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "EmojiCardSmall",
  props: {
    imgSrc: String,
    text: String,
    color: String,
    isLink: Boolean,
    link: String,
  },
};
</script>

<style lang="scss" scoped>
.emoji-card-small {
  display: flex;
  width: 400px;
  height: 100px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: v-bind(color);
  img {
    width: 55px;
    height: 55px;
    padding: 0 20px 0 30px;
  }
  p {
    font-family: var(--font-family-bold);
    font-size: 18px;
    margin: 0;
    color: var(--text);
  }
  a {
    font-family: var(--font-family-bold);
    font-size: 18px;
    margin: 0;
    color: #1c75b3;
  }
}
.emoji-card-small:hover {
  transform: scale(1.1);
}
</style>
