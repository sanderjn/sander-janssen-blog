<template>
  <div class="absolute -my-10 md:-my-16 w-full h-full overflow-hidden z-0">
    <SkewTop class="skewclass skewtop absolute top-0 w-full h-auto"/>
    <!-- <SkewRight class="absolute hidden lg:block top-0 right-0 h-full w-auto" style="transform:scale(1.03)"/> -->
    <SkewBottom class="skewclass skewbottom absolute bottom-0 w-full h-auto"/>
    <!-- <SkewLeft class="absolute hidden lg:block top-0 left-0 h-full w-auto" style="transform:scale(1.03)"/> -->
  </div>
</template>

<script>
import SkewTop from '~/assets/images/svg/skew-top.svg';
import SkewRight from '~/assets/images/svg/skew-right.svg';
import SkewBottom from '~/assets/images/svg/skew-bottom.svg';
import SkewLeft from '~/assets/images/svg/skew-left.svg';

export default {
	components: {
    SkewTop,
    SkewRight,
    SkewBottom,
    SkewLeft,
  },
}
</script>