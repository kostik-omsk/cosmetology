<script lang="ts">
  import { storeToRefs } from 'pinia';
  import { gsap } from 'gsap';
  import { onMounted, watch } from 'vue';
  import AppNavbarListMenu from './AppNavbarListMenu.vue';
  import { useListMenu } from '../stores/ListMenu';

  export default {
    name: 'AppNavbar',
    components: { AppNavbarListMenu },
    setup() {
      //pinia.register
      const menuStore = useListMenu();
      const { listMenu, show, getShow } = storeToRefs(menuStore);
      //animation menu
      let aniMenu = gsap.timeline({
        paused: true,
      });
      //убить остатки динамического стиля
      const killTimeline = (timeline: any) => {
        const targets = timeline.getChildren();

        timeline.kill();

        for (let i = 0; i < targets.length; i++) {
          if (targets[i].targets().length) {
            gsap.set(targets[i].targets(), { clearProps: 'all' });
          }
        }
      };
      // Показ menu
      const showMenu = () => {
        show.value = !show.value;
      };
      watch(getShow, () => {
        if (show.value) {
          aniMenu.play();
        } else {
          aniMenu.reverse();
          gsap.delayedCall(0.6, () => killTimeline(aniMenu));
        }
      });
      onMounted(() => {
        aniMenu
          .set('#app', { height: '90%', overflow: 'hidden' })
          .to('#app', {
            scale: 0.88,
            x: '380px',
            duration: 0.6,
            ease: 'power1.inOut',
          })
          .from('.menu-list', { x: 150, duration: 0.6 }, 0);
        // Закрытие мену при нажатии на слайд страници
        let sub = document.querySelector('#app');
        if (sub) {
          sub.addEventListener('click', () => {
            if (show.value == true) {
              showMenu();
            }
          });
        }
      });

      return { showMenu, listMenu, show };
    },
  };
</script>
<template>
  <div class="my-navbar">
    <nav>
      <div class="menu-burger">
        <div id="nav-icon" @click.stop="showMenu" :class="{ open: show }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="logo">
        <router-link :to="{ name: 'home' }">
          <img src="../assets/logo/logo.svg" alt="logo" height="50" />
          <h5>салон красоты</h5>
        </router-link>
      </div>
      <div class="tel">
        <a href="tel:+79133851386">
          <i class="bi bi-telephone"></i>
          <strong>+7 (913) 385-13-86</strong>
        </a>
      </div>
    </nav>
    <teleport to="body">
      <AppNavbarListMenu v-show="show" :listMenu="listMenu" />
    </teleport>
  </div>
</template>
<style lang="scss" scoped>
  .my-navbar {
    padding: 5px 20px;
    margin: 0 auto;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .menu-burger {
      cursor: pointer;
      #nav-icon {
        height: 40px;
        width: 50px;
        display: grid;
        align-content: space-around;
        position: relative;
        overflow: hidden;
        span {
          position: relative;
          display: block;
          width: 100%;
          height: 5px;
          border-radius: 3px;
          background: #3c3c3c;
        }
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          height: 150%;
          mix-blend-mode: screen;
          background: #a3dc59;
          transition: all 0.5s ease-out;
          transform: translate(-27px, -15px) rotate(45deg);
        }
        &:hover::after {
          transform: translate(70px, -5px) rotate(45deg);
        }
      }
    }

    .logo {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .tel {
      a {
        display: flex;
        font-size: 22px;
        strong {
          font-weight: 800;
        }
      }
      @media (max-width: 996px) {
        display: none;
      }
    }
  }
</style>
