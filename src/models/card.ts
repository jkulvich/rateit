import * as Terms from '@/models/terms';

export type Card = {
    /** Уникальный идентификатор карточки в коллекции */
    id: string
    /** Важность карточки */
    severity?: Terms.SeverityName
    /** Шкала оценки */
    grade?: Terms.GradeName
    /** Цветовое оформление */
    background?: Terms.BackgroundName
    /** Отображаемый текст */
    text: string
    /** Результат ответа на карточку (значение от 0 до 1 или undefined).
     * Проставляется только после прохождения коллекции.
     * Необходим для формирования результатов.
    */
    rate?: number
}