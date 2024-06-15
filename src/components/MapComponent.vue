<template>
  <div class="map-container">
    <img class="map" src="@/assets/ukraine-map.svg" alt="" />
  </div>
  <p>Status: {{ status }}</p>
</template>

<script>
import axios from 'axios'

export default {
  name: 'alerts',
  data(){
    return {
      alerts: [],
      status: 'Loading...'
    }
  },
  mounted(){
    this.getAlerts();
    console.log('Successfully mounted')
  },
  methods: {
    getAlerts(){
      const apiKey = 'a66f7c78:79610a7e12aa146b8c1b98cbdb8843c2';
      axios.get('https://api.ukrainealarm.com/api/v3/alerts', {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      }).then(res => {
        console.log(res)
        this.alerts = res.data;
        this.status = 'Data loaded successfully';
      }).catch(error => {
        console.error(error);
        this.status = 'Error loading data';
      });
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
