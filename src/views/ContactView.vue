<script setup lang="ts">
import { onMounted, shallowRef, useTemplateRef , ref} from 'vue';
import type { Ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const target = ref<HTMLElement | null>(null);
const redTarget = ref<HTMLElement | null>(null);
const greenTarget = ref<HTMLElement | null>(null);

const isVisible = ref(false);
const visibilityStates = ref<boolean>();

const addIntersectionObserver = (
    element: Ref<HTMLElement | null>, animationClass: string, threshold: number
) => {
    useIntersectionObserver(
        element,
        ([entry], observer) => {
            console.log("IntersectionObserver triggered:", entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.disconnect();
            } else {
                entry.target.classList.remove(animationClass);
            }
        },
        {
            threshold
        }
    )
}

onMounted(() => {
    addIntersectionObserver(target, "is-visible", 0.2);
    addIntersectionObserver(redTarget, "is-visible", 0.2);
    addIntersectionObserver(greenTarget, "is-visible", 0.2);
})
// addIntersectionObserver(targets, "is-visible", 0.2);
// addIntersectionObserver(redTarget, "is-visible", 0.2);

</script>

<template>
    <p>Contact page is now live!!!!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores rem aspernatur odio quidem eaque sequi. Modi, veritatis earum commodi voluptatibus ad voluptate aperiam at quas reprehenderit, consectetur minus recusandae est. Aperiam, quia voluptas debitis aliquid recusandae quo repellat quas veniam assumenda obcaecati omnis corrupti, deleniti laboriosam perspiciatis deserunt. Tempore cumque nostrum dicta a, consectetur qui, neque, impedit illum iusto cupiditate ex ipsum cum aliquam pariatur laboriosam minus explicabo. Explicabo accusantium ducimus aperiam quo maxime tempore neque quisquam sunt quam dolorum voluptatum architecto nobis aspernatur, hic molestiae sequi maiores nostrum placeat, voluptatem accusamus officia eligendi ullam cum fugiat. Veritatis, voluptates.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores rem aspernatur odio quidem eaque sequi. Modi, veritatis earum commodi voluptatibus ad voluptate aperiam at quas reprehenderit, consectetur minus recusandae est. Aperiam, quia voluptas debitis aliquid recusandae quo repellat quas veniam assumenda obcaecati omnis corrupti, deleniti laboriosam perspiciatis deserunt. Tempore cumque nostrum dicta a, consectetur qui, neque, impedit illum iusto cupiditate ex quam dolorum voluptatum architecto nobis aspernatur, hic molestiae sequi maiores nostrum placeat, voluptatem accusamus officia eligendi ullam cum fugiat. Veritatis, voluptates.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores rem aspernatur odio quidem eaque sequi. Modi, veritatis earum commodi voluptatibus ad voluptate aperiam at quas reprehenderit, consectetur minus recusandae est. Aperiam, quia voluptas debitis aliquid recusandae quo repellat quas veniam assumenda obcaecati omnis corrupti, deleniti laboriosam perspiciatis deserunt. Tempore cumque nostrum dicta a, consectetur qui, neque, impedit illum iusto cupiditate ex ipsum cum aliquam pariatur laboriosam minus explicabo. Explicabo accusantium ducimus aperiam quo maxime tempore neque quisquam sunt quam dolorum voluptatum architecto nobis aspernatur, hic molestiae sequi maiores nostrum placeat, voluptatem accusamus officia eligendi ullam cum fugiat. Veritatis, voluptates.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores rem aspernatur odio quidem eaque sequi. Modi, veritatis earum commodi voluptatibus ad voluptate aperiam at quas reprehenderit, consectetur minus recusandae est. Aperiam, quia voluptas debitis aliquid recusandae quo repellat quas veniam assumenda obcaecati omnis corrupti, deleniti laboriosam perspiciatis deserunt. Tempore cumque nostrum dicta a, consectetur qui, neque, impedit illum iusto cupiditate ex ipsum cum aliquam pariatur laboriosam minus explicabo. Explicabo accusantium ducimus aperiam quo maxime tempore neque quisquam sunt ullam cum fugiat. Veritatis, voluptates.</p>
    <h4 ref="target" class="opacity-0 translate-y-10" :class="{ 'is-visible': isVisible }">Friend are for friends!!!!</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magni, repellendus nisi alias sit qui! Maiores exercitationem, eum quae accusantium sed unde nemo, deserunt quidem temporibus iure quam optio repellat!</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magni, repellendus nisi alias sit qui! Maiores exercitationem, eum quae accusantium sed unde nemo, deserunt quidem temporibus iure quam optio repellat!</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magni, repellendus nisi alias sit qui! Maiores exercitationem, eum quae accusantium sed unde nemo, deserunt quidem temporibus iure quam optio repellat!</p>
    <h4 ref="redTarget" class="opacity-0 translate-y-10" :class="{ 'is-visible': isVisible }">WHAT WHAT</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit consequuntur perferendis quod architecto molestiae, provident eum praesentium, cum veniam placeat velit earum assumenda pariatur mollitia sunt! Sint, ipsam? Fugit!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit consequuntur perferendis quod architecto molestiae, provident eum praesentium, cum veniam placeat velit earum assumenda pariatur mollitia sunt! Sint, ipsam? Fugit!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit consequuntur perferendis quod architecto molestiae, provident eum praesentium, cum veniam placeat velit earum assumenda pariatur mollitia sunt! Sint, ipsam? Fugit!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit consequuntur perferendis quod architecto molestiae, provident eum praesentium, cum veniam placeat velit earum assumenda pariatur mollitia sunt! Sint, ipsam? Fugit!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit consequuntur perferendis quod architecto molestiae, provident eum praesentium, cum veniam placeat velit earum assumenda pariatur mollitia sunt! Sint, ipsam? Fugit!</p>
    <h2 ref="greenTarget" class="opacity-0 translate-y-10" :class="{ 'is-visible': isVisible }">OMG!!!!!</h2>
</template>

<style scoped>
/* .slide-in.is-visible {
  opacity: 1;
  transform: translateX(0);
  background-color: brown;
    border: 1px solid yellow;
    font-size: 1.5rem;
} */
.is-visible {
    color: red;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
</style>