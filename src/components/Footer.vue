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
                    <div class="group-left">icons</div>
                    <div class="group-right">copyright</div>
                </div>
            </div>
        </section>
    </footer>
</template>

<style lang="css" scoped>
.footer {
    display: grid;
    border: 1px solid red;
}
.footer-sec {
    /* margin: 72px; */
    border: 1px solid red;
}
.other-ft > ul {
    display: flex;
    list-style-type: none;
    padding: 0;
}
</style>