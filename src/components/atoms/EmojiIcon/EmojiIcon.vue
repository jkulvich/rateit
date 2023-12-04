<template>
    <div class="wrap">
        <img :src="`./emojis/${props.emoji}.png`" :style="{ width: props.size, height: props.size }" />
        <!-- <div class="icon"></div> -->
    </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, computed } from 'vue'

export type EmojiName = 'construction-sign' | 'arrow-right' | 'downvote' | 'face-cry' | 'face-grinning' |
    'face-neutral' | 'face-sad' | 'face-smiling' | 'face-very-smile' | 'fire' | 'upvote'

const props = withDefaults(defineProps<{
    emoji?: EmojiName
    size?: string
}>(), {
    emoji: 'construction-sign',
    size: '1rem',
})

const emojiPath = computed(() => `url('./emojis/${props.emoji}.png')`)
</script>

<style lang="scss" scoped>
.wrap {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.icon {
    display: inline-block;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: v-bind('emojiPath');
    width: v-bind('props.size');
    height: v-bind('props.size');
}
</style>