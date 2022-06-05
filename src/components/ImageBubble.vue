<template lang="en">
  <div class="image-bubble">
    <div class="top" v-bind:class="{shadow: shadow}">
      <img :src="require(`@/assets/images/${imgName}.png`)" />
    </div>
    <div class="bottom">
      <p>{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBubble",
  props: {
    imgName: String,
    title: String,
    size: String,
    color: String,
    shadow: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.image-bubble {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .top {
    height: v-bind(size);
    width: v-bind(size);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    img {
      width: 60%;
    }
  }
  .bottom {
    p {
      font-family: var(--font-family-bold);
      font-size: 14px;
      color: var(--text);
      margin: 10px 0 0 0;
    }
  }
  // .shadow {
  //   box-shadow: 0px 7px #e9ebef;
  // }
}
</style>
