<template>
  <div class="about-page">
    <section class="about">
      <div class="left wow animate__fadeIn" data-wow-delay="0.08s">
        <img src="@/assets/about.jpg" class="img-about" />
      </div>
      <div class="right">
        <p class="title wow animate__fadeInDown" data-wow-delay="0.25s">
          Best Organic Fruits<br />And Vegetables
        </p>
        <p class="desc wow animate__fadeInDown" data-wow-delay="0.2s">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <ul class="list wow animate__fadeInDown" data-wow-delay="0.15s">
          <li v-for="(item, index) in list" :key="index">
            <van-icon color="#3cb815" name="success" /> <span>{{ item }}</span>
          </li>
        </ul>
        <van-button
          class="read-btn wow animate__fadeInDown"
          data-wow-delay="0.08s"
          round
          color="#3cb815"
          >Read More</van-button
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  ref
} from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const list: string[] = reactive([
      "Tempor erat elitr rebum at clita",
      "Aliqu diam amet diam et eos",
      "Clita duo justo magna dolore erat amet"
    ]);
    onMounted(() => {
      new proxy.$wow({
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function () {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true // reset animation on end (default is true)
      }).init();
    });
    return {
      list
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
  margin: 8vw;
  display: flex;
  justify-content: center;
  .left {
    position: relative;
    flex: 1;
    &::after {
      content: "";
      position: absolute;
      top: -10%;
      left: -10%;
      width: 60%;
      height: 120%;
      background-image: repeating-radial-gradient(
        #ffffff,
        #eeeeee 5px,
        transparent 5px,
        transparent 10px
      );
      background-size: 20px 20px;
      transform: skew(20deg);
      z-index: 1;
    }
    img {
      width: 36vw;
      z-index: 2;
      position: relative;
    }
  }
  .right {
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .title {
      font-size: calc(1.575rem + 1.9vw);
    }
    .desc {
      font-size: 1.4rem;
      line-height: 1.2;
      color: #666;
    }
    .list {
      font-size: 1.2rem;
      line-height: 2.2;
      color: #666;
    }
    .read-btn {
      width: 12vw;
       font-size: 1.2rem;
    }
  }
}
</style>
