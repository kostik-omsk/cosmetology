<script lang="ts">
  export default {
    name: 'AppCardService',
    props: ['service'],
    setup() {
      const getImgUrl = (url: string) => {
        const imgUrl = new URL(`/src/assets/img/card/${url}`, import.meta.url)
          .href;
        return imgUrl;
      };
      return { getImgUrl };
    },
  };
</script>
<template>
  <div class="card-service">
    <div class="card-service__thumbnail">
      <img :src="getImgUrl(service.urlName)" :alt="service.urlName" />
    </div>
    <div class="card-service__body">
      <h5 class="card-service__title">{{ service.title }}</h5>
      <p class="card-service__description">{{ service.description }}</p>
    </div>
    <button>нажать</button>
  </div>
</template>

<style lang="scss" scoped>
  .card-service {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background: white;
    margin: 16px 0;
    transition: all ease 0.2s;
    &:hover {
      box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
      transform: scale(1.02);
      transition: all ease 0.2s;
    }
    &__thumbnail {
      max-width: 150px;
      max-height: 150px;
      overflow: hidden;
      border-radius: 10px;
      img {
        max-width: 100%;
        max-height: 100%;
        display: block;
      }
    }
    &__body {
      margin: 0 30px;
    }
  }
</style>
