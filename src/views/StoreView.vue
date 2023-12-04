<template>
  <v-container>
    <v-card>
      <v-card-title style="display: flex; justify-content: center; margin: 12px 0 0 0;">
        <v-avatar color="rgba(127, 127, 127, .2)" size="4rem">
          <EmojiIcon emoji="construction-sign" size="2rem" />
        </v-avatar>
      </v-card-title>
      <v-card-title style="display: flex; justify-content: center;">
        Раздел в разработке
      </v-card-title>
      <v-card-text style="display: flex; justify-content: center;">
        Здесь планируется конструктор и "магазин" пользовательских коллекций
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import EmojiIcon from '@/components/atoms/EmojiIcon/EmojiIcon.vue'
</script>

<style lang="scss" setup></style>
