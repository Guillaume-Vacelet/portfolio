<template>
  <div id="app-navbar">
    <nav>
      <ul>
        <li v-for="page in pages" :key="page.id">
          <a
            @click="onClick(page.id)"
            v-bind:class="{ current: currentPage == page.id }"
          >
            {{ page.label }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
  props: {
    pages: Array,
    onClick: Function,
    currentPage: Number,
  },
};
</script>

<style lang="scss" scoped>
#app-navbar {
  height: 50px;
  width: 100%;
  position: -webkit-sticky; /* Safari */
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0 32px 0;
  z-index: 5;
  font-size: 1rem;
  ul {
    overflow: hidden;
    li {
      display: inline-block;
      padding: 16px;
      a {
        cursor: pointer;
        text-decoration: none;
        font-family: var(--font-family-medium);
        font-size: 1em;
        color: var(--secondary);
      }
      a.current {
        color: var(--primary);
      }
    }
  }
}
</style>
