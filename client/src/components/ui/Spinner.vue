<template>
     <div class="spinner">
          <span></span>
          <span></span>
          <span></span>
     </div>
</template>

<script>
export default {
     name: 'Spinner',
};
</script>

<style lang="scss">
.spinner {
     @include size(80px);
     display: inline-block;
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);

     span {
          display: inline-block;
          position: absolute;
          left: 8px;
          width: 16px;
          background: $color-white;
          animation: spinnerAnimation 0.8s cubic-bezier(0, 0.5, 0.5, 1) infinite;

          &:nth-child(1) {
               left: 8px;
               animation-delay: -0.24s;
          }
          &:nth-child(2) {
               left: 32px;
               animation-delay: -0.12s;
          }
          &:nth-child(3) {
               left: 56px;
               animation-delay: 0s;
          }
     }
}

@keyframes spinnerAnimation {
     0% {
          top: 8px;
          height: 64px;
     }
     50%,
     100% {
          top: 24px;
          height: 32px;
     }
}
</style>
