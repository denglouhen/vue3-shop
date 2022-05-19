<template>
  <div class="swiper">
    <van-swipe indicator-color="#3cb815" class="my-swipe" :autoplay="3000">
      <van-swipe-item>
        <div class="item-wrap">
          <div class="slogan animate__animated animate__slideInDown">
            <span>Natural Food Is<br />Always Healthy </span>

            <div class="btns">
              <van-button round color="#3cb815">Products</van-button>
              <van-button round color="#f65005">Services</van-button>
            </div>
          </div>

          <img object-fill="cover" src="@/assets/carousel-1.jpg" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="item-wrap">
          <div class="slogan animate__animated animate__slideInDown">
            <span>Organic Food Is Good<br />For Health</span>
            <div class="btns">
              <van-button round color="#3cb815">Products</van-button>
              <van-button round color="#f65005">Services</van-button>
            </div>
          </div>
          <img src="@/assets/carousel-2.jpg" /></div
      ></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref } from "vue";

export default defineComponent({
  name: "Swiper",
  setup() {
    return {};
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper {
  width: 100%;
  .item-wrap {
    position: relative;
    .slogan {
      position: absolute;
      font-size: calc(1.575rem + 2.9vw);
      left: 15%;
      top: 25%;
      text-align: left;
      span {
        font-family: fantasy;
        color: #2a2a2a;
      }
    }
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    .btns {
      button {
        font-size: 1.3rem;
        padding: 30px;
        margin-right: 30px;
      }
    }
  }
}
</style>
