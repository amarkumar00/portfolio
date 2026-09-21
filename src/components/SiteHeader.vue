<script setup>
import { ref } from 'vue'

defineProps({
  nav: { type: Array, required: true },
  activeSection: { type: String, default: '' },
})

const emit = defineEmits(['navigate'])
const menuOpen = ref(false)

function navigate(id) {
  menuOpen.value = false
  emit('navigate', id)
}
</script>

<template>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="#top" aria-label="Amar Kumar — home" @click="navigate('top')">AK<span>.</span></a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a
          v-for="item in nav"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ active: activeSection === item.id }"
          @click="navigate(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>
      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span>
      </button>
    </div>
    <nav v-if="menuOpen" id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
      <a
        v-for="item in nav"
        :key="item.id"
        :href="`#${item.id}`"
        :class="{ active: activeSection === item.id }"
        @click="navigate(item.id)"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
