<template>
     <section class="register">
          <div class="register__form">
               <h3 class="register__title">Sign In</h3>
               <register-form />

               <divider label="or" />

               <div class="register__options">
                    <router-link to="/login" class="register__signup-link">Back to login</router-link>
               </div>
          </div>
     </section>
</template>

<script>
import { Divider, RegisterForm } from '@/components';

export default {
     name: 'Register',
     components: { Divider, RegisterForm },
};
</script>

<style lang="scss" scoped>
.register {
     @include authContainer;
}
</style>
