<template>
  <section
    class="about-question"
    aria-labelledby="about-question-title"
  >
    <div class="container about-question__inner">
      <div class="about-question__copy">
        <p class="about-question__eyebrow">
          The question that changed everything
        </p>

        <h2 id="about-question-title">
          What if learning didn’t have to
          <em>wait for the internet?</em>
        </h2>

        <p>
          That question became the beginning of Impact Bridge.
        </p>
      </div>

      <figure class="about-question__media">
        <img
          src="/images/model/hub-kit.png"
          alt="The offline learning hub kit: a microcomputer, storage, a teacher laptop, and a projector."
          width="960"
          height="640"
        >
      </figure>
    </div>
  </section>
</template>

<style scoped>
.about-question {
  background: var(--color-navy-950);

  color: var(--color-white);
}

.about-question__inner {
  display: grid;

  grid-template-columns: 1.1fr 0.9fr;

  gap: 40px;

  align-items: center;

  padding-block: 56px;
}

.about-question__eyebrow {
  color: var(--color-blue-500);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.about-question__copy h2 {
  max-width: 16ch;

  margin-top: 14px;

  color: var(--color-white);

  font-size: clamp(2.1rem, 3.6vw, 3.15rem);

  line-height: 1.05;
}

.about-question__copy em {
  color: var(--color-blue-500);

  font-style: italic;
  font-weight: 450;
}

.about-question__copy p {
  margin-top: 18px;

  color: rgb(255 255 255 / 0.78);

  font-size: var(--text-lede);
}

.about-question__media {
  overflow: hidden;

  border-radius: var(--radius-lg);
}

.about-question__media img {
  display: block;

  width: 100%;
  height: 280px;

  object-fit: cover;

  object-position: center 60%;
}

@media (max-width: 900px) {
  .about-question__inner {
    grid-template-columns: 1fr;

    padding-block: 48px;
  }

  .about-question__copy h2 {
    max-width: none;
  }
}
</style>
