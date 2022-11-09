<script lang="ts"></script>

<template>
  <section class="intro">
    <div class="intro__bg-image"></div>
    <div class="intro__blog blog">
      <h1 class="block__title">Совершенство доступно</h1>
      <div class="block__text">
        Салон красоты Chloe
        <br />
        <i class="bi bi-geo-alt"></i>
        Кольцово, Технопрковая 1
        <br />
      </div>
      <div class="block__icons">
        <a href="https://www.instagram.com/anastasiya__dankina/" target="_blank"
          ><i class="bi bi-instagram"></i
        ></a>
        <a href="https://www.t.me/chloe_dankina" target="_blank"
          ><i class="bi bi-telegram"></i
        ></a>
        <a
          href="https://api.whatsapp.com/send?phone=79133851386"
          target="_blank"
          ><i class="bi bi-whatsapp"></i
        ></a>
      </div>
    </div>
  </section>
  <div></div>
</template>
<style lang="scss">
  .intro {
    height: calc(100vh - 92px);
    // position: relative;

    &__bg-image {
      position: absolute;
      z-index: 1;
      height: 100%;
      width: 100%;
      background: url(../assets/img/home-img.jpg) center top/cover no-repeat
        content-box;
    }
    &__blog {
      display: flex;
      z-index: 10;
    }
  }
</style>
