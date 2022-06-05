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
  name: "TextCard",
  props: {
    texts: Array,
  },
};
</script>

<style lang="scss" scoped>
.text-card {
  width: 275px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  font-size: 1rem;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px 25px 10px 25px;
    .card-text {
      font-size: 1em;
      font-family: var(--font-family-medium);
      color: black;
      margin: 0 0 5px 0;
    }
  }
}
</style>
