<template>
        <section class="customer">
      <div class="yellow-card">
        <h4>
          80+
          <br>Satisfied 
          <br>Customers
        </h4>
      </div>
      <div class="testimony">
        <article class="testimony-card">
          <div class="client-title">
            <span class="replace-img">
              <img src="../assets/images/Mikes-avatar.png" alt="">
            </span>
            <span>
              <h5>Floyd Miles</h5>
              <h6>Vice President, GoPro</h6>
            </span>
          </div>
          <p>"I had the pleasure of working with Rachael, and I'm thrilled with the results. Her keen eye for detail and dedication to understanding our brand's essence resulted in a beautifully redesigned website. Rachael exceeded our expectations.”</p>
        </article>
        <article class="testimony-card">
          <div class="client-title">
            <span class="replace-img">
              <img src="../assets/images/Floyd-avatar.png" alt="bike shop">
            </span>
            <span>
              <h5>Floyd Miles</h5>
              <h6>Vice President, GoPro</h6>
            </span>
          </div>
          <p>"I had the pleasure of working with Rachael, and I'm thrilled with the results. Her keen eye for detail and dedication to understanding our brand's essence resulted in a beautifully redesigned website. Rachael exceeded our expectations.”</p>
        </article>
      </div>
    </section>
</template>

<style scoped>
/* General Styles */
.customer {
  display: grid;
  /* gap: 20px; */
  /* padding: 20px; */
  background-color: #f9f9f9;
}

.yellow-card {
  background-color: #ffe517;
  /* padding: 20px; */
  text-align: left;
  padding: 150px 40px 85px 70px;
  position: relative;
  /* border-radius: 10px; */
}
.yellow-card::after {
    content: url('../assets/images/SuperToroid-Black-Matte.png');
    position: absolute;
    bottom: 0;
    left: 0;
}

.yellow-card h4 {
  margin: 0;
  font-size: 42px;
  line-height: 1.4;
  font-weight: 700;
  color: #000;
}

.testimony {
  display: flex;
  gap: 20px;
  background-color: #f9f9f9;
  padding: 35px;
}

.testimony-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.client-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.client-title img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
}

.client-title h5 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  line-height: 30px;
  color: #1e1e1e;
}

.client-title h6 {
  margin: 0;
  font-weight: 400;
  font-family: Inter;
  line-height: 25px;
  font-size: 18px;
  color: #3a3a3a;
}

.testimony-card p {
  margin: 0;
  font-size: 1.24rem;
  font-family: "Open Sans Pro";
  font-weight: 400;
  line-height: 35px;
  color: #3a3a3a;

}

/* Desktop Layout */
@media (min-width: 768px) {
  .customer {
    grid-template-columns: 1fr 2fr;
  }
}

/* Mobile Layout */
@media (max-width: 767px) {
  .customer {
    grid-template-columns: 1fr;
  }

  .testimony {
    flex-direction: column;
  }
}
</style>