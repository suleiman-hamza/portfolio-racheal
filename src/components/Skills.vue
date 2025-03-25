<script setup lang="ts">
import { onMounted, shallowRef, useTemplateRef , ref} from 'vue';
import type { Ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const card1 = ref<HTMLElement | null>(null);
const card2 = ref<HTMLElement | null>(null);
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
    addIntersectionObserver(card1, "is-visible", 0.4);
    addIntersectionObserver(card2, "is-visible", 0.4);
})
</script>
<template>
    <main class="skills">
        <section class="wrapper">
            <span class="line-group">
                <hr class="line"></hr>
                <h5>Skills & Tools</h5>
            </span>
            <h2>What I Can Do</h2>
            <div class="category">
                <div class="cat-skills">
                <span>
                    <img src="../assets/images/Skills-png.png" alt="skills icon">
                </span>
                <div ref="card1" class="boxxy opacity-0 translate-y-10" :class="{ 'is-visible': isherimg }">
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
                <span>
                    <img src="../assets/images/Tools-png.png" alt="tools icon">
                </span>
                <div ref="card2" class="boxxy opacity-0 translate-y-10" :class="{ 'is-visible': isherimg }">
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
    </main>
    
</template>

<style scoped>
.is-visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease-out, transform 1s ease-out;
}
.wrapper {
    padding-block: 1.2rem;
    max-width: 1186px;
    margin-inline: auto;
}
.skills {
    /* border: 1px solid gold; */
    padding: 1rem;
    background-color: #fff6f5;
}
.line-group {
    display: flex;
    align-items: center;
    gap: 1rem;
}
.line {
      width: 147px;
      height: 2px;
      background-color: #D3382F;
      border: none;
}
h5 {
      font-size: 1.125rem;
      letter-spacing: 0.63px;
      line-height: 27.756px;
      font-weight: 400;
      color: #3a3a3a;
}
h2 {
    font-weight: 700;
    line-height: normal;
    font-size: clamp(1.45rem, -0.607rem + 4.286vw, 3.65rem);
    font-family: "Open Sans";
    margin-bottom: 52px;
    color: #111;
}
.category {
    /* border: 1px solid red; */
    display: flex;
    /* justify-content: space-between; */
    gap: 2rem;
    flex-direction: column;
}
.cat-skills {
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    
    > span {
        /* border: 1px solid greenyellow; */

        > img {
            display: block;
            width: 120px;
            height: auto;
        }
    }

    .boxxy {
        color: #111;
        font-size: 1.5rem;
        display: grid;
        grid-template-columns: 1fr;
        /* justify-items: center; */
        gap: 0.5rem;
        background-color: #fff;
        padding: 1rem;
    }
}
.cat-tools {
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    > span {
        /* border: 1px solid greenyellow; */
        > img {
            display: block;
            width: 120px;
            height: auto;
        }
    }

    .boxxy {
        color: #111;
        font-size: 1.5rem;
        display: grid;
        grid-template-columns: 1fr;
        /* justify-items: center; */
        gap: 0.5rem;
        background-color: #fff;
        padding: 1rem;
    }
}

@media (min-width: 788px) {

    .category {
        flex-direction: row;
    }
    .cat-skills {
        flex-direction: row;
        flex: 1;

        .boxxy {
            flex: 1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            row-gap: 2rem;
        }
    }
    .cat-tools {
        flex-direction: row;
        flex: 1;

        .boxxy {
            flex: 1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: min-content;
            row-gap: 2rem;
        
        }
    }
}
</style>