<template>
    <footer class="footer">
        <section class="footer-sec">
            <a href="#" class="logo">
                <img src="../assets/Subtract.png" alt="Logo" width="40px">
            </a>
            <div class="other-ft">
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>About Us</li>
                    <li>Resume</li>
                    <li>Contact Us</li>
                </ul>
                <hr>
                <div class="group">
                    <div class="group-left">
                        <span class="icons"></span>
                        <span class="icons"></span>
                        <span class="icons"></span>
                        <span class="icons"></span>
                    </div>
                    <div class="group-right">
                        <p>Copyright 2025. All rights reserved Rovel.com</p>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<style lang="css" scoped>
.footer-sec {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    border: 1px solid red;
    padding: 1rem;
    text-align: center;
}
.logo {
    margin-bottom: 1rem;
    width: min-content;
    margin-inline: auto;
}
.icons {
    display: block;
    width: 34px;
    height: 34px;
    border: 1px solid white;
}
.other-ft {
    margin-bottom: 1rem;
}
.other-ft > ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: none;
    padding: 0;
    margin-bottom: 1rem;
}
.other-ft > hr {
    border: 1px solid grey;
}

.group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}
.group-left {
    display: flex;
    gap: 1.2rem;
    justify-content: center;
}
</style>