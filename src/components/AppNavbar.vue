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
    currentPage: String,
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
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    li {
      display: inline-block;
      a {
        padding: 16px;
        text-decoration: none;
        font-weight: bold;
        color: #95979b;
      }
      a.current {
        color: var(--primary);
      }
    }
  }
}
</style>
