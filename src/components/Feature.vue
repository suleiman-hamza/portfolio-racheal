<script setup lang="ts">
import { ref, computed } from 'vue';
import FeatureCard from '@/components/FeatureCard.vue'

const itemsPerPage = ref(6)
const currentPage = ref(1)
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
</script>

<template>
    <section class="featured wrapper" id="portfolio">
      <span>
        <hr class="line">
        <h5>Portfolio</h5>
      </span>
      <h2>Featured Project</h2>
      <div class="ft-grid">
        <FeatureCard 
            class="border"
            v-for="card in paginatedProducts"
            :card="card"
        />
      </div>
      
    <div class="pagination-controls">
        <button @click="previousPage" :disabled="currentPage === 1">
            Previous
        </button>
        
        <span v-for="page in totalPages" :key="page">
            <button @click="currentPage = page" :class="{ active: currentPage === page }">
            {{ page }}
            </button>
        </span>

        <button @click="nextPage" :disabled="currentPage === totalPages">
            Next
        </button>
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
</style>