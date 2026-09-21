<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { portfolio } from './data/portfolio'
import ProjectCard from './components/ProjectCard.vue'
import SectionHeading from './components/SectionHeading.vue'
import SiteHeader from './components/SiteHeader.vue'

const activeSection = ref('about')
let sectionElements = []

function updateActiveSection() {
  const marker = 150
  const current = sectionElements.reduce((active, section) => {
    return section.getBoundingClientRect().top <= marker ? section : active
  }, sectionElements[0])

  if (current) activeSection.value = current.id
}

function scrollTo(id) {
  const target = id === 'top' ? document.body : document.getElementById(id)
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  sectionElements = portfolio.nav
    .map((item) => document.getElementById(item.id))
    .filter(Boolean)
  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', updateActiveSection))
</script>

<template>
  <a class="skip-link" href="#main">Skip to main content</a>
  <SiteHeader :nav="portfolio.nav" :active-section="activeSection" @navigate="scrollTo" />

  <main id="main">
    <section id="top" class="hero" aria-labelledby="hero-title">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="availability"><span></span>{{ portfolio.availability }}</div>
          <p class="hero-eyebrow">{{ portfolio.eyebrow }}</p>
          <h1 id="hero-title">{{ portfolio.headline }}</h1>
          <p class="hero-intro">{{ portfolio.introduction }}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">View projects <span aria-hidden="true">↘</span></a>
            <a class="button button-secondary" :href="portfolio.resume" download>Download résumé <span aria-hidden="true">↓</span></a>
          </div>
          <div class="hero-links" aria-label="Professional links">
            <a :href="portfolio.links.github" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a :href="portfolio.links.linkedin" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a :href="portfolio.links.kaggle" target="_blank" rel="noreferrer">Kaggle ↗</a>
            <a :href="`mailto:${portfolio.email}`">Contact ↗</a>
          </div>
        </div>
        <div class="portrait-column">
          <div class="portrait-frame">
            <img :src="portfolio.photo" alt="Portrait of Amar Kumar" width="590" height="826" />
            <span class="portrait-label">Amar Kumar · Gaya, India</span>
          </div>
          <div class="hero-note">
            <span>Currently</span>
            <p>BS Data Science & Applications<br />IIT Madras</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section about-section" aria-labelledby="about-title">
      <div class="container">
        <SectionHeading
          eyebrow="01 / About"
          title="Engineering discipline, data fluency."
          :intro="portfolio.summary"
        />
        <div class="about-grid">
          <div class="about-quote">
            <p>“I care about building the whole solution—not just the model, endpoint, or dashboard in isolation.”</p>
          </div>
          <div class="interest-panel">
            <p class="mini-label">Focus areas</p>
            <ul>
              <li v-for="interest in portfolio.interests" :key="interest">{{ interest }}</li>
            </ul>
          </div>
        </div>
        <div class="highlight-strip">
          <div v-for="highlight in portfolio.highlights" :key="highlight.label">
            <strong>{{ highlight.number }}</strong>
            <span>{{ highlight.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="section skills-section" aria-labelledby="skills-title">
      <div class="container">
        <SectionHeading
          eyebrow="02 / Capabilities"
          title="A practical toolkit for software and data work."
          intro="Technologies used in verified academic, analytical, and application projects."
        />
        <div class="skills-grid">
          <article v-for="(group, index) in portfolio.skills" :key="group.category" class="skill-group">
            <span class="skill-index">0{{ index + 1 }}</span>
            <h3>{{ group.category }}</h3>
            <ul>
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="projects" class="section projects-section" aria-labelledby="projects-title">
      <div class="container">
        <SectionHeading
          eyebrow="03 / Selected work"
          title="Projects built around real constraints."
          intro="A selection of end-to-end systems, machine learning work, business analysis, and automation."
        />
        <div class="projects-list">
          <ProjectCard v-for="project in portfolio.projects" :key="project.title" :project="project" />
        </div>
      </div>
    </section>

    <section id="work" class="section work-section" aria-labelledby="work-title">
      <div class="container">
        <SectionHeading
          eyebrow="04 / Practical work"
          title="Hands-on work, accurately framed."
          intro="Substantial academic and field projects—without presenting coursework as employment."
        />
        <div class="timeline">
          <article v-for="item in portfolio.practicalWork" :key="item.title" class="timeline-item">
            <span class="timeline-period">{{ item.period }}</span>
            <div>
              <h3>{{ item.title }}</h3>
              <p class="timeline-org">{{ item.organization }}</p>
              <p>{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="education" class="section education-section" aria-labelledby="education-title">
      <div class="container">
        <SectionHeading
          eyebrow="05 / Education"
          title="Learning the foundations, applying them in practice."
        />
        <article class="education-card">
          <div>
            <p class="education-period">{{ portfolio.education.period }}</p>
            <h3>{{ portfolio.education.school }}</h3>
            <p class="degree">{{ portfolio.education.degree }}</p>
          </div>
          <div>
            <p class="mini-label">Relevant coursework</p>
            <ul class="course-list">
              <li v-for="course in portfolio.education.coursework" :key="course">{{ course }}</li>
            </ul>
          </div>
        </article>
        <div class="achievements">
          <p class="mini-label">Verified highlights</p>
          <ul>
            <li v-for="achievement in portfolio.achievements" :key="achievement">{{ achievement }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section" aria-labelledby="contact-title">
      <div class="container contact-grid">
        <div>
          <p class="section-eyebrow">06 / Contact</p>
          <h2 id="contact-title">Let’s build something useful.</h2>
        </div>
        <div class="contact-copy">
          <p>I’m open to software engineering, backend, full-stack, data science, machine learning, and data engineering opportunities.</p>
          <a class="contact-email" :href="`mailto:${portfolio.email}`">{{ portfolio.email }} <span aria-hidden="true">↗</span></a>
          <p class="contact-location">{{ portfolio.location }}</p>
          <div class="contact-links">
            <a :href="portfolio.links.github" target="_blank" rel="noreferrer">GitHub</a>
            <a :href="portfolio.links.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
            <a :href="portfolio.links.kaggle" target="_blank" rel="noreferrer">Kaggle</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <a class="brand footer-brand" href="#top" aria-label="Back to top">AK<span>.</span></a>
      <p>Designed and built with Vue 3.</p>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
</template>
