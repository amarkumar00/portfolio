<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  intro: { type: String, default: '' },
})
</script>

<template>
  <div class="section-heading">
    <p class="section-eyebrow">{{ eyebrow }}</p>
    <div>
      <h2>{{ title }}</h2>
      <p v-if="intro">{{ intro }}</p>
    </div>
  </div>
</template>
