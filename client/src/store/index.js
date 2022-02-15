import { createStore } from 'vuex';

export default createStore({
     state: {
          activeDrawer: false,
          activeLayout: false,
     },
     mutations: {
          openDrawer: (state) => {
               state.activeDrawer = true;
               state.activeLayout = true;
          },
          closeDrawer: (state) => {
               state.activeDrawer = false;
               state.activeLayout = false;
          },
     },
     actions: {
          openDrawer({ commit }) {
               commit('openDrawer');
          },
          closeDrawer({ commit }) {
               commit('closeDrawer');
          },
     },
     modules: {},
});
