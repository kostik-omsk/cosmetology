<script lang="ts"></script>

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
  <section class="services">
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum
      error molestias facere dignissimos voluptatum eum eveniet inventore
      consequatur! Optio cupiditate voluptate id deserunt ab. Animi libero
      voluptatem deserunt eveniet. Voluptatibus vitae, nemo saepe odio natus
      tenetur molestias excepturi dolore suscipit consectetur fugiat, minima nam
      amet recusandae sed. Vel quam quibusdam voluptates. Non quos, inventore
      impedit illum quaerat cumque commodi! Praesentium fugiat soluta
      consequatur doloribus nulla facilis accusamus est deserunt, repellat
      voluptatibus iure hic minima culpa dolores dicta eum velit aliquid quis
      quas ullam. Facilis sit ex illum suscipit quas. Iste dolore obcaecati
      minus natus rerum ut quae fuga dolores assumenda. Quo aut eos corrupti
      quidem nobis, officia eveniet provident tenetur asperiores, perferendis
      voluptatibus voluptatum ea et laudantium autem amet.
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
</style>
