<template>
  <div class="header" :class="isShown ? '' : 'hidden-top'">
    <section
      class="sub-header-top animate__animated"
      :class="isShown ? 'animate__fadeIn' : 'animate__fadeOut'"
    >
      <div class="top-left">
        <van-icon name="location" />
        <span>{{ addressObj.street }},</span>
        <span>{{ addressObj.city }},</span>
        <span>{{ addressObj.country }}</span>
        <van-icon class="icon-phone" name="phone" />
        <span>{{ addressObj.phone }}</span>
      </div>
      <div class="top-right">Follow us</div>
    </section>

    <nav class="nav">
      <div>F<span>oo</span>dy</div>
    </nav>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref
} from "vue";
interface Address {
  street: string;
  city: string;
  country: string;
  phone: string;
}
export default defineComponent({
  name: "Header",
  setup() {
    let isShown = ref(true);
    let addressObj: Address = reactive({
      street: "123 Street",
      city: "New Tork",
      country: "US",
      phone: "400-100-8878"
    });

    onMounted(() => {
      document.addEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 45) {
        isShown.value = false;
      } else {
        isShown.value = true;
      }
    };
    onUnmounted(() => {
      document.removeEventListener("scroll", handleScroll);
    });
    return {
      addressObj,
      isShown
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  transition: all 0.8s;

  background-color: transparent;
  font-size: 0.875em;
  .sub-header-top {
    height: 45px;
    padding: 0 40px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
    .top-left {
      span {
        margin: 0 0.2em 0 0.1em;
      }
      .icon-phone {
        margin-left: 1em;
      }
    }
  }
  .nav {
    height: 60px;
    line-height: 75px;
    div {
      font-size: 2.5rem;
      font-weight: bolder;
      font-family: fangsong;
      color: #3cb815;
      float: left;
      margin-left: 40px;
      span {
        color: #f65005;
      }
    }
  }
}
.hidden-top {
  top: -45px;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>
