<script setup lang="ts">
</script>

<template>
  <main>
    <section class="hero-section">
      <div class="hero-sec-intro">
        <h2 class="hero-sec-h2">Hi, I’m Rachael</h2>
        <h1>Product Designer</h1>
        <p class="hero-what-i-do">Dedicated to Crafting Intuitive and User-Centric Design Solutions. Currently, I am based in Port Harcourt City Nigeria</p>
        <button class="here-view-work">View My Work</button>
      </div>
      <div class="hero-sec-img">
        <img src="../assets/images/Rectangle 3.png" alt="Racheal Profile Image">
      </div>
      <div class="xpr">
        <span class="xpr-inner">
          <h3>2+</h3>
          <h5>Years Of Experience</h5>
        </span>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-section {
  display: flex;
  height: 100vh;
  align-items: center;
  position: relative;
  border: 1px solid red;
}
.hero-sec-h2 {
  color: #EF2D1E;
  font-family: "Source Sans Pro";
  font-size: 2rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.28px;
}

h1 {
  color: #FFF;
  font-family: "Open Sans";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.hero-what-i-do {
  color: #FFF;
  font-family: "Source Sans Pro";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 194.2%; /* 34.956px */
  letter-spacing: 0.9px;
}
.hero-sec-intro {
  max-width: 640px;
}
.here-view-work {
  background: #C41A26;
  color: #fff;

  /* Body P/LB */
  font-family: "Source Sans Pro";
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  display: flex;
  width: 177px;
  height: 58px;
  padding: 14px 33px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.hero-sec-img {
  overflow: hidden;
  display: block;
}
.xpr {
  position: absolute;
  bottom: 0;
  width: 333px;
  height: 152px;
  flex-shrink: 0;
  background: #111;
  box-shadow: 0px 4px 200px 0px rgba(0, 0, 0, 0.25);
}
.xpr-inner {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 7px 77px 32px 77px;

  h3 {
    color: #EF2D1E;
    font-family: "Open Sans";
    font-size: 64px;
    font-weight: 700;
  }

  h5 {
    color: #FFF;
    font-family: "Source Sans Pro";
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
