<script setup lang="ts">
import { onMounted, shallowRef, useTemplateRef , ref} from 'vue';
import type { Ref } from 'vue';
// import TypingAnimation from '@/components/TypingAnimation.vue';
import { useIntersectionObserver } from '@vueuse/core';

const website = ref<HTMLElement | null>(null);
const app = ref<HTMLElement | null>(null);
const brand = ref<HTMLElement | null>(null);
const thirt = ref<HTMLElement | null>(null);
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
    addIntersectionObserver(website, "is-webvisible", 0.4);
    addIntersectionObserver(app, "is-webvisible", 0.4);
    addIntersectionObserver(brand, "is-webvisible", 0.4);
    addIntersectionObserver(thirt, "is-thirtvisible", 0.4);
})

</script>

<template>
    <section class="services wrapper">
      <div class="services-head">
        <h3>The <span class="ser">Services</span> I Provide</h3>
        <span class="translate-x-2 opacity-0" :class="{ 'is-thirtvisible': isherimg }" ref="thirt">30+ Projects Completed</span>
      </div> 
      <div class="services-body">
        <div class="web opacity-0 translate-y-10" :class="{ 'is-webvisible': isherimg }" ref="website">
          <span class="services-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="none">
              <path d="M40 36C42.2 36 43.98 34.2 43.98 32L44 12C44 9.8 42.2 8 40 8H8C5.8 8 4 9.8 4 12V32C4 34.2 5.8 36 8 36H0V40H48V36H40ZM8 12H40V32H8V12Z" fill="#D3382F"/>
            </svg>
          </span>
          <h4>Website Design</h4>
          <p>Crafting engaging web eexperiences is at the heart of my expertise. I emplot modern web design principles, ensuring seamless navigation and aesthetic appeal. My process includes responsive design for cross-device compactibility and a strong emphasis on user-centric design.</p>
        </div>
        <div class="app opacity-0 translate-y-10" :class="{ 'is-webvisible': isherimg }" ref="app">
          <span class="services-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="none">
              <path d="M9 6C9 4.4087 9.63214 2.88258 10.7574 1.75736C11.8826 0.632141 13.4087 0 15 0L33 0C34.5913 0 36.1174 0.632141 37.2426 1.75736C38.3679 2.88258 39 4.4087 39 6V42C39 43.5913 38.3679 45.1174 37.2426 46.2426C36.1174 47.3679 34.5913 48 33 48H15C13.4087 48 11.8826 47.3679 10.7574 46.2426C9.63214 45.1174 9 43.5913 9 42V6ZM27 39C27 38.2043 26.6839 37.4413 26.1213 36.8787C25.5587 36.3161 24.7956 36 24 36C23.2044 36 22.4413 36.3161 21.8787 36.8787C21.3161 37.4413 21 38.2043 21 39C21 39.7957 21.3161 40.5587 21.8787 41.1213C22.4413 41.6839 23.2044 42 24 42C24.7956 42 25.5587 41.6839 26.1213 41.1213C26.6839 40.5587 27 39.7957 27 39Z" fill="#D3382F"/>
            </svg>
          </span>
          <h4>App Design</h4>
          <p>I specialize in creating captivating and user-friendly mobile app designs. With a keen focus on user experience (UX) and user interface (UI) design, my approach involves in-depth user research, wireframing, and rapid prototyping to bring innovative app concepts to life.</p>
        </div>
        <div class="brand opacity-0 translate-y-10" :class="{ 'is-webvisible': isherimg }" ref="brand">
          <span class="services-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 26" fill="none">
  <g clip-path="url(#clip0_7339_1086)">
    <path d="M21.1657 0.233253C21.0157 0.0832758 20.8122 -0.000976562 20.6001 -0.000976562C20.388 -0.000976562 20.1845 0.0832758 20.0345 0.233253L17.3993 2.86845L23.3305 8.79965L25.9657 6.16605C26.0402 6.09174 26.0993 6.00346 26.1396 5.90627C26.18 5.80907 26.2007 5.70488 26.2007 5.59965C26.2007 5.49442 26.18 5.39023 26.1396 5.29304C26.0993 5.19585 26.0402 5.10757 25.9657 5.03325L21.1657 0.233253ZM22.1993 9.93085L16.2681 3.99965L5.8681 14.3997H6.1993C6.41147 14.3997 6.61496 14.4839 6.76499 14.634C6.91501 14.784 6.9993 14.9875 6.9993 15.1997V15.9997H7.7993C8.01147 15.9997 8.21496 16.0839 8.36498 16.234C8.51501 16.384 8.5993 16.5875 8.5993 16.7997V17.5997H9.3993C9.61147 17.5997 9.81496 17.6839 9.96498 17.834C10.115 17.984 10.1993 18.1875 10.1993 18.3997V19.1997H10.9993C11.2115 19.1997 11.415 19.2839 11.565 19.434C11.715 19.584 11.7993 19.7875 11.7993 19.9997V20.3309L22.1993 9.93085ZM10.2505 21.8797C10.2168 21.7901 10.1995 21.6953 10.1993 21.5997V20.7997H9.3993C9.18713 20.7997 8.98364 20.7154 8.83361 20.5653C8.68359 20.4153 8.5993 20.2118 8.5993 19.9997V19.1997H7.7993C7.58713 19.1997 7.38364 19.1154 7.23361 18.9653C7.08359 18.8153 6.9993 18.6118 6.9993 18.3997V17.5997H6.1993C5.98713 17.5997 5.78364 17.5154 5.63361 17.3653C5.48359 17.2153 5.3993 17.0118 5.3993 16.7997V15.9997H4.5993C4.50365 15.9995 4.40881 15.9822 4.3193 15.9485L4.0329 16.2333C3.95666 16.31 3.89679 16.4015 3.8569 16.5021L0.656899 24.5021C0.598706 24.6474 0.58446 24.8067 0.615928 24.9601C0.647396 25.1135 0.723194 25.2543 0.833924 25.365C0.944655 25.4758 1.08545 25.5516 1.23885 25.583C1.39225 25.6145 1.55152 25.6002 1.6969 25.5421L9.6969 22.3421C9.79748 22.3022 9.88892 22.2423 9.9657 22.1661L10.2505 21.8797Z" fill="#D3382F"/>
  </g>
  <defs>
    <clipPath id="clip0_7339_1086">
      <rect width="25.6" height="25.6" fill="white" transform="translate(0.599609)"/>
    </clipPath>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 39 39" fill="none">
  <g clip-path="url(#clip0_7339_1088)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1992 30.9998C19.5911 30.9999 19.9694 31.1437 20.2622 31.4042C20.5551 31.6646 20.7422 32.0234 20.788 32.4126L20.7992 32.5998V34.1998C20.7988 34.6076 20.6426 34.9999 20.3627 35.2964C20.0827 35.5929 19.7001 35.7714 19.293 35.7953C18.8859 35.8192 18.485 35.6867 18.1723 35.425C17.8596 35.1632 17.6586 34.792 17.6104 34.387L17.5992 34.1998V32.5998C17.5992 32.1755 17.7678 31.7685 18.0678 31.4684C18.3679 31.1684 18.7749 30.9998 19.1992 30.9998ZM11.2792 27.7198C11.5792 28.0198 11.7477 28.4267 11.7477 28.851C11.7477 29.2753 11.5792 29.6822 11.2792 29.9822L10.148 31.1134C10.0004 31.2662 9.82387 31.3881 9.62867 31.472C9.43346 31.5558 9.22351 31.6 9.01106 31.6018C8.79861 31.6037 8.58793 31.5632 8.39129 31.4827C8.19466 31.4023 8.01602 31.2835 7.86579 31.1332C7.71556 30.983 7.59675 30.8044 7.5163 30.6077C7.43585 30.4111 7.39537 30.2004 7.39722 29.988C7.39906 29.7755 7.4432 29.5656 7.52706 29.3704C7.61091 29.1752 7.7328 28.9986 7.88562 28.851L9.01682 27.7198C9.31686 27.4199 9.72376 27.2513 10.148 27.2513C10.5723 27.2513 10.9792 27.4199 11.2792 27.7198ZM29.3816 27.7198L30.5128 28.851C30.8043 29.1528 30.9655 29.5569 30.9619 29.9764C30.9583 30.396 30.79 30.7973 30.4933 31.0939C30.1967 31.3906 29.7954 31.5588 29.3759 31.5625C28.9563 31.5661 28.5522 31.4049 28.2504 31.1134L27.1192 29.9822C26.8278 29.6804 26.6665 29.2763 26.6701 28.8568C26.6738 28.4372 26.8421 28.0359 27.1387 27.7393C27.4354 27.4426 27.8367 27.2744 28.2562 27.2707C28.6757 27.2671 29.0799 27.4284 29.3816 27.7198ZM20.1864 3.7998C20.9665 3.79963 21.7198 4.08443 22.3047 4.60064C22.8895 5.11685 23.2657 5.82893 23.3624 6.603L23.9704 11.467C25.8067 12.5187 27.244 14.1477 28.0589 16.1006C28.8738 18.0536 29.0205 20.2211 28.4764 22.266C27.9322 24.311 26.7276 26.1189 25.0499 27.4085C23.3722 28.6982 21.3154 29.3974 19.1992 29.3974C17.0831 29.3974 15.0262 28.6982 13.3485 27.4085C11.6708 26.1189 10.4662 24.311 9.92205 22.266C9.37789 20.2211 9.52466 18.0536 10.3395 16.1006C11.1544 14.1477 12.5917 12.5187 14.428 11.467L15.036 6.603C15.1327 5.82893 15.5089 5.11685 16.0938 4.60064C16.6786 4.08443 17.4319 3.79963 18.212 3.7998H20.1864ZM6.39922 18.1998C6.82357 18.1998 7.23053 18.3684 7.53059 18.6684C7.83065 18.9685 7.99922 19.3755 7.99922 19.7998C7.99922 20.2242 7.83065 20.6311 7.53059 20.9312C7.23053 21.2312 6.82357 21.3998 6.39922 21.3998H4.79922C4.37487 21.3998 3.96791 21.2312 3.66785 20.9312C3.36779 20.6311 3.19922 20.2242 3.19922 19.7998C3.19922 19.3755 3.36779 18.9685 3.66785 18.6684C3.96791 18.3684 4.37487 18.1998 4.79922 18.1998H6.39922ZM33.5992 18.1998C34.0236 18.1998 34.4305 18.3684 34.7306 18.6684C35.0306 18.9685 35.1992 19.3755 35.1992 19.7998C35.1992 20.2242 35.0306 20.6311 34.7306 20.9312C34.4305 21.2312 34.0236 21.3998 33.5992 21.3998H31.9992C31.5749 21.3998 31.1679 21.2312 30.8678 20.9312C30.5678 20.6311 30.3992 20.2242 30.3992 19.7998C30.3992 19.3755 30.5678 18.9685 30.8678 18.6684C31.1679 18.3684 31.5749 18.1998 31.9992 18.1998H33.5992ZM30.5128 8.4878C30.8128 8.78785 30.9813 9.19474 30.9813 9.619C30.9813 10.0433 30.8128 10.4502 30.5128 10.7502L29.3816 11.8814C29.234 12.0342 29.0575 12.1561 28.8623 12.24C28.6671 12.3238 28.4571 12.368 28.2447 12.3698C28.0322 12.3717 27.8215 12.3312 27.6249 12.2507C27.4283 12.1703 27.2496 12.0515 27.0994 11.9012C26.9492 11.751 26.8304 11.5724 26.7499 11.3757C26.6695 11.1791 26.629 10.9684 26.6308 10.756C26.6327 10.5435 26.6768 10.3336 26.7607 10.1384C26.8445 9.94315 26.9664 9.7666 27.1192 9.619L28.2504 8.4878C28.5505 8.18785 28.9574 8.01935 29.3816 8.01935C29.8059 8.01935 30.2128 8.18785 30.5128 8.4878ZM10.148 8.4878L11.2792 9.619C11.5635 9.92213 11.7186 10.3239 11.7119 10.7394C11.7051 11.1549 11.537 11.5515 11.2431 11.8452C10.9491 12.139 10.5524 12.3068 10.1369 12.3133C9.72145 12.3197 9.31974 12.1643 9.01682 11.8798L7.88562 10.7486C7.60137 10.4455 7.4462 10.0437 7.45295 9.62817C7.4597 9.21268 7.62783 8.81611 7.92177 8.52238C8.21571 8.22865 8.6124 8.0608 9.02789 8.05434C9.44339 8.04789 9.8451 8.20334 10.148 8.4878ZM20.1864 6.9998H18.212L17.812 10.1998H20.5864L20.1864 6.9998Z" fill="#D3382F"/>
  </g>
  <defs>
    <clipPath id="clip0_7339_1088">
      <rect width="38.4" height="38.4" fill="white" transform="translate(0 0.599609)"/>
    </clipPath>
  </defs>
</svg>
          </span>
          <h4>Branding</h4>
          <p>Elevating your brand's identity is my passion. From logo design to a comprehensive brand strategy, i work collaboratively to capture the essence of your brand and create a lasting impact. My approach is founded on market research, audience analysis, and a deep understanding of your unique story.</p>
        </div>
      </div>
    </section>
</template>

<style scoped>
.is-webvisible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease-out, transform 1s ease-out;
}
.is-thirtvisible {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 1s ease-in-out, transform 1s ease-in;
}
.ser {
  color: #D3382F;
}
.services {
    /* border: 1px solid magenta; */
    margin-bottom: 2.5rem;
    padding-inline: 1rem;
    background-color: #fff;
    color: #111;
}
.services-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    color: #111;
    font-weight: 700;
}
.services-head > h3 {
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
      text-align: end;
}
.services-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border: 1px solid #d3382f;
  padding: 1rem;
}
.app, .web, .brand {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #fff;
    max-width: 400px;
    margin-inline: auto;
    border: 1px solid #DEDEDE;
    color: #3A3A3A;
    transition: all 200ms ease-in;
    
    h4 {
      font-size: 24px;
      font-family: "Open Sans";
      font-weight: 700;
      line-height: normal;
      margin-block: 0;
    }
    
    p {
      margin-block: 0;
      color: #3A3A3A;
      font-family: "Source Sans Pro";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 146.2%; /* 26.316px */
    }
  }
  
  :is(.app, .brand, .web):hover {
  transition: all 200ms ease-in;
  border: 1px solid #d3382f;
  
  .services-icon {
    transition: all 200ms ease-in;
    background-color: #D3382F;
    
    svg {
      transition: all 200ms ease-in;
      stroke: #fff;
      fill: #fff;
      stroke-width: 2px;
    }
  }
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