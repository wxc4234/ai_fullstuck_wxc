<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="move">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.move-enter-active, .move-leave-active{
  transition: all 0.3s ease-out;
}

.move-enter-from, .move-leave-to{
  transform: translateX(30px);
  opacity: 0;
}

.move-enter-to, .move-leave-from{
  transform: translateX(0px);
  opacity: 1;
}
</style>