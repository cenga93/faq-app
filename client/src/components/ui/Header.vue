<template>
     <header class="header">
          <div class="header__contrainer">
               <button class="header__toggle" @click="handleToggleClick"></button>
               <HeaderMenu />
          </div>
     </header>
</template>

<script>
import { useStore } from 'vuex';
import HeaderMenu from './HeaderMenu';

export default {
     name: 'Header',
     components: { HeaderMenu },
     setup() {
          const store = useStore();

          return {
               handleToggleClick: () => store.dispatch('openDrawer'),
          };
     },
};
</script>

<style lang="scss">
$toggle_svg: url('../../assets/svg/bars-staggered-solid.svg');

.header {
     background-color: $color-white;

     &__contrainer {
          @include flex(flex, space-between, center);
          padding: 8px 32px;
     }

     &__toggle {
          @include size(20px);
          background-color: $color-brand-6;
          -webkit-mask-image: $toggle_svg;
          mask-image: $toggle_svg;
          border: none;
          cursor: pointer;
     }
}
</style>
