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
  width: 430px;
  height: 130px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: v-bind(color);
  font-size: 1rem;
  img {
    width: 75px;
    height: 75px;
    padding: 0 30px 0 30px;
  }
  p,
  a {
    font-family: var(--font-family-medium);
    font-size: 1.125em;
    margin: 0;
    color: var(--text);
  }
  a {
    color: #1c75b3;
  }
}
.emoji-card-small:hover {
  transform: scale(1.1);
}
</style>
