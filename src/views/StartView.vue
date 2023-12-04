<template>
  <v-container class="container">
    <div class="collections">
      <CollectionViewer class="collection" active v-model:cards="cards" v-model:current="current" @done="onDone" />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, ref, computed, defineEmits } from 'vue'
import CollectionViewer from '@/components/molecules/CollectionViewer/CollectionViewer.vue'
import type { Card } from '@/models/card'
import * as Collections from '@/collections'
import { useHistory } from '@/store/history'
import { useRouter } from 'vue-router'

const $router = useRouter()
const history = useHistory()

const onDone = () => {
  history.push(cards.value)
  $router.push({ name: 'dashboard' })
}

const current = ref('')
const cards = ref<Card[]>(Collections.welcome.cards)
</script>

<style lang="scss" setup>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
}

.collections {
  display: inline-flex;
  gap: 32px;
}

.collection {}
</style>
