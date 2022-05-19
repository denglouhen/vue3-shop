<template>
  <div class="home">
    <Header />
    <Swiper />
   <About />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Swiper from '@/components/Swiper.vue';
import About from '@/components/About.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Swiper,
    Header,
    About
  },
  setup(){
    const handleClick = ()=>{
      console.log("from hello click")
    }
    return {
      handleClick
    }
  }
});
</script>
