<template>
  <div class="map-container">
    <img class="map" src="/src/assets/ukraine-map.svg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.map-container {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  max-width: 100%;
  max-height: 100%;

  .map {
    filter: invert(0%) saturate(40%) brightness(1.2);
  }
}
</style>
