<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import FeatureCard from '@/components/FeatureCard.vue';
import Button from './ui/button/Button.vue';

const showLink = ref(false);
const itemsPerPage = ref(6);
const currentPage = ref(1);
const project = ref([
    {
        imgsrc: 'src/assets/images/Group 35861 (2).png',
        btnName: 'Views'
    },
    {
        imgsrc: 'src/assets/images/Group 35862 (1).png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 35859 (1).png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 46.png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 35863.png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 35860.png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 35861 (2).png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 35861 (2).png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 35861 (2).png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 35861 (2).png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 35861 (2).png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 35861 (2).png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 35861 (2).png',
        btnName: 'View'
    },
    {
        imgsrc: 'src/assets/images/Group 35861 (2).png',
        btnName: 'View'
    }
]);

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return project.value.slice(start, end);
})

const totalPages = computed(()=> {
    return Math.ceil(project.value.length / itemsPerPage.value);
})

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function previousPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function onHover() {
    console.log("Something's Up")
}
</script>

<template>
    <section class="featured wrapper" id="portfolio">
      <span>
        <hr class="line">
        <h5>Portfolio</h5>
      </span>
      <h2 @mouseover="onHover">Featured Project</h2>
      
      <transition-group class="ft-grid" tag="div" name="list" v-auto-animate>
        <FeatureCard 
            class="border"
            v-for="card in paginatedProducts"
            :card="card"
            @mouseover="onHover"
        />
      </transition-group>
      
    <div class="pagination-controls">
        <Button @click="previousPage" :disabled="currentPage === 1">
            Previous
        </Button>
        
        <span v-for="page in totalPages" :key="page">
            <Button @click="currentPage = page" :class="{ active: currentPage === page }">
            {{ page }}
            </Button>
        </span>

        <Button @click="nextPage" :disabled="currentPage === totalPages">
            Next
        </Button>
    </div>
    </section>
</template>

<style lang="css" scoped>
.featured {
  padding: 3rem;
  border: 1px solid red;

  h2 {
    color: #1e1e1e;
    font-size: clamp(1.45rem, -0.607rem + 4.286vw, 3.65rem);
    font-weight: 700;
    font-family: "Open Sans";
    line-height: normal;
    margin-bottom: 3.25rem;
  }

  > span {
  /* border: 1px solid red; */
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .line {
      width: 147px;
      height: 2px;
      background-color: #D3382F;
      border: none;
      margin: 0;
    }
    h5 {
      color: #3a3a3a;
      font-family: "Source Sans Pro";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      /* line-height: 154.2%; 27.756px */
      letter-spacing: 0.63px;
      margin: 0;
    }
  }

  .ft-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 24px;
    justify-self: center;
    border: 2px solid green;

    span {
      position: relative;
      border: 1px solid red;
    } 
  }
}
.pagination-controls {
    border: 1px solid seagreen;
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-block: 2rem;

    button {
        padding: 0.5rem;
    }
}

.list-enter-active, .list-leave-active {
    transition: all 0.5s ease-out;
}
.list-enter-from, .list-leave-to {
    opacity: 0;
    transform: translateX(-50px);
}
.list-enter-to, .list-enter-from {
    opacity: 0;
    transform: translateX(50px);
}

</style>