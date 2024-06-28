<template>
  <div id="app">
    <label class="switch">
      <input type="checkbox" v-model="checkbox" />
      <div class="slider round"></div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(151, 151, 151, 0.4);
    transition: 0.2s;

    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.2s;
    }

    &.round {
      border-radius: 34px;
    }

    &.round:before {
      border-radius: 50%;
    }
  }

  input:checked + .slider {
    background-color: rgba(114, 196, 114, 0.7);
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }
}
</style>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checkbox = ref(false)

    const toggleCheckbox = () => {
      checkbox.value = !checkbox.value
    }

    return { toggleCheckbox, checkbox }
  },
  methods: {
    toggle() {
      this.checkbox = !this.checkbox
    }
  }
}
</script>
