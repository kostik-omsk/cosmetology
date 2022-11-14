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
    <img :src="getImgUrl(service.urlName)" :alt="service.urlName" />
    <div class="card-service__body">
      <h5 class="card-service__title">{{ service.title }}</h5>
      <p class="card-service__description">{{ service.description }}</p>
      <button>нажать</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card-service {
  }
</style>
