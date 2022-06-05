<template lang="en">
  <div id="scroll-dots">
    <ul>
      <li v-for="page in pages" :key="page.id">
        <div 
          @click="onClick(page.id)"
          v-bind:class="{ current: currentPage == page.id }"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ScrollDots",
  props: {
    pages: Array,
    onClick: Function,
    currentPage: String,
  },
};
</script>

<style lang="scss" scoped>
#scroll-dots {
  height: 100px;
  position: fixed;
  left: calc(100% - 58px);
  top: calc(50% - 75px);
  padding-right: 50px;
  display: flex;
  z-index: 5;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    div {
      cursor: pointer;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background-color: #95979b;
    }
    div.current {
      background-color: var(--primary);
    }
  }
}
</style>
