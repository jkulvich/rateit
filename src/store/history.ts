import { Card } from '@/models/card'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHistory = defineStore('history', () => {
  const list = ref<Card[][]>([])

  const push = (cards: Card[]) => {
    list.value.push(cards)
  }

  return {
    list,
    push,
  }
})
