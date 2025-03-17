<script setup lang="ts">
import TypingAnimation from '@/components/TypingAnimation.vue'
</script>

<template>
    <section class="hero-section-container wrapper">
        <div class="hero-text">
            <h4 class="hi">Hi, I'm Racheal</h4>
            <!-- <h1 class="role">Product Designer</h1> -->
            <TypingAnimation text="Product Designer" class="role text-left text-<2rem>/[<1.3>]"/>
            <p class="role-desc">Dedicated to Crafting Intuitive and User-Centric Design Solutions. Currently, I am based in Port Harcourt City Nigeria</p>
            <button class="cta">View My Works</button>
        </div>
        <div class="hero-img">
            <img src="../assets/images/Rectangle 3.png" alt="racheal's photo" class="img-2">
            <img src="../assets/images/Property 1=Variant2 (1).png" alt="variant 2" class="anim blink">
            <img src="../assets/images/Property 1=Variant4.png" alt="variant 4" class="img">
        </div>
    </section>
</template>

<style lang="css" scoped>
.wrapper {
    padding-block: 1.2rem;
    max-width: 1186px;
    margin-inline: auto;
}
.hero-section-container {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    overflow: hidden;
    margin-top: 3.5rem;
    background: #FFF5F4;
    padding-inline: 1rem;
    /* border: 1px solid red; */
}
.hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 1px solid grey; */
    /* margin-block: 2rem; */
}
.hi {
    color: #d3382f;
    font-size: 1.25rem/*2rem*/;
    font-weight: 600;
    letter-spacing: 1.28px;
}
.role {
    color: #111111;
    font-size: 2rem;/*72px;*/
    font-weight: 700;
}
.role-desc {
    color: #111111;
    font-size: 1rem;
    line-height: 24px;
    /* font-weight: 600; */
    /* letter-spacing: 0.9px; */
    margin-bottom: 15px;
}
.cta {
    display: flex;
      justify-content: center;
      align-items: center;
      background: #C41A26;
      padding: 0.875rem 1.75rem;
      color: #fff;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      width: fit-content;
    margin-bottom: 14px;
}

.hero-img {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    /* border: 1px solid rgb(199, 212, 11); */
    height: auto;
  /* display: block; */
  object-fit: contain;
  aspect-ratio: 1;
  overflow: hidden;
  /* padding: 1rem; */
}
.img, .img-2, .anim {
    width: 100%;
    grid-column: 1 / 9;
    grid-row: 1 / 9;
}

.img-2 {
    position: relative;
    z-index: 2;
    margin: auto;
}

.anim {
    position: relative;
    z-index: 0;
    margin: auto;
}

.blink {
    animation: blink 3s ease-in-out infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

/*min-width for the desktop screens*/
@media(min-width: 765px) {
    .hero-section-container {
        height: 100vh;
        grid-template-columns: 1fr 1fr;
        margin-top: 2.25rem;
    }
    .cta  {
        padding: 11px 30px;
    }
    .role-desc {
    font-size: 1.125rem;
    line-height: 34px;
    font-weight: 600;
    letter-spacing: 0.9px;
}

.hero-img {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    /* border: 1px solid rgb(199, 212, 11); */
    height: auto;
  /* display: block; */
  object-fit: contain;
  aspect-ratio: 1;
  overflow: hidden;
  /* padding: 1rem; */
}
.img, .img-2 {
    width: 100%;
    grid-column: 1 / 9;
    grid-row: 1 / 9;
}

.img-2 {
    position: relative;
    z-index: 1;
    width: 110%;
    height: 110%;
    margin: auto;
}
}
</style>