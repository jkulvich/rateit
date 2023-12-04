<template>
    <div class="collection">
        <div v-if="props.active" class="queue">
            <div class="queue-card"></div>
            <div class="queue-card"></div>
            <div class="queue-card"></div>
        </div>
        <transition-group name="card-anim">
            <template v-for="card in props.cards" :key="card.id">
                <RateCard v-if="currentCard.id === card.id" class="card" :text="currentCard.text" :grade="currentCard.grade"
                    :severity="currentCard.severity" :background="currentCard.background" @rate="onRate" />
            </template>
        </transition-group>
        <div class="progress"></div>
    </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, ref, computed, defineEmits } from 'vue'
import type { Card } from '@/models/card'
import RateCard from '@/components/molecules/RateCard/RateCard.vue'

const emit = defineEmits<{
    /** Событие завершения коллекции */
    (e: 'done'): void
    /** Событие запроса на обновление текущей карточки */
    (e: 'update:current', current: string): void
    /** Событие обновления состояния карточек */
    (e: 'update:cards', cards: Card[]): void
}>()

const props = withDefaults(defineProps<{
    /** ID текущей карточки */
    current: string
    /** коллекция карточек */
    cards: Card[]
    /** индикатор активности коллекции, покажет дополнительную декоративность */
    active?: boolean
}>(), {})

// currentCardIndex - ищет индекс соответствующий current id.
const currentCardIndex = computed(() => {
    const foundIndex = props.cards.findIndex(card => card.id === props.current)
    if (foundIndex >= 0) return foundIndex
    return 0
})

// currentCard - ищет обьект текущей карточки.
const currentCard = computed(() => {
    return props.cards[currentCardIndex.value]
})

// nextCardId - возвращает ID следующей карточки.
const nextCardId = (): string | undefined => {
    // Пока базовая линейная логика.
    // В будущем это может быть усложнено условиями переходов в зависимости от ответов.
    return props.cards[currentCardIndex.value + 1]?.id
}

// progress - число от 0 до 1 отображающее прогресс завершения коллекции
const progress = computed(() => `${((currentCardIndex.value + 1) / props.cards.length) * 100}%`)

const onRate = (rate: number) => {
    // Проставляем оценку текущей карточке и выкидываем событие обновления коллекции
    const clone = structuredClone(props.cards)
    clone[currentCardIndex.value].rate = rate
    emit('update:cards', clone)

    // Получаем следующую карточку
    const next = nextCardId()
    if (next) {
        // Если следующая карточка доступна - запрашиваем замену текущего ID на неё
        emit('update:current', next)
    } else {
        // Если карточки закончились - выбрасываем событие завершения коллекции
        emit('done')
    }
}
</script>

<style lang="scss" scoped>
.collection {
    position: relative;
    width: 340px;
    height: 432px;

    .queue {
        position: relative;

        & .queue-card {
            position: absolute;
            width: 340px;
            height: 400px;
            border-radius: 12px;
            background: rgba(127, 127, 127, .1);
            border: 2px solid rgba(127, 127, 127, .1);

            &:nth-child(1) {
                opacity: .6;
                width: 280px;
                top: 0;
                left: 30px;
                animation: queue-card-anim .1s .7s ease-in both;
            }

            &:nth-child(2) {
                opacity: .8;
                width: 300px;
                top: 8px;
                left: 20px;
                animation: queue-card-anim .1s .6s ease-in both;
            }

            &:nth-child(3) {
                opacity: 1;
                width: 320px;
                top: 16px;
                left: 10px;
                animation: queue-card-anim .1s .5s ease-in both;
            }
        }
    }

    .card {
        position: absolute;
        top: 24px;
        width: 340px;
        height: 400px;
    }

    .progress {
        position: relative;
        top: 28px;
        left: 25%;
        width: 50%;
        height: 3px;
        border-radius: 12px;
        background-color: rgba(127, 127, 127, 0.3);

        &:before {
            content: ' ';
            position: absolute;
            height: 100%;
            width: v-bind(progress);
            border-radius: 12px;
            background-color: rgba(255, 255, 255, .8);
            transition: .2s ease-in-out;
        }
    }

    .card-anim {
        &-enter-active {
            z-index: 0;
            transform: scale(1);
            transition: .3s ease-out;
        }

        &-enter-from {
            opacity: 1;
            transform: scale(.9);
        }

        &-leave-active {
            z-index: 1;
            transition: .3s ease-out;
        }

        &-leave-to {
            opacity: 0;
            transform: translateY(24px) scale(1.1);
        }
    }
}

@keyframes queue-card-anim {
    0% {
        filter: opacity(0);
    }

    100% {
        filter: opacity(1);
    }
}
</style>