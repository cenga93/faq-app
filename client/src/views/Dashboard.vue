<template>
     <Header />
     <drawer />
     <div class="overlay" :class="showLayout && 'overlay--show'" @click="hideOverlay"></div>
     <router-view />
</template>

<script>
import { Header, Drawer } from '@/components';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
     name: 'Dashboard',
     components: { Header, Drawer },

     setup() {
          const store = useStore();

          return {
               hideOverlay: () => store.dispatch('closeDrawer'),
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
