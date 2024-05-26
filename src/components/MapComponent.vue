<template>
  <div class="map-container">
    <img class="map" src="@/assets/ukraine-map.svg" alt="" />
  </div>
  <p>Status: {{ alertStatus }}</p>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      alertStatus: 'Loading...'
    }
  },
  mounted() {
    this.fetchAlertStatus('Луганська область')
  },
  methods: {
    async fetchAlertStatus(region) {
      try {
        const response = await axios.get(
          `https://api.alerts.in.ua/v1/alerts/region/${region}.json?token=7ab2e442c8d273125b89e61a1dbcc41b16d1a3f0ab2203`
        )
        this.alertStatus = response.data // Adjust this line based on actual response structure
      } catch (error) {
        console.error('Error fetching alert status:', error)
        this.alertStatus = 'Error fetching data'
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

  .map {
    width: 95vw;
    height: auto;
    filter: invert(0%) saturate(40%) brightness(1.2);
  }
}
</style>
