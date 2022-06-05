<template lang="en">
  <div class="emoji-card-name">
    <div class="left">
      <img src="@/assets/images/wave.png" />
    </div>
    <div class="right">
      <p class="card-subtitle">Bonjour, je suis</p>
      <p class="card-title">Guillaume</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmojiCardName",
};
</script>

<style lang="scss" scoped>
.emoji-card-name {
  display: flex;
  justify-content: center;
  flex-direction: row;
  min-width: 375px;
  max-width: 375px;
  min-height: 155px;
  max-height: 155px;
  background-color: white;
  box-shadow: 0 7px #e9ebef;
  border-radius: 24px;
  z-index: 3;
  font-size: 1rem;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    img {
      width: 70px;
      height: 70px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 2;
    p.card-title {
      font-family: var(--font-family-bold);
      font-size: 2.5em;
      color: var(--text);
      margin: 0;
      padding: 8px 0 0 0;
    }
    p.card-subtitle {
      font-family: var(--font-family-medium);
      font-size: 1.125rem;
      color: var(--secondary);
      margin: 0;
    }
  }
}
</style>
