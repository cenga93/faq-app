<template>
     <section class="reset-password">
          <div class="reset-password__form">
               <h3 class="reset-password__title">Reset your password</h3>
               <reset-password-form />

               <divider label="or" />

               <div class="reset-password__options">
                    <router-link to="/login" class="reset-password__signup-link">Back to login</router-link>
                    <router-link to="/register" class="reset-password__signup-link">Sign Up!</router-link>
               </div>
          </div>
     </section>
</template>

<script>
import { Divider, ResetPasswordForm } from '@/components';

export default {
     name: 'ResetPassword',
     components: { Divider, ResetPasswordForm },
};
</script>

<style lang="scss" scoped>
.reset-password {
     @include authContainer;
}
</style>
