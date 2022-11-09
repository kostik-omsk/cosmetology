import { defineStore } from 'pinia';

export const useListMenu: any = defineStore('listMenuStore', {
  state: () => ({
    listMenu: [
      { title: 'Главная', name: 'home' },
      {
        title: 'Услуги',
        name: 'services',
        children: [
          { title: 'Косметология', name: 'cosmetology' },
          { title: 'Перманентный макияж', name: 'makeup' },
          { title: 'Коррекция фигуры', name: 'bodyshaping' },
          { title: 'Наращивание ресниц', name: 'eyelashes' },
          { title: 'Эпиляция', name: 'epilation' },
        ],
      },
      { title: 'Товары', name: 'products' },
      { title: 'Прайс', name: 'price' },
    ],
    show: false,
    isOpen: false,
  }),
  getters: {
    getShow(): any {
      return this.show;
    },
  },
  actions: {
    toggleMenu(): any {
      this.isOpen = !this.isOpen;
    },
    closeMenu(): any {
      this.show = false;
    },
  },
});
