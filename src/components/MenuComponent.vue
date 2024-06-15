import SwitchToggleComponent from './SwitchToggleComponent.vue';
<template>
  <div class="menu-container">
    <p class="selected-region">Selected region:</p>
    <div class="region-menu">
      <p class="region-name">KYIV OBLAST</p>
      <p class="change-region">Change region</p>
    </div>
    <div class="notify-option">
      <SwitchToggleComponent />
      <div class="option-text">
        <p class="option-title">Enable notifications</p>
        <p class="option-description">Notifies about air raid alerts in selected region.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  line-height: 30px;
  padding: 50px;
  position: fixed;
  bottom: 0;
  
  .selected-region {
    opacity: 0.5;
  }

  .region-menu {
    display: flex;
    align-items: center;
    gap: 10px;
    .region-name {
      font-size: 34px;
      font-weight: 700;
    }

    .change-region {
      opacity: 0.5;
      cursor: pointer;
      transition: 0.1s all;

      &:hover {
        opacity: 1;
      }
    }
  }

  .notify-option {
    display: flex;
    align-items: center;
    margin: 10px 0 0 0;
    gap: 10px;

    .option-text {
      display: flex;
      flex-direction: column;
      line-height: 25px;
      .option-title {
        font-size: 22px;
      }
      .option-description {
        opacity: 0.5;
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
  }
}
</script>
