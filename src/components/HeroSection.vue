<script setup lang="ts">
import Header from './Header.vue';
import { onMounted, shallowRef, useTemplateRef , ref} from 'vue';
import type { Ref } from 'vue';
import TypingAnimation from '@/components/TypingAnimation.vue';
import { useIntersectionObserver } from '@vueuse/core';
import { useRouter } from 'vue-router';
const router = useRouter()

const herimg = ref<HTMLElement | null>(null);
const website = ref<HTMLElement | null>(null);
const isherimg = ref(false);


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
    addIntersectionObserver(herimg, "is-visible", 0.4);
    addIntersectionObserver(website, "is-webvisible", 0.4);
})
</script>

<template>
    <section class="hero-section-container">
        <div class="hero-inner wrapper">
            <Header class="header"/>
            <div class="hero-text">
                <TypingAnimation text="Hi, I'm Racheal" class="hi text-left"/>
                <TypingAnimation text="Product Designer" class="role text-left"/>
                <p class="role-desc">Dedicated to Crafting Intuitive and User-Centric Design Solutions. Currently, I am based in Port Harcourt City Nigeria</p>
                <button @click="router.push('/#portfolio')" class="cta text-4xl border-2 p-4">View My Works</button>
            </div>
            <div class="hero-img">
                <img src="../assets/images/Rectangle 3.png" alt="racheal's photo" class="img-2 opacity-0 translate-y-10" :class="{ 'is-visible': isherimg }" ref="herimg">
                <img src="../assets/images/Property 1=Variant2 (1).png" alt="variant 2" class="anim blink">
                <img src="../assets/images/Property 1=Variant4.png" alt="variant 4" class="img">
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
.header {
    height: min-content;
    padding: 0.5rem 1rem ;
}
.wrapper {
    /* padding-block: 1.2rem; */
    max-width: 1186px;
    margin-inline: auto;
}

.is-visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.hero-section-container {
    background: #FFF5F4;
    /* padding: 1rem; */
    /* position: relative; */
    /* border: 1px solid red; */
}

.hero-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    overflow: hidden;
    border: 1px solid blue;
    /* padding: 1rem; */
}

.hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    max-width: 400px;
    @media (min-width: 600px) {
       
            padding: 2rem;

    }
    
    /* border: 1px solid grey; */
    /* margin-block: 2rem; */
}



.hi {
    color: #d3382f;
    font-size: 1.25rem/*2rem*/;
    font-weight: 600;
    letter-spacing: 1.28px;
    line-height: normal;
    margin-bottom: 0.5rem;
}

.role {
    color: #111111;
    font-size: 2rem;/*72px;*/
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: normal;
    margin-top: 0;
    margin-bottom: 0.5rem;
}
.role-desc {
    color: #111111;
    font-size: 1rem;
    line-height: 24px;
    /* font-weight: 600; */
    /* letter-spacing: 0.9px; */
    margin-top: 0;
    margin-bottom: 15px;
}
.cta {
    display: flex;
      justify-content: center;
      align-items: center;
      background: #C41A26;
      padding: 0.75rem 1.25rem;
      color: #fff;
      border: none;
      cursor: pointer;
      width: fit-content;
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

.xpr {
    background-color: #fff;
    color: #111111;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    text-align: center;
    margin-bottom: -20px;
    position: absolute;
    bottom: 20px;
    right: 0;
    z-index: 12;

    h5 {
        font-weight: 700;

        span {
            font-size: 2rem;
        }
    }
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
@media(min-width: 750px) {
    .hero-inner {
        height: 100vh;
        grid-template-columns: 1fr 1fr;
    }
    .header {
        grid-column: 1 / 3;
    }
    .hero-text {
        grid-column: 1 / 2;
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
  margin-bottom: -50px;
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