<template lang="en">
  <div class="polaroid-picture">
    <div class="border header">
      <div class="avatar" />
      <div class="titles">
        <p class="name">guillaume.vacelet</p>
        <p class="localisation">Seoul</p>
      </div>
    </div>
    <div class="image-container">
      <img :src="require(`@/assets/images/${image}.jpeg`)">
    </div>
    <div class="border footer">
      <font-awesome-icon 
        :icon="heartRegular"
        size="xl"
        color="black"
      />
    </div>
  </div>
</template>

<script>
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

export default {
  name: "PolaroidPicture",
  props: {
    image: String,
  },
  data() {
    return {
      like: false,
    };
  },
  computed: {
    heartSolid() {
      return faHeartSolid;
    },
    heartRegular() {
      return faHeartRegular;
    },
  },
};
</script>

<style lang="scss" scoped>
.polaroid-picture {
  width: 550px;
  height: 666px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  position: absolute;
  left: calc(50vw - 275px);
  top: calc(100vh - 650px - var(--section-padding));
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 1rem;
  .border {
    height: 58px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .header {
    box-sizing: border-box;
    padding: 0 0 0 15px;
    .avatar {
      height: 40px;
      width: 40px;
      border-radius: 100%;
      background: var(--primary);
    }
    .titles {
      display: flex;
      flex-direction: column;
      margin: 0 0 0 15px;
      p.name {
        font-family: var(--font-family-medium);
        font-size: 1em;
        color: var(--text);
        margin: 0;
      }
      p.localisation {
        font-family: var(--font-family-medium);
        font-size: 0.875em;
        color: var(--secondary);
        margin: 0;
      }
    }
  }
  .image-container {
    width: 550px;
    height: 550px;
    object-fit: cover;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .footer {
    padding: 0 0 0 45px;
  }
}
</style>
