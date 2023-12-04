<template>
  <v-app>
    <v-layout class="rounded rounded-md">

      <v-app-bar flat>
        <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
          <v-icon style="margin: 8px;">mdi-thumbs-up-down</v-icon>
          <span style="font-weight: bold; font-size: 1.3rem;">RATEIT</span>
        </div>
      </v-app-bar>

      <v-main scrollable>
        <router-view v-slot="{ Component }">
          <v-slide-y-reverse-transition leave-absolute>
            <component :is="Component" />
          </v-slide-y-reverse-transition>
        </router-view>
      </v-main>

      <v-footer class="footer" app>
        <v-tabs centered stacked density="compact" fixed-tabs hide-slider>
          <v-tab v-for="tab in tabs" :key="tab.routeName" class="tab" :class="{ 'active': tab.routeName === $route.name }"
            @click="$router.push({ name: tab.routeName })">
            <v-icon size="x-large">{{ tab.icon }}</v-icon>
          </v-tab>
        </v-tabs>
      </v-footer>

    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const $route = useRoute()
const $router = useRouter()

type Tab = {
  text?: string
  icon: string
  routeName: string
}

const tabs = ref<Tab[]>([
  {
    text: 'Создать новую коллекцию',
    icon: 'mdi-plus-circle-outline',
    routeName: 'store',
  },
  {
    text: 'Запустить коллекцию',
    icon: 'mdi-play-circle',
    routeName: 'start',
  },
  {
    text: 'Обзор результатов коллекций',
    icon: 'mdi-circle-slice-3',
    routeName: 'dashboard',
  },
])
</script>

<style lang="scss" scoped>
.app-bar {}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab {
  border-radius: 8px;
  background: rgba(127, 127, 127, .1);
  margin: 0 8px;
  transform: scale(.9);
  transition: .3s ease-in-out;

  &.active {
    background: rgba(127, 127, 127, .4);
    transform: scale(1);
  }
}
</style>
