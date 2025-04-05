<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import Services from '@/components/Services.vue';
import Contact from '@/components/Contact.vue'
import Skills from '@/components/Skills.vue';
import Feature from '@/components/Feature.vue';
import CarouselTest from '@/components/CarouselTest.vue';
import { useIntersectionObserver } from '@vueuse/core';
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const about = ref<HTMLElement | null>(null);
const about2 = ref<HTMLElement | null>(null);
const isabout = ref(false);

const addIntersectionObserver = (
    element: Ref<HTMLElement | null>, animationClass: string, threshold: number
) => {
    useIntersectionObserver(
        element,
        ([entry], observer) => {
            console.log("IntersectionObserver triggered:", entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.disconnect();
            } else {
                entry.target.classList.remove(animationClass);
            }
        },
        {
            threshold
        }
    )
}

onMounted(()=> {
    addIntersectionObserver(about, "is-aboutref", 0.4);
    addIntersectionObserver(about2, "is-aboutref", 0.4);
})
</script>

<template>
  <main>
    <HeroSection /> <!--hero section inported component-->
    <section class="client">
      <ul class="client-inner">
        <li>Behance</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>Dribble</li>
        <li>Facebook</li>
      </ul>
    </section>
    <Services /> <!--services section inported component-->
    <section class="about wrapper">
      <div class="about-txt">
        <h3>About Me</h3>
        <h5 ref="about" class="opacity-0 translate-y-10" :class="{ 'is-about-ref': isabout }">I'm Rachael Alogbe, a dedicated and passionate Product Designer
          hailing from the vibrant city of Port Harcourt, Nigeria.</h5>

          <p ref="about2" class="opacity-0 translate-y-10" :class="{ 'is-about-ref': isabout }">My journey in the world of design started with a curiosity to understand how things work and a relentless desire to make them work better. With a background in Petroleum Engineering, I've cultivated a profound appreciation for the intersection of technology, human behavior, and aesthetics. Read more</p>
        <button class="read-more" @click="router.push('/about')">Read More</button>
      </div>
      <div class="about-svg">
        <img src="../assets/Subtract.png" alt="racheal png logo" width="280px" height="280px" class="r-img vibrate">
      </div>
    </section>
    <Skills />
    
    <Feature />
    
    <CarouselTest/>
    <Contact /> <!--contact section inported component-->
  </main>
</template>

<style scoped>
.is-aboutref {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease-out, transform 1s ease-out;
}
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
  border-bottom: 1px solid rgba(11, 11, 11, 0.20);
  border-top: 1px solid rgba(11, 11, 11, 0.20);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #3A3A3A;
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
  background-color: #fff;
  /* padding: 4.5rem; */

  .about-txt {
    /* max-width: 781px; */
    h3 {
      /* margin-top: 7.06rem; */
      color: #111;
      font-size: clamp(1.45rem, -0.607rem + 4.286vw, 3.65rem);
      font-family: open sans;
      font-weight: 700;
      line-height: normal;
      font-family: Open Sans;
      margin-bottom: 24px;
    }
    h5 {
      color: #111;
      font-family: Open Sans;
      font-size: 1.25rem;
      margin-bottom: 1.2rem;
    }
    p {
      margin-bottom: 1.5rem;
      color: #111;
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
    /* border: 1px solid magenta; */

    img {
      opacity: 0.7;
      width: 200px;
      height: 200px;
    }
  }
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
      background: #D3382F;
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

    .line {
        width: 147px;
        height: 2px;
        background-color: #D3382F;
        border: none;
        margin: 0;
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

/* .customer {
  display: grid;
  grid-template-columns: 1fr 2fr;

  .yellow-card {
    background-color: #FFE517;
    padding: 221px 52px 57px 111px;
    position: relative;

    h4 {
      color: #000;

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
          line-height: 36.828px;
        }

        h6 {
          color: #3A3A3A;
          font-feature-settings: 'liga' off;
          font-family: Inter;
          font-size: 18.414px;
          font-style: normal;
          font-weight: 400;
          line-height: 26.306px;
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
        line-height: 26.828px;
      }
    }
  }
} */

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

    .about-svg {
    /* border: 1px solid magenta; */

    img {
      opacity: 0.7;
      width: 300px;
      height: 300px;
    }
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