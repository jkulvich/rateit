<template>
    <div class="grade">
        <v-btn class="emoji" v-for="(emoji, iEmoji) in grade" :key="iEmoji" size="x-large" variant="flat"
            @click="onClick(iEmoji)">
            <EmojiIcon :emoji="emoji" size="2rem" />
        </v-btn>
    </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, computed, defineEmits } from 'vue'
import type { GradeName } from '@/models/terms'
import EmojiIcon, { EmojiName } from '@/components/atoms/EmojiIcon/EmojiIcon.vue'

const emit = defineEmits<{
    (e: 'rate', rate: number): void
}>()

const props = withDefaults(defineProps<{
    grade: GradeName
}>(), {})

const grade = computed(() => {
    const grades = {
        'next': ['arrow-right'],
        'fire': ['fire'],
        'vote': ['downvote', 'upvote'],
        'faces3': ['face-sad', 'face-neutral', 'face-grinning'],
        'faces5': ['face-cry', 'face-sad', 'face-neutral', 'face-grinning', 'face-very-smile'],
    } as Record<GradeName, EmojiName[]>
    return grades[props.grade]
})

const onClick = (i: number) => {
    let rate = 0
    if (grade.value.length <= 1) {
        rate = 1
    } else {
        rate = i / (grade.value.length - 1)
    }
    emit('rate', rate)
}
</script>

<style lang="scss" scoped>
.grade {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}

.emoji {
    flex-grow: 1;
    background-color: rgba(127, 127, 127, .2);
    border-radius: 8px;
    min-width: 0;
    padding: 0;
}
</style>