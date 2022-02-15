<template>
     <aside class="drawer" :class="drawerIsActive && 'drawer--active'">
          <div class="drawer__head">
               <h2>Faq app</h2>
               <p>v1.0.0</p>
          </div>
          <div class="drawer__body">
               <p class="drawer__body__title">Categories</p>
               <ul class="drawer__body__list">
                    <li class="drawer__body__item">Frontend</li>
                    <li class="drawer__body__item">Backend</li>
                    <li class="drawer__body__item">PhpStorm</li>
                    <li class="drawer__body__item">Linux</li>
               </ul>
          </div>
          <div class="drawer__footer">
               <button class="drawer__footer__button">Add new category</button>
          </div>
     </aside>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
     name: 'Drawer',

     setup() {
          const store = useStore();

          return {
               drawerIsActive: computed(() => store.state.activeDrawer),
          };
     },
};
</script>

<style scoped lang="scss">
.drawer {
     background-color: $color-brand-11;
     position: fixed;
     width: 256px;
     top: 0;
     left: 0;
     bottom: 0;
     transform: translateX(-100%);
     transition: all 0.35s;
     z-index: 1;

     &--active {
          transform: translateX(0);
     }

     &__head {
          padding: 10px;
          background-color: $color-brand-12;
          color: $color-brand-2;

          h2 {
               font-weight: 500;
          }

          p {
               font-size: 12px;
          }
     }

     &__body {
          &__title {
               color: $color-brand-13;
               padding: 30px 10px 10px;
               text-transform: uppercase;
               font-size: 12px;
               font-weight: 500;
          }

          &__list {
               padding: 0;
          }

          &__item {
               position: relative;
               color: $color-brand-14;
               padding: 5px 30px 10px;
               cursor: pointer;

               &:after {
                    content: '';
                    position: absolute;
                    top: 15px;
                    left: 11px;
                    width: 5px;
                    height: 5px;
                    background: $color-brand-14;
                    border-radius: 10px;
               }

               &:hover {
                    color: $color-brand-7;
                    background: $color-brand-12;

                    &:after {
                         background: $color-brand-5;
                    }
               }
          }
     }

     &__footer {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 15px;

          &__button {
               border-radius: 5px;
               color: $color-brand-14;
               font-weight: 500;
               text-transform: uppercase;
               border: none;
               width: 100%;
               padding: 10px 15px;
               display: block;
               background: $color-brand-15;
               transition: all 0.3s;
               cursor: pointer;

               &:hover {
                    color: #fff;
               }
          }
     }
}
</style>
