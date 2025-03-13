<script setup lang="ts">

</script>

<template>
    <section class="services wrapper">
      <div class="services-head">
        <h3>The Services I Provide</h3>
        <span>30+ Projects Completed</span>
      </div> 
      <div class="services-body">
        <div class="web">
          <span class="services-icon"></span>
          <h4>Website Design</h4>
          <p>Crafting engaging web eexperiences is at the heart of my expertise. I emplot modern web design principles, ensuring seamless navigation and aesthetic appeal. My process includes responsive design for cross-device compactibility and a strong emphasis on user-centric design.</p>
        </div>
        <div class="app">
          <span class="services-icon"></span>
          <h4>App Design</h4>
          <p>I specialize in creating captivating and user-friendly mobile app designs. With a keen focus on user experience (UX) and user interface (UI) design, my approach involves in-depth user research, wireframing, and rapid prototyping to bring innovative app concepts to life.</p>
        </div>
        <div class="brand">
          <span class="services-icon"></span>
          <h4>Branding</h4>
          <p>Elevating your brand's identity is my passion. From logo design to a comprehensive brand strategy, i work collaboratively to capture the essence of your brand and create a lasting impact. My approach is founded on market research, audience analysis, and a deep understanding of your unique story.</p>
        </div>
      </div>
    </section>
</template>

<style scoped>
.services {
    /* border: 1px solid magenta; */
    margin-bottom: 2.5rem;
}
.services-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
}
.services-head > h3 {
    color: #fff;
    font-size: clamp(1.45rem, -0.607rem + 4.286vw, 3.65rem);
    font-family: open sans;
    font-weight: 700;
    line-height: normal;
}
.services-head > span {
    color: #d3382f;
      font-size: 1rem;
      font-weight: 700;
      line-height: normal;
}
.app, .web, .brand {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 1rem;
    background-color: #1e1e1e;
    min-width: 300px;
    max-width: 400px;
    margin-inline: auto;
}
.services-body {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-inline: auto;
}

@media (min-width: 600px) {
    .services-body {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}
</style>