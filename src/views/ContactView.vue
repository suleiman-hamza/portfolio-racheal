<script setup lang="ts">
import { onMounted, shallowRef, useTemplateRef , ref} from 'vue';
import type { Ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const element = useTemplateRef<HTMLElement>('element');
    const element2 = useTemplateRef<HTMLElement>('element2');
    // const element3 = useTemplateRef<HTMLElement>('element3');
    const isVisible = shallowRef(false);
    const isVisible2 = shallowRef(false);
    // const isVisible3 = shallowRef(false);


const { stop } = useIntersectionObserver(
    [element, element2],
    ([entry], observerElem) => {
        console.log(observerElem, entry)
        isVisible2.value = entry.isIntersecting || false
    }
)

</script>


<template>
    <p>Contact page is now live!!!!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores rem aspernatur odio quidem eaque sequi. Modi, veritatis earum commodi voluptatibus ad voluptate aperiam at quas reprehenderit, consectetur minus recusandae est. Aperiam, quia voluptas debitis aliquid recusandae quo repellat quas veniam assumenda obcaecati omnis corrupti, deleniti laboriosam perspiciatis deserunt. Tempore cumque nostrum dicta a, consectetur qui, neque, impedit illum iusto cupiditate ex ipsum cum aliquam pariatur laboriosam minus explicabo. Explicabo accusantium ducimus aperiam quo maxime tempore neque quisquam sunt quam dolorum voluptatum architecto nobis aspernatur, hic molestiae sequi maiores nostrum placeat, voluptatem accusamus officia eligendi ullam cum fugiat. Veritatis, voluptates.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores rem aspernatur odio quidem eaque sequi. Modi, veritatis earum commodi voluptatibus ad voluptate aperiam at quas reprehenderit, consectetur minus recusandae est. Aperiam, quia voluptas debitis aliquid recusandae quo repellat quas veniam assumenda obcaecati omnis corrupti, deleniti laboriosam perspiciatis deserunt. Tempore cumque nostrum dicta a, consectetur qui, neque, impedit illum iusto cupiditate ex ipsum cum aliquam pariatur laboriosam minus explicabo. Explicabo accusantium ducimus aperiam quo maxime tempore neque quisquam sunt quam dolorum voluptatum architecto nobis aspernatur, hic molestiae sequi maiores nostrum placeat, voluptatem accusamus officia eligendi ullam cum fugiat. Veritatis, voluptates.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores rem aspernatur odio quidem eaque sequi. Modi, veritatis earum commodi voluptatibus ad voluptate aperiam at quas reprehenderit, consectetur minus recusandae est. Aperiam, quia voluptas debitis aliquid recusandae quo repellat quas veniam assumenda obcaecati omnis corrupti, deleniti laboriosam perspiciatis deserunt. Tempore cumque nostrum dicta a, consectetur qui, neque, impedit illum iusto cupiditate ex ipsum cum aliquam pariatur laboriosam minus explicabo. Explicabo accusantium ducimus aperiam quo maxime tempore neque quisquam sunt quam dolorum voluptatum architecto nobis aspernatur, hic molestiae sequi maiores nostrum placeat, voluptatem accusamus officia eligendi ullam cum fugiat. Veritatis, voluptates.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores rem aspernatur odio quidem eaque sequi. Modi, veritatis earum commodi voluptatibus ad voluptate aperiam at quas reprehenderit, consectetur minus recusandae est. Aperiam, quia voluptas debitis aliquid recusandae quo repellat quas veniam assumenda obcaecati omnis corrupti, deleniti laboriosam perspiciatis deserunt. Tempore cumque nostrum dicta a, consectetur qui, neque, impedit illum iusto cupiditate ex ipsum cum aliquam pariatur laboriosam minus explicabo. Explicabo accusantium ducimus aperiam quo maxime tempore neque quisquam sunt quam dolorum voluptatum architecto nobis aspernatur, hic molestiae sequi maiores nostrum placeat, voluptatem accusamus officia eligendi ullam cum fugiat. Veritatis, voluptates.</p>
    <section class="red">
        <div ref="element" :class="{ 'is-visible': isVisible }" class="slide-in"><p>SSSHAHHSHS</p></div>
    </section>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magni, repellendus nisi alias sit qui! Maiores exercitationem, eum quae accusantium sed unde nemo, deserunt quidem temporibus iure quam optio repellat!</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magni, repellendus nisi alias sit qui! Maiores exercitationem, eum quae accusantium sed unde nemo, deserunt quidem temporibus iure quam optio repellat!</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur magni, repellendus nisi alias sit qui! Maiores exercitationem, eum quae accusantium sed unde nemo, deserunt quidem temporibus iure quam optio repellat!</p>
    <h4 ref="element2" :class="{ 'is-visible': isVisible2 }" class="slide-in">WHAT WHAT</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit consequuntur perferendis quod architecto molestiae, provident eum praesentium, cum veniam placeat velit earum assumenda pariatur mollitia sunt! Sint, ipsam? Fugit!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit consequuntur perferendis quod architecto molestiae, provident eum praesentium, cum veniam placeat velit earum assumenda pariatur mollitia sunt! Sint, ipsam? Fugit!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit consequuntur perferendis quod architecto molestiae, provident eum praesentium, cum veniam placeat velit earum assumenda pariatur mollitia sunt! Sint, ipsam? Fugit!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit consequuntur perferendis quod architecto molestiae, provident eum praesentium, cum veniam placeat velit earum assumenda pariatur mollitia sunt! Sint, ipsam? Fugit!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit consequuntur perferendis quod architecto molestiae, provident eum praesentium, cum veniam placeat velit earum assumenda pariatur mollitia sunt! Sint, ipsam? Fugit!</p>
</template>

<style scoped>
.slide-in {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  display: inline-block;
  width: 100%;

}

.slide-in.is-visible {
  opacity: 1;
  transform: translateX(0);
  background-color: brown;
    border: 1px solid yellow;
    font-size: 1.5rem;
}
</style>