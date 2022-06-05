<template lang="en">
  <transition name="scale">
    <div
      v-show="show"
      class="expanded-project"
    >
      <div class="body" :style="{background: project.color}">
        <font-awesome-icon
          :icon="xmark"
          size="lg"
          color="black"
          @click="handleClose"
        />
        <div class="left">
          <div class="text">
            <h3>{{ project.title }}</h3>
            <h4>{{ project.subtitle }}</h4>
            <p class="description">{{ project.description }}</p>
          </div>
          <div class="infos">
            <div class="info" v-for="info in project.infos" :key="info.label">
              <p class="info-label">{{ info.label }}</p>
              <p class="info-text">{{ info.text }}</p>
            </div>
          </div>
        </div>
        <div class="right">
          <img :src="require(`@/assets/images/projects/${project.title}/${project.title}_visuals.png`)" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "ExpandedProject",
  props: {
    show: Boolean,
    project: Object,
    onClose: Function,
  },
  methods: {
    handleClose() {
      this.isOverlayClosed = true;
      this.onClose(-1);
    },
  },
  computed: {
    xmark() {
      return faXmark;
    },
  },
};
</script>

<style lang="scss" scoped>
.expanded-project {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
  .body {
    position: relative;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 75px;
    box-sizing: border-box;
    border-radius: 15px;
    .fa-xmark {
      font-size: 30px;
      align-self: flex-end;
      position: absolute;
      left: calc(100% - 50px);
      top: 20px;
      cursor: pointer;
    }
    .left {
      width: 555px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .text {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        h3 {
          font-family: var(--font-family-bold);
          font-size: 2em;
          color: var(--text);
          margin: 0 0 3px 0;
          text-transform: capitalize;
        }
        h4 {
          font-family: var(--font-family);
          font-weight: normal;
          font-size: 1.5em;
          color: var(--text);
          margin: 0 0 10px 0;
          white-space: pre-line;
        }
        p {
          font-family: var(--font-family);
          font-size: 1em;
          color: var(--text);
          white-space: pre-line;
          text-align: justify;
          margin: 0;
          max-width: 80ch;
        }
      }
      .infos {
        display: flex;
        align-items: flex-start;
        justify-self: flex-end;
        flex-wrap: wrap;
        .info {
          width: 50%;
          margin: 15px 0 0 0;
          p {
            font-family: var(--font-family);
            font-size: 1em;
            color: var(--text);
            margin: 0;
            white-space: pre-line;
          }
          .info-label {
            font-family: var(--font-family-bold);
            text-transform: capitalize;
          }
        }
      }
    }
    .right {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      align-items: center;
      img {
        width: 650px;
      }
    }
  }
}
.scale-enter-from,
.scale-leave-to {
  transform: scale(0);
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}
.scale-enter-to,
.scale-leave-from {
  transform: scale(1);
}
</style>
