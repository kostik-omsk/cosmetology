<script lang="ts">
  import AppCardService from '../components/AppCardService.vue';
  import { storeToRefs } from 'pinia';
  import { useListServices } from '../stores/ListServices';
  export default {
    components: { AppCardService },
    setup() {
      const listServices = useListServices();
      const { listService } = storeToRefs(listServices);

      return { listService };
    },
  };
</script>

<template>
  <section class="intro">
    <div class="intro__block">
      <h1 class="block-title">Совершенство доступно</h1>
      <div class="block-text block-text-green">
        <i class="bi bi-geo-alt"></i>
        Кольцово, Технопaрковая 1
      </div>
      <div class="block-icons">
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
    <div class="intro__image">
      <img class="" src="../assets/img/nastia__bg.png" alt="nastia" />
    </div>
  </section>
  <section class="services section">
    <div class="section-header">
      <h2 class="section-header__title">Пять основных направлений</h2>
      <p class="section-header__description">Ваш путь к совершенству</p>
    </div>
    <div class="card-list">
      <AppCardService
        v-for="(service, i) in listService"
        :key="i"
        :service="service"
      />
    </div>
  </section>
  <section>
    <div class="logo-bar section">
      <div class="section-header">
        <h2 class="section-header__title">
          Косметика по уходу за лицом и телом
        </h2>
        <p class="section-header__description">В продаже представлены бренды</p>
      </div>
      <!-- <div class="row justify-content-center align-items-center">
        <div class="logo-bar__item" v-for="logo in logoBar" :key="logo.name">
          <img :src="require('@/assets/images/logo/' + logo.name)" />
        </div>
      </div> -->
    </div>
  </section>
</template>
<style lang="scss">
  .intro {
    min-height: calc(100vh - 92px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    color: #fff;

    @media (max-width: 660px), (orientation: portrait) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
    &__block {
      .block-title {
        font-weight: 700;
        font-size: 2.8rem;
        @media (max-width: 425px) {
          font-size: 1.5rem;
        }
        @media (min-width: 425px) and (max-width: 767.98px) {
          font-size: 1.7rem;
        }
        @media (min-width: 767.98px) and (max-width: 1200px) {
          font-size: 1.5rem;
        }
      }

      .block-text {
        font-size: 1.3rem;
      }

      .block-icons {
        display: flex;
        gap: 20px;
        a {
          font-size: 2rem;
          :hover {
            transition: all 0.3s ease-out;
            text-shadow: 1px 2px 3px rgb(75, 75, 75);
            color: #a3dc59;
          }
        }
      }
    }
    &__image {
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .section {
    padding: 20px 0;
    .section-header {
      text-align: center;
      &__title {
        font-size: 1.5rem;
        font-weight: bold;
        @media (max-width: 425px) {
          font-size: 1.3rem;
        }
      }
      &__description {
        font-size: 1.3rem;
        @media (max-width: 425px) {
          font-size: 1.1rem;
        }
      }
    }
  }
</style>
