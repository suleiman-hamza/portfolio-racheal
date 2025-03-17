<script setup lang="ts">
import { cn } from '../lib/utils'
import TypingAnimation from '@/components/TypingAnimation.vue'
import AnimatedShinyText from '@/components/AnimatedShinyText.vue'
</script>
<template>
  <div>
    <p>This is an about page</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
    <div class="shiny ">
      <div class="grid place-items-center min-h-screen w-full">
    <div class="z-10 flex min-h-[16rem] items-center justify-center">
      <div
        :class="cn(
          'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800')"
      >
        <AnimatedShinyText class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Spark UI</span>
        </AnimatedShinyText>
      </div>
    </div>
  </div>
    </div>
    <TypingAnimation class="text-4xl font-bold text-black" text="Typing Animation" />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, debitis nulla aperiam quod quae cumque ab, atque doloremque quo, dolore reiciendis fugit in nemo nam fuga repellendus aliquam placeat error?</p>
  </div>
</template>

<style>
.shiny {
  background: #242525;
  padding: 2rem;
}
.just {
  color: black;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
