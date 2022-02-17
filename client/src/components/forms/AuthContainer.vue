<template>
     <section :class="className">
          <div :class="className + '__container'">
               <h3 :class="className + '__title'">Sign In</h3>
               <slot name="form-slot"></slot>

               <divider :label="dividerLabel ? dividerLabel : 'or'" />

               <div :class="className + '__options'">
                    <slot name="options-slot"></slot>
               </div>
          </div>
     </section>
</template>

<script>
import { Divider } from '@/components';
export default {
     name: 'AuthContainer',
     components: { Divider },
     props: {
          className: {
               type: String,
               required: true,
          },
          dividerLabel: {
               type: String,
               required: false,
          },
     },
};
</script>
