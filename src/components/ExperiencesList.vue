<template lang="en">
  <div class="experience-list">
    <ul>
      <li v-for="year in experiences" :key="year.year">
        <div class="row-year">
          <div class="column left">
            <p class="exp-year">{{year.year}}</p>
          </div>
          <div class="column right">
            <ul>
              <li v-for="exp in year.yearExperiences" :key="exp.title">
                <div class="row-exp">
                  <h3 class="exp-title">{{exp.title}}</h3>
                  <p class="exp-place">{{exp.place}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ExperiencesList",
  props: {
    experiences: Array,
  },
};
</script>

<style lang="scss" scoped>
.row-year {
  display: flex;
  flex-direction: row;
  margin: 0 0 25px 0;
  .row-exp {
    margin: 0 0 25px 0;
  }
  .column {
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
  .column.left {
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .column.right {
    flex: 5;
    justify-content: flex-start;
    align-items: flex-start;
  }
  p,
  h3 {
    font-family: var(--font-family-bold);
    color: var(--text);
  }
  .exp-year {
    color: var(--primary);
    font-size: 14px;
  }
  .exp-title {
    font-size: 20px;
  }
  .exp-place {
    font-family: var(--font-family-medium);
    text-transform: uppercase;
    font-size: 14px;
    color: var(--secondary);
  }
}
</style>
