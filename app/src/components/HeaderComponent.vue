<template>
  <header>
    <span class="logo">
      <img class="icon" src="/src/assets/icons/ua-flag.png" alt="" />AirSignal
      <span class="updated">
        <span class="updated-text"></span>
      </span>
    </span>
    <span class="nav-buttons">
      <a href="https://github.com/vitkarino" target="”_blank”"
        ><button><img class="icon" src="/src/assets/icons/github.svg" alt="" /></button
      ></a>
      <button @click="changeLanguage">
        <img class="icon" :src="currentLanguage.src" alt="" />
      </button>
    </span>
  </header>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const languageVariable = ref(0)

    const languages = ref([
      { language: 'English', src: '/src/assets/icons/us-flag.png' },
      { language: 'Ukrainian', src: '/src/assets/icons/ua-flag.png' },
      { language: 'Polish', src: '/src/assets/icons/pl-flag.png' }
    ])

    const changeLanguage = () => {
      languageVariable.value = (languageVariable.value + 1) % languages.value.length
      console.log(`Selected language: ${currentLanguage.value.language}`)
    }

    const currentLanguage = computed(() => languages.value[languageVariable.value])

    return { languages, changeLanguage, currentLanguage }
  }
}
</script>

//Dark theme
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
}
.logo {
  font-size: 24px;
  display: flex;
  align-items: center;
  font-weight: bolder;
  gap: 5px;
  color: rgba(255, 255, 255, 0.8);
  z-index: 4;
  cursor: default;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    padding: 30px;
    left: 0;
    right: 0;
  }

  &:hover .updated {
    opacity: 1;
    transform: translateX(5px);
  }

  .updated {
    opacity: 0;
    font-size: 15px;
    transition: all 0.2s;
    transform: translateX(0px);
    font-weight: 400;
  }
}

.nav-buttons {
  display: flex;
  gap: 10px;
  z-index: 3;

  button {
    background-color: rgba($color: white, $alpha: 0.05);
    display: flex;
    backdrop-filter: blur(10px);

    &:hover {
      background-color: rgba($color: white, $alpha: 0.1);
      cursor: pointer;
    }

    &:active {
      background-color: rgba($color: white, $alpha: 0.2);
    }
  }
}
</style>

// Light theme
<!-- <style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
}
.logo {
  font-size: 24px;
  display: flex;
  align-items: center;
  font-weight: bolder;
  gap: 5px;
}

.nav-buttons {
  display: flex;
  gap: 10px;
  z-index: 3;

  button {
    background-color: rgba($color: white, $alpha: 0.4);
    display: flex;

    &:hover {
      background-color: rgba($color: white, $alpha: 0.7);
      cursor: pointer;
    }

    &:active {
      background-color: rgba($color: white, $alpha: 1);
    }
  }
}
</style> -->
