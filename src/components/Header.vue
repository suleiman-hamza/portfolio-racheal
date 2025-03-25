<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const target = ref(null);

const isMenuOpen = ref(false);
function openMenu() {
    isMenuOpen.value = !isMenuOpen.value
    console.log(isMenuOpen.value)
}
onClickOutside(target, (event) => {
    isMenuOpen.value = false
})

watch(route, ()=> {
    isMenuOpen.value = false
})

</script>

<template>
    <nav class="navigation">
        <a href="#" class="logo">
            <img src="../assets/Subtract.png" alt="Logo" width="40px">
        </a>
        <ul class="nav-menu">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
            <li><RouterLink to="/about">About us</RouterLink></li>
            <li><RouterLink to="/resume">Resume</RouterLink></li>
            <li><RouterLink to="/contact">Contact us</RouterLink></li>
        </ul>
        <div class="hamburger" ref="target">
            <button @click="openMenu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20px" height="20px">
                <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg> -->
            </button>
            <Transition name="nav-list">
                <div :class="['hamburger-menu', { show: isMenuOpen }]" v-show="isMenuOpen === true">
                    <ul class="nav-menu-list">
                        <li><RouterLink to="/">Home</RouterLink></li>
                        <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
                        <li><RouterLink to="/about">About us</RouterLink></li>
                        <li><RouterLink to="/resume">Resume</RouterLink></li>
                        <li><RouterLink to="/contact">Contact us</RouterLink></li>
                    </ul>
                </div>
            </Transition>
        </div>
    </nav>
</template>

<style scoped>
a {
    color: #ffffff;
}
.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    /* border: 2px solid red; */
    position: fixed;
    width: 100%;
    top: 0;
    background-color:#FFF5F4; /* Add background color to avoid transparency issues */
    z-index: 1000; /* Ensure it stays on top */
    box-shadow: -1px -5px 5px 3px #000;
}

.nav-menu {
    display: none;
    list-style: none;
    padding-left: 0;

    li * {
        color: #000
    }
}

.nav-menu-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    height: 100%;
}

.hamburger {
    
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        padding: 0.35rem;
    }
}

.hamburger-menu {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 0;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hamburger-menu.show {
    height: 50vh;
}
.router-link-active {
    border-bottom: 1px solid red;
}

.nav-list-enter, .nav-list-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.nav-list-enter-active, .nav-list-leave-active {
    transition: all 0.3s ease-out;
}

@media (min-width: 750px) {
.nav-menu {
    display: flex;
    gap: 2.6rem;
}
.hamburger {
    display: none;
}
}
</style>