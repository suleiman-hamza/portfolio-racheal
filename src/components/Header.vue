<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
function openMenu() {
    isMenuOpen.value = !isMenuOpen.value
    console.log(isMenuOpen.value)
}
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
        <div class="hamburger">
            <button @click="openMenu">B</button>
            <div class="hamburger-menu" v-show="isMenuOpen === true">
                <ul class="nav-menu-list">
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
                    <li><RouterLink to="/about">About us</RouterLink></li>
                    <li><RouterLink to="/resume">Resume</RouterLink></li>
                    <li><RouterLink to="/contact">Contact us</RouterLink></li>
                </ul>
            </div>
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
    padding: 1rem;
    border: 2px solid red;
}

.nav-menu {
    display: none;
    list-style: none;
    padding-left: 0;
}

.nav-menu-list {
    list-style: none;
    padding-left: 0;
    position: absolute;
    top: 70px;
    right: 0;
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