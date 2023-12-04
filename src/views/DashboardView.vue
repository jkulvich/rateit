<template>
  <v-container class="container">
    <div class="results" v-if="results.length">
      <v-card v-for="(cards, iCards) in results" :key="iCards">
        <v-card-text>
          <div style="display: flex; justify-content: center; align-items: center; gap: 16px;">
            <v-progress-circular size="100" :model-value="score(cards) * 100">
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div>
                  <b>ОЦЕНКА</b>
                </div>
                <div>
                  {{ (realScore(cards) * 100 | 0) }}
                  из
                  {{ (maxScore(cards) * 100 | 0) }}
                </div>
              </div>
            </v-progress-circular>
            <v-progress-circular size="100" :model-value="(realPositives(cards) / cards.length) * 100">
              <div style="display: flex; flex-direction: column; align-items: center;">
                <div>
                  <b>{{ '> 50%' }}</b>
                </div>
                <div>
                  {{ realPositives(cards) }}
                  из
                  {{ cards.length }}
                </div>
              </div>
            </v-progress-circular>
          </div>
        </v-card-text>
        <v-card-text>
          <v-expansion-panels>
            <v-expansion-panel :elevation="0">
              <v-expansion-panel-title>Результаты</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-table>
                  <thead>
                    <tr>
                      <th>Вопрос</th>
                      <th>Важность</th>
                      <th>Оценка</th>
                      <th>Итог</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="card in cards" :key="card.id">
                      <td>{{ card.text }}</td>
                      <td>{{ severityMult(card.severity) }}</td>
                      <td>{{ card.rate }}</td>
                      <td>{{ card.total }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </div>
    <div v-else>
      <v-card>
        <v-card-title style="display: flex; justify-content: center; margin: 12px 0 0 0;">
          <v-avatar color="rgba(127, 127, 127, .2)" size="4rem">
            <EmojiIcon emoji="arrow-right" size="2rem" />
          </v-avatar>
        </v-card-title>
        <v-card-title style="display: flex; justify-content: center;">
          Нет завершённых коллекций
        </v-card-title>
        <v-card-text style="display: flex; justify-content: center;">
          Завершите одну из коллекций чтобы просматривать и сравнивать результаты
        </v-card-text>
        <v-card-actions>
          <v-btn variant="tonal" block color="primary" @click="$router.push({ name: 'start' })">Коллекции</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useHistory } from '@/store/history'
import EmojiIcon from '@/components/atoms/EmojiIcon/EmojiIcon.vue'
import type { SeverityName } from '@/models/terms'
import type { Card } from '@/models/card'
import { useRouter } from 'vue-router'

const $router = useRouter()
const history = useHistory()

const severityMult = (severity: SeverityName) => {
  return {
    'lowest': 0.1,
    'low': 0.25,
    'regular': 0.5,
    'high': 0.75,
    'highest': 1,
  }[severity]
}

// Вычисляет максимально возможный результат коллекции
const maxScore = (cards: Card[]) => {
  let sum = 0
  for (const card of cards) {
    sum += severityMult(card.severity ?? 'regular')
  }
  return sum
}

// Вычисляет результат коллекции
const realScore = (cards: Card[]) => {
  let sum = 0
  for (const card of cards) {
    sum += severityMult(card.severity ?? 'regular') * (card.rate ?? 1)
  }
  return sum
}

const score = (cards: Card[]) => {
  return realScore(cards) / maxScore(cards)
}

const realPositives = (cards: Card[]) => {
  let sum = 0
  for (const card of cards) {
    if ((card.rate ?? 1) > 0.5) {
      sum++
    }
  }
  return sum
}

const results = computed(() => {
  type Result = {
    id: string
    text: string
    rate: number
    total: number
    severity: SeverityName
  }

  const results = [] as Result[][]
  for (const cards of history.list) {
    const res = [] as Result[]
    for (const card of cards) {
      const severity = card.severity ?? 'regular'
      const rate = card.rate ?? 0
      res.push({
        id: card.id,
        text: card.text,
        rate,
        severity,
        total: rate * severityMult(severity)
      })
    }
    results.push(res)
  }
  return results
})
</script>

<style lang="scss" scoped>
.container {
  display: block;
  overflow-y: scroll;
}

.results {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
