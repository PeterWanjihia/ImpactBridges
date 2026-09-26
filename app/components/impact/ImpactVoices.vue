<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section
    class="impact-voices"
    aria-label="Voices from the pilot"
  >
    <div class="container impact-voices__grid">
      <article class="voice voice--learner">
        <div>
          <p class="voice__kicker">
            Behind every number is a learner.
          </p>

          <blockquote>
            <p>“I feel like I can now finish my schooling.”</p>
          </blockquote>

          <p class="voice__detail">
            Digital lessons help me understand better because I can see
            and interact with the learning.
          </p>

          <p class="voice__name">
            Learner, Grade 6
          </p>

          <NuxtLink to="/stories/namulava">
            Read the full story

            <ArrowRight
              :size="14"
              :stroke-width="2"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>

        <img
          src="/images/home/evidence-student.png"
          alt="A learner writing at her desk during class."
          width="640"
          height="720"
        >
      </article>

      <article class="voice voice--teacher">
        <div>
          <p class="voice__kicker">
            Teachers are leading the change.
          </p>

          <blockquote>
            <p>
              “The hub has changed the way I teach. Lessons are more
              engaging, students participate more, and I now plan with
              better resources.”
            </p>
          </blockquote>

          <p class="voice__name">
            Champion Teacher
          </p>
        </div>

        <img
          src="/images/model/teacher-champion.png"
          alt="A champion teacher leading her class with a tablet."
          width="640"
          height="720"
        >
      </article>
    </div>
  </section>
</template>

<style scoped>
.impact-voices {
  padding: 12px 0 36px;

  background: var(--color-white);
}

.impact-voices__grid {
  display: grid;

  grid-template-columns: 1.05fr 0.95fr;

  gap: 16px;
}

.voice {
  display: grid;

  grid-template-columns: 1fr 180px;

  gap: 16px;

  align-items: center;

  padding: 22px;

  border-radius: var(--radius-lg);
}

.voice--learner {
  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);
}

.voice--teacher {
  background: #eef3fb;
}

.voice__kicker {
  color: var(--color-text-primary);

  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 700;
}

.voice blockquote p {
  margin-top: 10px;

  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: clamp(1.35rem, 2vw, 1.7rem);
  font-style: italic;
  font-weight: 450;

  line-height: 1.25;
}

.voice__detail {
  margin-top: 10px;

  font-size: var(--text-small);

  line-height: 1.5;
}

.voice__name {
  margin-top: 12px;

  color: var(--color-text-secondary);

  font-size: var(--text-small);
  font-weight: 650;
}

.voice a {
  margin-top: 12px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.voice a:hover {
  text-decoration: underline;
}

.voice img {
  width: 100%;
  height: 220px;

  object-fit: cover;

  border-radius: var(--radius-md);
}

@media (max-width: 900px) {
  .impact-voices__grid,
  .voice {
    grid-template-columns: 1fr;
  }

  .voice img {
    height: 240px;

    order: -1;
  }
}
</style>
