<template>
  <div class="map-container">
    <object
      type="image/svg+xml"
      data="/src/assets/ukraine-map.svg"
      ref="map"
      class="map"
      onload="fetchAndUpdateMap()"
    ></object>
  </div>
</template>

<script>
export default {
  mounted() {
    this.fetchAndUpdateMap()
    this.intervalId = setInterval(this.fetchAndUpdateMap, 10000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
    clearInterval(this.logIntervalId)
  },
  methods: {
    fetchAndUpdateMap() {
      fetch('http://localhost:3000/api/alerts')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText)
          }
          return response.json()
        })
        .then((data) => {
          this.updateTimeLog();
          this.highlightRegions(data)
        })
        .catch((error) => console.error('Error:', error))
    },
    highlightRegions(data) {
      const map = this.$refs.map.contentDocument
      if (!map) {
        console.error('SVG map not found.')
        return
      }

      const paths = map.getElementsByTagName('path')
      for (let path of paths) {
        path.style.fill = ''
      }

      data.forEach((alert) => {
        const regionId = alert.regionId
        const path = map.getElementById(regionId)
        if (path) {
          path.style.fill = '#ff7a7a'
        }
      })
    },
    updateTimeLog() {
      const updatedElement = document.querySelector('.updated .updated-text');
      const currentTime = new Date().toLocaleString();
      if (updatedElement) {
        updatedElement.textContent = `Updated: ${currentTime}`;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.map-container {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  max-width: 100%;
  max-height: 90%;

  // Dark theme
  .map {
    width: 95vw;
    height: auto;
    filter: invert(100%) saturate(40%);
  }

  // Light theme
  // .map {
  //   width: 95vw;
  //   height: auto;
  //   filter: invert(0%) saturate(40%) brightness(1.2);
  // }
}
</style>
