<template>
     <section class="verify">
          <div class="verify__form">
               <h3 class="verify__title">Chech your email</h3>

               <verify-form />
          </div>
     </section>
</template>

<script>
import { VerifyForm } from '@/components';

export default {
     name: 'Verify',
     components: { VerifyForm },
};
</script>

<style lang="scss" scoped>
.verify {
     @include authContainer;
}
</style>
