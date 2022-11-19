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
  <div class="my-card mb-4">
    <div class="row justify-content-center">
      <div class="col-md-4 thumbnail">
        <img
          class="my-card__img rounded mx-auto"
          :src="getImgUrl(service.urlName)"
          alt="Card image"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title mb-1">{{ service.title }}</h3>
          <p class="">{{ service.description }}</p>
          <button>ыыыыы</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .my-card {
    padding: 0 12px;
    .thumbnail {
      max-height: 340px;
      max-width: 250px;
      @media (max-width: 768px) {
        max-height: 250px;
        max-width: 100%;
      }
    }
    &__img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    .card-title {
      font-weight: 700;
    }
  }
</style>
