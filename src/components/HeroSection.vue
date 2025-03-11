<script setup lang="ts">
</script>
<template>
    <section class="hero-section-container wrapper">
        <div class="hero-text">
            <h4 class="hi">Hi, I'm Racheal</h4>
            <h1 class="role">Product Designer</h1>
            <p class="role-desc">Dedicated to Crafting Intuitive and User-Centric Design Solutions. Currently, I am based in Port Harcourt City Nigeria</p>
            <button class="cta">View My Works</button>
        </div>
        <div class="hero-img">
            <!-- <img src="../assets/images/Rectangle 3.png" alt="racheal's photo" class="img"> -->
             <img src="../assets/images/Property 1=Variant3.png" alt="" class="img">
        </div>
    </section>
</template>

<style lang="css" scoped>
.wrapper {
    padding: 1.2rem;
    max-width: 1186px;
    margin-inline: auto;
}
.hero-section-container {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    overflow: hidden;
    /* border: 1px solid red; */
}
.hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid grey;
    /* margin-block: 2rem; */
}
.hi {
    color: #d3382f;
    font-size: 1.25rem/*2rem*/;
    font-weight: 600;
    letter-spacing: 1.28px;
}
.role {
    color: #fff;
    font-size: 2rem;/*72px;*/
    font-weight: 700;
}
.role-desc {
    font-size: 1.125rem;
    line-height: 34px;
    font-weight: 600;
    letter-spacing: 0.9px;
    margin-bottom: 15px;
}
.cta {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px 30px;
    background-color: #d3382f;
    border: none;
    cursor: pointer;
    width: fit-content;
}

.hero-img {
    border: 1px solid rgb(199, 212, 11);
    height: auto;
  display: block;
  object-fit: contain;
  aspect-ratio: 1;
  background-image: url(../assets/images/Rectangle\ 3.png);
  background-repeat: no-repeat;
}
.img {
    width: 100%;
    /* height: auto;
    display: block;
    position: relative; */
}
.img::before {
    /* content: url('../assets/images/Property\ 1=Variant3.png');
    position: absolute;
    z-index: 100;
    bottom: 200px; */
}

/*min-width for the desktop screens*/
@media(min-width: 765px) {
    .hero-section-container {
        height: 100vh;
        grid-template-columns: 1fr 1fr;
        /* margin-top: 8rem; */
    }
}
</style>