<script setup lang="ts">
</script>
<template>
    <main>
        <div class="height"></div>
        <div class="header-img">
            <img src="../assets/images/Rectangle 2.png" alt="portfolio hero image">
        </div>
        <section class="port-main wrapper">
            <div class="port-about">
                <img src="../assets/images/Rectangle 3-gradient.png" alt="racheal gradient image">
                <h2>Born in Delta, thriving in Port Harcourt, crafting design journeys.</h2>
            </div>
            <div class="port-text">
                <p><span>Hello, I'm Rachael, a Product Designer</span> passionate about crafting meaningful user experiences. </p>

                <p><span>Born and raised in Delta,</span> Nigeria, my journey began amidst the diverse landscapes of this region, where every day was a story waiting to be told. As I grew up in Delta, Nigeria, I learned the importance of embracing change and welcoming new ideas, much like the spirit of innovation that marks my journey.</p>

                <p><span>My educational odyssey began in the quaint surroundings of Delta,</span> where I completed my primary education. The journey continued as I moved to Benin City, Edo State, to pursue my secondary education, marking a shift from the serene countryside to the bustling city.</p>
            
                <p>It was in the hallowed halls of the University of Beninthat I delved into the world of Petroleum Engineering. AsI inched towards the culmination of my studies, a hiddenpassion was awoken. It was the world of design thatbeckoned to me, whispering of unexplored possibilities.With the vigor of a fresh revelation, I made the bolddecision to pivot my career towards design.</p>

                <p><span>Fast forward to today,</span> I find myself in the bustling heart of Port Harcourt, Nigeria, where I've been immersed in the captivating realm of design. I am currently a Product Designer at Muzzlab. In my role, every day, I embrace new challenges, organizing user-testing sessions to ensure seamless user journeys and maintaining consistency and scalability in our designs, resulting in both form and function. I'm not just a designer; I'm a dedicated seeker of understanding, conducting comprehensive user research to craft innovative solutions that drive higher user satisfaction and engagement.</p>

                <p><span>Prior to joining Muzzlab,</span> I completed a 6-month product design training as a Woman Techster, sponsored by Microsoft, and earned certification in Google UX design.</p>

                <p><span>Beyond the world of design,</span> I find solace and joy in the serene waters, having embraced the art of swimming since childhood.</p>

                <p><span>I'm here to connect,</span> to explore new horizons, and to keep the flames of innovation alive. So, feel free to dive into a conversation with me, and let's discover the possibilities together.</p>
            </div>
        </section>
    </main>
</template>
<style lang="css" scoped>
.wrapper {
    padding-block: 1.2rem;
    max-width: 1186px;
    margin-inline: auto;
}
.height {
    height: 68px;
}
.header-img img {
    width: 100%;
    height: 150px;
    display: block;
    /* border: 1px solid yellow; */
    aspect-ratio: 1;
}
.header-img {
    margin-bottom: 1rem;
}
.port-main {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.port-about {

    img {
        width: 100%;
        height: auto;
    }

    h2 {
        margin-bottom: 1rem;
        color: #fff;
    }
}
.port-text {
    p {
        margin-bottom: 0.75rem;
    }
    p > span {
        font-weight: 700;
    }
}


@media (min-width: 600px) {
    .port-main {
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;
    }
    .port-about {
        flex: 1;
    }
}
</style>