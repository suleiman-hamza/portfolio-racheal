<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
</script>

<template>
  <Carousel
    class="elementCarousel h-full"
    :opts="{
      align: 'end',
    }"
  >
    <div class="p-1 yellow-card">
        <h4>
            80+
            <br>Satisfied 
            <br>Customers
        </h4>
    </div>
    <CarouselContent class="h-full card-content">
      <CarouselItem v-for="(_, index) in 5" :key="index" class="elementCarItem h-full">
        <div class="p-1">
          <Card class="h-full">
            <CardContent class="flex h-full items-center justify-center">
                <div class="main-card">
                    <div class="client-title">
                        <span class="replace-img">
                            <img src="../assets/images/Floyd-avatar.png" alt="bike shop">
                        </span>
                        <span>
                            <h5>Floyd Miles</h5>
                            <h6>Vice President, GoPro</h6>
                        </span>
                    </div>
                    <span class="text-3xl font-semibold card-text">"I had the pleasure of working with Rachael, and I'm thrilled with the results. Her keen eye for detail and dedication to understanding our brand's essence resulted in a beautifully redesigned website. Rachael exceeded our expectations.”</span>
                </div>
                
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="prev"/>
    <CarouselNext class="next"/>
  </Carousel>
</template>

<style scoped>
.prev {
    bottom: 45px;
    left: 140px;
}
.next {
    bottom: 45px;
    left: 200px;
}
.h-full {
    height: 100%;
    /* border: 1px solid grey; */
}
.elementCarousel {
    /* border: 1px solid red; */
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f9f9f9;
}

/* Base styles (before md breakpoint) */
.elementCarItem {
  flex-basis: 50% /* Default if not specified */
}

.card-content {
    background-color: #f9f9f9;
}
.p-1 {
    padding: 1rem;
}

.main-card {
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
}

.card-text {
    margin: 0;
  font-size: 1.24rem;
  font-family: "Open Sans Pro";
  font-weight: 400;
  line-height: 35px;
  color: #3a3a3a;
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

/*Medium screens (md) and up - typically 768px in Tailwind*/
/* @media (min-width: 768px) {
  .elementCarItem {
    flex-basis: 50%; 
  }

  .elementCarousel {
  grid-template-columns: 1fr;
}
} */

/* Large screens (lg) and up - typically 1024px in Tailwind */
/* @media (min-width: 1024px) {
  .elementCarItem {
    flex-basis: 33.333333%;
  }
} */
</style>