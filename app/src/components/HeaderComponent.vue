<template>
  <header>
    <span class="logo"
      ><img class="icon" src="/src/assets/icons/ua-flag.png" alt="" />Alertify</span
    >
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
  font-weight: 800;
  gap: 5px;
  pointer-events: none;
}

.nav-buttons {
  display: flex;
  gap: 10px;

  button {
    background-color: rgba($color: white, $alpha: 0.4);
    display: flex;

    &:hover {
      background-color: rgba($color: white, $alpha: 0.6);
    }

    &:active {
      background-color: rgba($color: white, $alpha: 1);
    }
  }
}
</style>
