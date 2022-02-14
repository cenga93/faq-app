<template>
     <header class="header">
          <div class="header__contrainer">
               <button class="header__toggler"></button>
               <HeaderMenu />
          </div>
     </header>
</template>

<script>
import HeaderMenu from './HeaderMenu';

export default {
     name: 'Header',
     components: { HeaderMenu },
};
</script>

<style lang="scss">
$toggle_svg: url('../../assets/svg/bars-staggered-solid.svg');

.header {
     border-bottom: 1px solid $color-brand-2;

     &__contrainer {
          @include flex(flex, space-between, center);
          padding: 8px 32px;
     }

     &__toggler {
          @include size(20px);
          background-color: $color-brand-6;
          -webkit-mask-image: $toggle_svg;
          mask-image: $toggle_svg;
          border: none;
          cursor: pointer;
     }
}
</style>
