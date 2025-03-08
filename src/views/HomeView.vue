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
      <div class="anim">

      </div>
      <div class="hero-sec-img">
        <!-- <img src="../assets/images/Rectangle 3.png" alt="Racheal Profile Image"> -->
      </div>
      <div class="xpr">
        <span class="xpr-inner">
          <h3>2+</h3>
          <h5>Years Of Experience</h5>
        </span>
      </div>
    </section>
    <section class="client">
      <ul class="client-inner">
        <li>Behance</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>Dribble</li>
        <li>Facebook</li>
      </ul>
    </section>
    <section class="services">
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
          <p>I specialize in creating captivating and user-friendly mobile app designs. With a keen focus on user experience (UX) and user interface (UI) design</p>
        </div>
        <div class="brand">
          <span class="services-icon"></span>
          <h4>Website Design</h4>
          <p>Crafting engaging web eexperiences is at the heart of my expertise. I emplot modern web design principles, ensuring seamless navigation and aesthetic appeal. My process includes responsive design for cross-device compactibility and a strong emphasis on user-centric design.</p>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="about-txt">
        <h3>About Me</h3>
        <h5>I'm Racheal Alogbe, a dedicated and passionate Product Designer hailing from the vibrant city of Port Harcourt, Nigeria</h5>
        <p>My journey in the world of design started with a curiosity to understand how things work and a relentless desire to make them work better. With a background in Petroleum Engineering, I've cultivated a profound appreciation for the intersection of technology, human behaviour and aesthetics. Read More</p>
        <button class="read-more">Read More</button>
      </div>
      <div class="about-svg">

      </div>
    </section>
    <section class="featured">
      <h2>Featured Project</h2>
      <div class="ft-grid">

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
  border: 1px solid white;
}
.xpr-inner {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 7px 77px 31px 77px;

  h3 {
    color: #EF2D1E;
    font-family: "Open Sans";
    font-size: 3rem;
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
.client {
  border: 1px solid red;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.client-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 84px;
  list-style: none;
  padding: 0;
}

.services {
  border: 1px solid red;
  .services-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.3rem;

    h3 {
      font-size: 3.25rem;
      font-family: open sans;
      font-weight: 700;
      line-height: normal;
    }
    span {
      color: #d3382f;
      font-size: 2rem;
      font-weight: 700;
      line-height: normal;
    }
  }
  .services-body {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .services-icon {
    display: flex;
    width: 86px;
    height: 86px;
    border: 1px solid #f98f89;
  }
  .web, .brand, .app {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 2rem;
    background-color: #1e1e1e;
    flex: 1;

    h4 {
      font-family: Open Sans;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
      color: #fff;
    }
  }
}

.about {
  border: 1px solid yellow;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 4.5rem;

  .about-txt {
    /* max-width: 781px; */
    h3 {
    /* margin-top: 7.06rem; */
    color: #fff;
    font-size: 3.25rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: normal;
    font-style: normal;
    font-family: Open Sans;
  }
  h5 {
    color: #FFF;
    font-family: Open Sans;
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
  p {
    margin-bottom: 1.5rem;
    color: #fff;
    font-family: "Source Sans Pro";
    font-weight: 400;
    line-height: 27.756px;
    letter-spacing: 0.63px;
    font-size: 1.125rem;
  }
  .read-more {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #C41A26;
    padding: 0.875rem 2.06rem;
    color: #fff;
    font-size: 1.125rem;
    border: none;
    cursor: pointer;
  }
  }
}

.featured {
  border: 1px solid magenta;

  h2 {
    color: #FFF;
    font-size: 3.25rem;
    font-weight: 700;
    font-family: "Open Sans";
    line-height: normal;
    margin-bottom: 3.25rem;
  }
}
</style>
