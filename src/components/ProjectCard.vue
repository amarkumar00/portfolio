<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <article class="project-card">
    <div class="project-meta">
      <span>{{ project.index }}</span>
      <span>{{ project.type }}</span>
    </div>
    <div class="project-content">
      <p class="project-context">{{ project.context }}</p>
      <h3>{{ project.title }}</h3>
      <div class="project-story">
        <div>
          <span class="mini-label">Challenge</span>
          <p>{{ project.problem }}</p>
        </div>
        <div>
          <span class="mini-label">Approach</span>
          <p>{{ project.solution }}</p>
        </div>
      </div>
      <ul class="feature-list">
        <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
      </ul>
      <div class="project-footer">
        <div class="tech-list" aria-label="Technologies used">
          <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
        </div>
        <div v-if="project.metrics.length" class="metrics" aria-label="Project metrics">
          <span v-for="metric in project.metrics" :key="metric">{{ metric }}</span>
        </div>
        <a
          v-if="project.link"
          class="project-link"
          :href="project.link"
          target="_blank"
          rel="noreferrer"
        >
          View project ↗
        </a>
      </div>
    </div>
  </article>
</template>
