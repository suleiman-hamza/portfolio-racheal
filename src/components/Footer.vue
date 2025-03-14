<template>
    <footer class="footer">
        <section class="footer-sec wrapper">
            <a href="#" class="logo">
                <img src="../assets/Subtract.png" alt="Logo">
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
                        <span class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M7.5 6.66667H5V10H7.5V20H11.6667V10H14.7017L15 6.66667H11.6667V5.2775C11.6667 4.48167 11.8267 4.16667 12.5958 4.16667H15V0H11.8267C8.83 0 7.5 1.31917 7.5 3.84583V6.66667Z"
                                    fill="#242529" />
                            </svg>
                        </span>
                        <span class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <g clip-path="url(#clip0_1642_3658)">
                                    <path
                                        d="M20 3.79721C19.2642 4.12388 18.4733 4.34388 17.6433 4.44305C18.4908 3.93555 19.1417 3.13138 19.4475 2.17305C18.655 2.64305 17.7767 2.98471 16.8417 3.16888C16.0942 2.37138 15.0267 1.87305 13.8467 1.87305C11.1975 1.87305 9.25083 4.34471 9.84917 6.91055C6.44 6.73971 3.41667 5.10638 1.3925 2.62388C0.3175 4.46805 0.835 6.88055 2.66167 8.10221C1.99 8.08055 1.35667 7.89638 0.804167 7.58888C0.759167 9.48971 2.12167 11.268 4.095 11.6639C3.5175 11.8205 2.885 11.8572 2.24167 11.7339C2.76333 13.3639 4.27833 14.5497 6.075 14.583C4.35 15.9355 2.17667 16.5397 0 16.283C1.81583 17.4472 3.97333 18.1264 6.29 18.1264C13.9083 18.1264 18.2125 11.6922 17.9525 5.92138C18.7542 5.34221 19.45 4.61971 20 3.79721Z"
                                        fill="#242529" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1642_3658">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <path
                                    d="M2.50996 18H5.50996V6.9H2.50996V18ZM4.00996 2C3.00996 2 2.20996 2.8 2.20996 3.8C2.20996 4.8 3.00996 5.6 4.00996 5.6C5.00996 5.6 5.80996 4.8 5.80996 3.8C5.80996 2.8 5.00996 2 4.00996 2ZM10.61 8.6V6.9H7.60996V18H10.61V12.3C10.61 9.1 14.71 8.9 14.71 12.3V18H17.71V11.2C17.71 5.8 12.01 6 10.61 8.6Z"
                                    fill="#242529" />
                            </svg>
                        </span>
                        <span class="icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <g clip-path="url(#clip0_1642_3668)">
                                    <path
                                        d="M16.3458 2.65344C13.3425 2.44844 6.65333 2.44927 3.65417 2.65344C0.406667 2.8751 0.0241667 4.83677 0 10.0001C0.0241667 15.1543 0.403333 17.1243 3.65417 17.3468C6.65417 17.5509 13.3425 17.5518 16.3458 17.3468C19.5933 17.1251 19.9758 15.1634 20 10.0001C19.9758 4.84594 19.5967 2.87594 16.3458 2.65344ZM7.5 13.3334V6.66677L14.1667 9.99427L7.5 13.3334Z"
                                        fill="#242529" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1642_3668">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
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
.footer {
        background-color: #0e0d0d;
    }
.wrapper {
    padding-block: 1.2rem;
    max-width: 1186px;
    margin-inline: auto;
}
.footer-sec {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    /* border: 1px solid red; */
    padding: 1rem;
    text-align: center;
}
.logo {
    margin-bottom: 1rem;
    width: min-content;
    margin-inline: auto;
    /* border: 1px solid yellow; */
}
.logo img {
    display: block;
    width: 40px;
}
.icons {
    display: block;
    width: 34px;
    height: 34px;
    border: 1px solid white;
}
.other-ft > ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: none;
    padding: 0;
    margin-bottom: 1rem;

    li {
        font-size: 18px;
        font-family: "Source Sans Pro";
        font-weight: 400;
        color: #fff;
    }
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
.group-right p {
    font-size: 1rem;
    font-weight: 400;
}


@media (min-width: 765px) {
    .footer-sec {
        grid-template-columns: 1fr 3fr;
        grid-template-rows: auto;
        align-items: center;
    }
    .logo {
        margin-bottom: 0;
    }
    .logo img {
        width: 100px;
    }
    .other-ft > ul {
        flex-direction: row;
    }
    .group {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}
</style>