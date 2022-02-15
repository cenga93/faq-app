<template>
     <Header />

     <drawer />

     <div class="overlay" :class="showLayout && 'overlay--show'" @click="handleNesto"></div>
</template>

<script>
import { Header, Drawer } from '@/components';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
     name: 'Home',
     components: { Header, Drawer },

     setup() {
          const store = useStore();

          const handleNesto = () => store.dispatch('closeDrawer');

          return {
               handleNesto,
               showLayout: computed(() => store.state.activeLayout),
          };
     },
};
</script>

<style lang="scss" scoped>
.overlay {
     display: none;
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: rgba(0, 0, 0, 0.32);

     &--show {
          display: block;
     }
}
</style>
