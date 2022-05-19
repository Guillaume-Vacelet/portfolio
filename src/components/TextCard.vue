<template lang="en">
  <div class="text-card">
    <ul>
      <li v-for="text in texts" :key="text">
        <p class="card-text">{{ text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EmojiCard",
  props: {
    texts: Array,
  },
};
</script>

<style lang="scss" scoped>
.text-card {
  min-width: 225px;
  min-height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px 25px 10px 25px;
    .card-text {
      font-size: 14px;
      font-family: var(--font-family-medium);
      color: black;
      margin: 0 0 5px 0;
    }
  }
}
</style>
