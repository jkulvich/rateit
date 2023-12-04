<template>
    <div class="card">
        <div class="severity" :class="[props.severity]">
            <div class="section"></div>
            <div class="section"></div>
            <div class="section"></div>
            <div class="section"></div>
            <div class="section"></div>
        </div>

        <div class="question">
            {{ text }}
        </div>

        <EmojiGrade class="rate" :grade="props.grade" @rate="rate => emit('rate', rate)" />
    </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, computed, defineEmits } from 'vue'
import type { BackgroundName, SeverityName, GradeName } from '@/models/terms'
import EmojiGrade from '@/components/molecules/EmojiGrade/EmojiGrade.vue'

const emit = defineEmits<{
    (e: 'rate', rate: number): void
}>()

const props = withDefaults(defineProps<{
    text: string
    grade?: GradeName
    severity?: SeverityName
    background?: BackgroundName
}>(), {
    grade: 'next',
    severity: 'regular',
    background: 'gray',
})

const background = computed(() => {
    const backgrounds = {
        'gray': 'linear-gradient(201deg, #2C3F4A 0%, #22283E 100%)',
        'green': 'linear-gradient(201deg, #0C5A56 0%, #15340A 100%)',
        'blue': 'linear-gradient(201deg, #1E3A84 0%, #00313C 100%)',
        'purple': 'linear-gradient(201deg, #4F187A 0%, #421B40 100%)',
        'orange': 'linear-gradient(201deg, #4F3000 0%, #3F2000 100%)',
    } as Record<BackgroundName, string>
    return backgrounds[props.background]
})
</script>

<style lang="scss" scope>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    background: v-bind('background');
}

.severity {
    position: absolute;
    left: 4px;
    top: 12px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    gap: 4px;

    & .section {
        width: 4px;
        height: 8px;
        border-radius: 8px;
        opacity: .8;
        background: rgba(127, 127, 127, .8);
    }

    &.lowest .section:nth-child(1) {
        background: #FFFFFF;
    }

    &.low .section:nth-child(1),
    &.low .section:nth-child(2) {
        background: #FFFFFF;
    }

    &.regular .section:nth-child(1),
    &.regular .section:nth-child(2),
    &.regular .section:nth-child(3) {
        background: #FFFFFF;
    }

    &.high .section:nth-child(1),
    &.high .section:nth-child(2),
    &.high .section:nth-child(3),
    &.high .section:nth-child(4) {
        background: #FFFFFF;
    }

    &.highest .section:nth-child(1),
    &.highest .section:nth-child(2),
    &.highest .section:nth-child(3),
    &.highest .section:nth-child(4),
    &.highest .section:nth-child(5) {
        background: #FFFFFF;
    }
}

.question {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    flex-grow: 1;
    margin: 8px 16px;
    text-align: center;
}

.rate {
    margin: 8px;
}
</style>