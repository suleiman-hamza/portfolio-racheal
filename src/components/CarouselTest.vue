<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
</script>

<template>
  <Carousel
    class="elementCarousel"
    :opts="{
      align: 'end',
    }"
  >
  <div class="p-1"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, aliquam! Laboriosam aspernatur corporis minima inventore aut omnis provident reiciendis hic cum voluptatem doloribus aperiam odit quis assumenda, totam nihil esse?</p></div>
    <CarouselContent>
      <CarouselItem v-for="(_, index) in 5" :key="index" class="elementCarItem">
        <div class="p-1">
          <Card>
            <CardContent class="flex aspect-square items-center justify-center">
              <span class="text-3xl font-semibold">{{ index + 1 }}</span>
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
    bottom: 20px;
    left: 10px;
}
.next {
    bottom: 20px;
    left: 56px;
}
.elementCarousel {
    border: 1px solid red;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

/* Base styles (before md breakpoint) */
.elementCarItem {
  flex-basis: 50% /* Default if not specified */
}
.p-1 {
    padding: 1rem;
}

/*Medium screens (md) and up - typically 768px in Tailwind*/
@media (min-width: 768px) {
  .elementCarItem {
    flex-basis: 50%; 
  }

  .elementCarousel {
  grid-template-columns: 1fr;
}
}

/* Large screens (lg) and up - typically 1024px in Tailwind */
/* @media (min-width: 1024px) {
  .elementCarItem {
    flex-basis: 33.333333%;
  }
} */
</style>