<template>
  <div class="menu-container">
    <p class="selected-region">Selected region</p>
    <div class="region-menu">
      <p class="region-name">Kyiv Region</p>
      <p class="change-region">Select another</p>
    </div>
    <div class="notify-option" @click="toggleNotification">
      <SwitchToggleComponent ref="switchToggleComponent" />
      <div class="option-text">
        <p class="option-title">Enable notifications</p>
        <p class="option-description">Notifies about active alert in selected region.</p>
      </div>
    </div>
  </div>
</template>

//Dark theme
<style lang="scss" scoped>
.menu-container {
  line-height: 30px;
  padding: 50px;
  position: fixed;
  border-radius: 25px;
  bottom: 0;
  color: rgba(255, 255, 255, 0.8);
  z-index: 1;
  cursor: pointer;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   bottom: 0;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   filter: blur(50px);
  //   backdrop-filter: blur(10px);
  //   z-index: -1;
  // }

  .selected-region {
    opacity: 0.5;

    &::selection {
      background: rgba(0, 0, 0, 0); /* Fully transparent */
    }
  }

  .region-menu {
    display: flex;
    align-items: center;
    gap: 10px;

    .region-name {
      font-size: 34px;
      font-weight: 700;
      &::selection {
        background: rgba(0, 0, 0, 0); /* Fully transparent */
      }
    }

    .change-region {
      opacity: 0.5;
      cursor: pointer;
      transition: 0.2s all;

      &::selection {
        background: rgba(0, 0, 0, 0); /* Fully transparent */
      }

      &:hover {
        opacity: 0.7;
      }

      &:active {
        opacity: 1;
      }
    }
  }

  .notify-option {
    display: flex;
    align-items: center;
    margin: 15px 0 0 0;
    gap: 10px;
    padding: 10px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.05);
    transition: 0.2s all;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .option-text {
      display: flex;
      flex-direction: column;
      line-height: 25px;
      .option-title {
        font-size: 22px;
        &::selection {
          background: rgba(0, 0, 0, 0); /* Fully transparent */
        }
      }
      .option-description {
        opacity: 0.5;

        &::selection {
          background: rgba(0, 0, 0, 0); /* Fully transparent */
        }
      }
    }
  }
}
</style>

<script>
import SwitchToggleComponent from './SwitchToggleComponent.vue'

export default {
  name: 'App',
  components: {
    SwitchToggleComponent
  },
  methods: {
    toggleNotification() {
      this.$refs.switchToggleComponent.toggle()
    }
  }
}
</script>
