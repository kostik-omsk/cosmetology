<script lang="ts">
  import AppCardService from '../components/AppCardService.vue';
  import { storeToRefs } from 'pinia';
  import { useListServices } from '../stores/ListServices';
  export default {
    components: { AppCardService },
    setup() {
      const listServices = useListServices();
      const { listService } = storeToRefs(listServices);
      const logoBar = [
        { name: 'gigi.svg' },
        { name: 'city.svg' },
        { name: 'uton.svg' },
        { name: 'storyderm.svg' },
        { name: 'Isov.svg' },
        { name: 'evasion.svg' },
      ];
      const getImgUrl = (url: string) => {
        const imgUrl = new URL(`/src/assets/logo/${url}`, import.meta.url).href;
        return imgUrl;
      };

      return { listService, logoBar, getImgUrl };
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
    <div class="wrap-bg">
      <div class="section-header">
        <h2 class="section-header__title">Пять основных направлений</h2>
        <p class="section-header__description">Ваш путь к совершенству</p>
      </div>
    </div>
    <div class="card-list">
      <AppCardService
        v-for="service in listService"
        :key="service.id"
        :service="service"
      />
    </div>
  </section>

  <section class="logo-bar section">
    <div class="wrap-bg">
      <div class="section-header">
        <h2 class="section-header__title">
          Косметика по уходу за лицом и телом
        </h2>
        <p class="section-header__description">В продаже представлены бренды</p>
      </div>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class="logo-bar__item" v-for="logo in logoBar" :key="logo.name">
        <img :src="getImgUrl(logo.name)" :alt="logo.name" />
      </div>
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
    .wrap-bg {
      height: 115px;
      margin-bottom: 30px;
      .section-header {
        position: absolute;
        left: 0;
        min-width: 100vw;
        background: #4c4c4c;
        text-align: center;
        padding: 20px 0;

        &__title {
          color: #a3dc59;
          font-weight: bold;
          margin: 0;
          @media (max-width: 425px) {
            font-size: 1.3rem;
          }
        }
        &__description {
          color: #a3dc59;
          font-size: 1.3rem;
          margin: 0;
          @media (max-width: 425px) {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
  .logo-bar {
    .logo-bar__item {
      max-width: 190px;
      padding: 5px 10px;
      @media (max-width: 768px) {
        max-width: 130px;
      }
    }
  }
</style>
