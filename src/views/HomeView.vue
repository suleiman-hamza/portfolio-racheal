<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import Services from '@/components/Services.vue';
</script>

<template>
  <main>
    <HeroSection />
    <section class="client">
      <ul class="client-inner">
        <li>Behance</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>Dribble</li>
        <li>Facebook</li>
      </ul>
    </section>
    <Services />
    <!-- <section class="services wrapper">
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
    </section> -->
    <section class="about wrapper">
      <div class="about-txt">
        <h3>About Me</h3>
        <h5>I'm Racheal Alogbe, a dedicated and passionate Product Designer hailing from the vibrant city of Port Harcourt, Nigeria</h5>
        <p>My journey in the world of design started with a curiosity to understand how things work and a relentless desire to make them work better. With a background in Petroleum Engineering, I've cultivated a profound appreciation for the intersection of technology, human behaviour and aesthetics. Read More</p>
        <button class="read-more">Read More</button>
      </div>
      <div class="about-svg">
        <img src="../assets/Subtract.png" alt="racheal png logo" width="200px" height="200px" class="r-img vibrate">
      </div>
    </section>
    <section class="skills">
      <span>
        <hr class="line"></hr>
        <h5>Skills & Tools</h5>
      </span>
      <h2>What I Can Do</h2>
      <div class="ski-tool">
        <div class="cat-skills">
          <span></span>
            <!-- <img src="" alt=""> -->
          <div>
            <h6>Visual design</h6>
            <h6>User Research</h6>
            <h6>Usability Studies</h6>
            <h6>Wireframing</h6>
            <h6>Informaion Architecture</h6>
            <h6>Rapid Prototyping</h6>
            <h6>Collaboration</h6>
            <h6>Problem Solving</h6>
            <h6>Leadership</h6>
            <h6>Communication</h6>
          </div>  
          </div>
        <div class="cat-tools">
          <span></span>
          <div>
            <h6>Figma</h6>
            <h6>Zeplin</h6>
            <h6>Mirror</h6>
            <h6>Figmotion</h6>
            <h6>Maza</h6>
            <h6>Notion</h6>
          </div>
        </div>
      </div>
    </section>
    <section class="qualification">
      <span>
        <hr class="line"></hr>
        <h5>Experience and Education</h5>
      </span>
      <h2>Qualification</h2>
      <section class="ed-xp">
        <div class="xperience">
          <h4>Experience</h4>
          <div class="xp-list">
            <div class="xp-1">
              <span class="xp-work">
                <h5>Product Designer</h5>
                <h6>Muzzlab</h6>
              </span>
              <h6 class="xp-duration">January 2023 - Present</h6>
            </div>
            <div class="xp-1">
              <span class="xp-work">
                <h5>Women Techsters Fellow</h5>
                <h6>WTFP-Tech4Dev</h6>
              </span>
              <h6 class="xp-duration">August 2022 - April 2023</h6>
            </div>
            <div class="xp-1">
              <span class="xp-work">
                <h5>Product Design Intern</h5>
                <h6>Zuri Intership</h6>
              </span>
              <h6 class="xp-duration">May 2022 - August 2022</h6>
            </div>
          </div>
        </div>
        <div class="education">
          <h4>Education</h4>
          <div class="ed-list">
            <div class="ed-1">
              <span class="ed-work">
                <h5>Product Designer</h5>
                <h6>Muzzlab</h6>
              </span>
              <h6 class="ed-duration">January 2023 - Present</h6>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="featured">
      <span>
        <hr class="line">
        <h5>Portfolio</h5>
      </span>
      <h2>Featured Project</h2>
      <div class="ft-grid">
        <a href="#">
          <img src="../assets/images/Group 35861 (2).png" alt="grid image">
        </a>
        <a href="#">
          <img src="../assets/images/Group 35862 (1).png" alt="grid image">
        </a>
        <a href="#">
          <img src="../assets/images/Group 35859 (1).png" alt="grid image">
        </a>
        <a href="#">
          <img src="../assets/images/Group 46.png" alt="grid image">
        </a>
        <a href="#">
          <img src="../assets/images/Group 35863.png" alt="grid image">
        </a>
        <a href="#">
          <img src="../assets/images/Group 35860.png" alt="">
        </a>
      </div>
    </section>
    <section class="customer">
      <div class="yellow-card">
        <h4>
          80+
          <br>Satisfied 
          <br>Customers
        </h4>
      </div>
      <div class="testimony">
        <article>
          <div class="client-title">
            <span class="replace-img">
              <!-- <img src="" alt="bike shop"> -->
            </span>
            <span>
              <h5>Floyd Miles</h5>
              <h6>Vice President, GoPro</h6>
            </span>
          </div>
          <p>"I had the pleasure of working with Rachael, and I'm thrilled with the results. Her keen eye for detail and dedication to understanding our brand's essence resulted in a beautifully redesigned website. Rachael exceeded our expectations.”</p>
        </article>
        <article>
          <div class="client-title">
            <span class="replace-img">
              <!-- <img src="" alt="bike shop"> -->
            </span>
            <span>
              <h5>Floyd Miles</h5>
              <h6>Vice President, GoPro</h6>
            </span>
          </div>
          <p>"I had the pleasure of working with Rachael, and I'm thrilled with the results. Her keen eye for detail and dedication to understanding our brand's essence resulted in a beautifully redesigned website. Rachael exceeded our expectations.”</p>
        </article>
      </div>
    </section>
    <section class="contact">
      <div class="contact-left">
        <h3>Ready to bring your ideas to life?</h3>
        <p>Let's connect and make it happen.</p>
      </div>
      <form class="contact-form">
        <h3>Send Us A Message</h3>
      </form>
    </section>
  </main>
</template>

<style scoped>
.wrapper {
    padding-block: 1.2rem;
    max-width: 1186px;
    margin-inline: auto;
}

.xpr {
  position: absolute;
  right: 0;
  bottom: 0;
  flex-shrink: 0;
  background: #111;
  box-shadow: 0px 4px 200px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid white;
}
.xpr-inner {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 7px 65px 28px 65px;

  h3 {
    color: #EF2D1E;
    font-family: "Open Sans";
    font-size: 2.5rem;
    font-weight: 700;
  }

  h5 {
    color: #FFF;
    font-family: "Source Sans Pro";
    font-size: 1rem;
    font-weight: 600;
    line-height: normal;
    text-align: center;
    text-transform: uppercase;
  }
}
.client {
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
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

.about {
  /* border: 1px solid yellow; */
  display: grid;
  grid-template-columns: 1fr;
  padding-inline: 1rem;
  margin-bottom: 2.5rem;
  gap: 1.5rem;
  /* padding: 4.5rem; */

  .about-txt {
    /* max-width: 781px; */
    h3 {
      /* margin-top: 7.06rem; */
      color: #fff;
      font-size: clamp(1.45rem, -0.607rem + 4.286vw, 3.65rem);
      font-family: open sans;
      font-weight: 700;
      line-height: normal;
      font-family: Open Sans;
      margin-bottom: 24px;
    }
    h5 {
      color: #FFF;
      font-family: Open Sans;
      font-size: 1.25rem;
      margin-bottom: 1.2rem;
    }
    p {
      margin-bottom: 1.5rem;
      color: #fff;
      font-family: "Source Sans Pro";
      font-weight: 400;
      line-height: 27.756px;
      letter-spacing: 0.63px;
      font-size: 1rem;
    }
    .read-more {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #C41A26;
      padding: 0.875rem 1.75rem;
      color: #fff;
      font-size: 1rem;
      border: none;
      cursor: pointer;
    }
  }

  .about-svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-inline: auto;
    border: 1px solid magenta;
  }
}
.r-img {

}

.vibrate {
    animation: vibrate 1.5s alternate-reverse ease-in-out infinite;
}

@keyframes vibrate {
  0% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
  70% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(5px);
  }
  90% {
    transforn: translateX(-5px);
  }
  100% {
    transform: translateX(-10px);
  }
}

.skills {
  border: 1px solid gold;
  padding: 100px 72px;

  > span {
    display: flex;
    align-items: center;
    gap: 1rem;
    .line {
      width: 147px;
      height: 2px;
    }
    h5 {
      color: #3a3a3a;
      font-size: 1.125rem;
      letter-spacing: 0.63px;
      line-height: 27.756px;
      font-weight: 400;
    }
  }

  > h2 {
    font-weight: 700;
    line-height: normal;
    font-size: 3.5rem;
    font-family: "Open Sans";
    margin-bottom: 52px;
  }

  .ski-tool {
    display: flex;
    gap: 42px;
    border: 1px solid red;

    .cat-skills, .cat-tools {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      > span {
        width: 174px;
        height: 174px;
        display: inline-block;
        border: 1px solid hotpink;
      }

      > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 1.5rem;
        h6 {
          padding: 0.5rem;
          font-size: 18px;
          color: #fff;
          font-weight: 400;
          font-family: "Open Sans";
        }
      }
    }
  }
}
.qualification {
  padding: 100px 72px;
  border: 1px solid yellowgreen;

  > span {
    display: flex;
    align-items: center;
    gap: 1rem;

    .line {
      width: 147px;
      height: 2px;
    }
    h5 {
      color: #FFF;
      font-family: "Source Sans Pro";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      /* line-height: 154.2%; 27.756px */
      letter-spacing: 0.63px;
      margin-bottom: 8px;
    }
  }
  h2 {
    color: #FFF;

    /* P/H2 */
    font-family: "Open Sans";
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 52px;
  }

  .ed-xp {
    display: flex;
    justify-content: space-between;
    border: 1px solid mediumslateblue;
  }

  .xperience, .education {
    flex: 1;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    > h4 {
      color: #FFF;
      font-family: "Open Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .xp-list, .ed-list {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .xp-1, .ed-1 {
        display: flex;
        gap: 120px;
        align-items: center;

        .xp-work, .ed-work {
          h5 {
            color: #FFF;
            font-family: "Open Sans";
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }

          h6 {
            color: #FFF;

            /* Body P/MSB */
            font-family: "Source Sans Pro";
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
        }

        .xp-duration, .ed-duration {
          color: #FFF;

          /* Body P/LR */
          font-family: "Source Sans Pro";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }

      }
    }
  }

}

.featured {
  padding: 100px 72px;
  border: 1px solid magenta;

  h2 {
    color: #FFF;
    font-size: 3.25rem;
    font-weight: 700;
    font-family: "Open Sans";
    line-height: normal;
    margin-bottom: 3.25rem;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 1rem;

    .line {
      width: 147px;
      height: 2px;
    }
    h5 {
      color: #FFF;
      font-family: "Source Sans Pro";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      /* line-height: 154.2%; 27.756px */
      letter-spacing: 0.63px;
      margin-bottom: 8px;
    }
  }

  .ft-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 24px;

    a {
      display: block;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
      aspect-ratio: 1;
    }
  }
}

.customer {
  display: grid;
  grid-template-columns: 1fr 2fr;

  .yellow-card {
    background-color: #FFE517;
    padding: 221px 52px 57px 111px;
    position: relative;

    h4 {
      color: #000;
      /* width: 289px; */

      /* P/H2 */
      font-family: "Open Sans";
      font-size: 52px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .yellow-card::after {
    content: url('../assets/images/SuperToroid-Black-Matte.png');
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .testimony {
    padding: 35px;
    background-color: #F9F9F9;
    display: flex;
    gap: 29px;

    article {
      border-radius: 20px;
      background-color: #FFF;
      padding: 42px 24px;

      .client-title {
        display: flex;
        align-items: flex-start;
        gap: 26px;
        margin-bottom: 25px;

        h5 {
          color: #1E1E1E;
          font-feature-settings: 'liga' off;
          font-family: Inter;
          font-size: 23.675px;
          font-style: normal;
          font-weight: 700;
          line-height: 36.828px; /* 155.556% */
        }

        h6 {
          color: #3A3A3A;
          font-feature-settings: 'liga' off;
          font-family: Inter;
          font-size: 18.414px;
          font-style: normal;
          font-weight: 400;
          line-height: 26.306px; /* 142.857% */
        }
      }

      .replace-img {
        display: inline-block;
        width: 104px;
        height: 104px;
        border: 1px solid #1e1e1e;
      }

      p {
        color: #3A3A3A;
        font-feature-settings: 'liga' off;
        font-family: "Source Sans Pro";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 26.828px; /* 167.399% */
      }
    }
  }
}

.contact {
  background-color: #191919;

  .contact-left {

    h3 {
      color: #FFF;

      /* P/H2 */
      font-family: "Open Sans";
      font-size: 52px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
          }

    p {
      color: #FFF;
      font-family: "Source Sans Pro";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 154.2%; /* 27.756px */
      letter-spacing: 0.9px;
    }
  }

  .contact-form {
    background-color: #0E0D0D;

    h3 {
      color: #FFF;
      /* P/H3 */
      font-family: "Open Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
}



@media (max-width: 788px) {
  .client-inner {
    flex-wrap: wrap;
    gap: 2rem;
  }
}

@media (min-width: 788px) {
  .about {
    display: grid;
    grid-template-columns: 2fr 1fr;

    .about-txt h5 {
      font-size: 1.5rem;
    }

    .about-txt p {
      font-size: 1.125rem;
    }
  }
}

/* responsive stuff for mobile*/
/* @media (max-width: 788px) {
  .hero-section {
    padding: 1rem;
    height: 100vh;
  }

  .xpr {
    position: static;
    width: 100%;
    height: auto;
    margin-top: 1rem;
  }

  .xpr-inner {
    margin: 0;
  }

  .about {
    grid-template-columns: 1fr;
    padding: 2rem;
  }

  .about-txt {
    h3 {
      font-size: 2.5rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    p {
      font-size: 1rem;
    }
    .read-more {
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
    }
  }

  .client-inner {
    flex-direction: column;
    gap: 1rem;
  }
} */

/* @media (max-width: 1018px) {

.hero-sec-intro {

}  
.hero-sec-img img {
  width: 500px;
}

.hero-sec-img {
  bottom: 0;
  right: 0;
  height: 81vh;
}
} */

/* @media (max-width: 978px) {
.hero-sec-img img {
  width: 440px;
}

.hero-sec-img {
  bottom: 0;
  right: 0;
  height: 69vh;
}
} */
</style>