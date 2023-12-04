import { Collection } from '@/models/collection'

export const welcome = {
    cards: [
        {
            id: 'welcome',
            severity: 'lowest',
            text: 'Знакомство с приложением RATEIT',
            background: 'gray',
            grade: 'next',
        },
        {
            id: 'desc1',
            severity: 'lowest',
            text: 'Эта коллекция познакомит вас с концепцией и возможностями приложения',
            background: 'gray',
            grade: 'next',
        },
        {
            id: 'desc2',
            severity: 'lowest',
            text: 'Когда вам необходимо оценить что-либо - вы просто запускаете соответствующую коллекцию карточек и отвечаете на быстрые вопросы',
            background: 'gray',
            grade: 'next',
        },

        {
            id: 'desc4',
            severity: 'lowest',
            text: 'Пройдёмся по пользовательскому интерфейсу',
            background: 'blue',
            grade: 'next',
        },
        {
            id: 'desc5',
            severity: 'lowest',
            text: 'На коллекцию карточек можно отвечать несколько раз, а затем сравнить результаты на вкладке справа внизу',
            background: 'blue',
            grade: 'fire',
        },
        {
            id: 'desc6',
            severity: 'lowest',
            text: 'В верхнем левом углу этой карточки вы можете видеть шкалу - она отображает важность карточки',
            background: 'blue',
            grade: 'next',
        },
        {
            id: 'desc7',
            severity: 'lowest',
            text: 'Важность влияет на вес ответа, чем он выше - тем более сильное влияние ответ окажет на результат',
            background: 'blue',
            grade: 'next',
        },
        {
            id: 'desc8',
            severity: 'lowest',
            text: 'Например, на этой карточке шкала имеет низший приоритет',
            background: 'orange',
            grade: 'next',
        },
        {
            id: 'desc9',
            severity: 'regular',
            text: 'Здесь у нас карточка со средним приоритетом',
            background: 'orange',
            grade: 'next',
        },
        {
            id: 'desc10',
            severity: 'highest',
            text: 'Правильно, а тут с наивысшим!',
            background: 'orange',
            grade: 'fire',
        },

        {
            id: 'desc11',
            severity: 'lowest',
            text: 'Вероятно, вы заметили полосу прогресса, которая отображает на каком этапе вы находитесь в коллекции',
            background: 'blue',
            grade: 'fire',
        },

        {
            id: 'desc12',
            severity: 'regular',
            text: 'До этого мы пользовались только одной кнопкой, но мы можем что-то оценивать, попробуйте',
            background: 'green',
            grade: 'vote',
        },
        {
            id: 'desc13',
            severity: 'regular',
            text: 'Отлично, у нас есть разные шкалы для оценки',
            background: 'green',
            grade: 'next',
        },
        {
            id: 'desc14',
            severity: 'regular',
            text: 'Где-то будет достаточно простого да/нет, а где-то нужен более широкий выбор',
            background: 'green',
            grade: 'next',
        },

        {
            id: 'desc15',
            severity: 'highest',
            text: 'Попробуйте оценить, как прошёл ваш сегодняшний день в целом',
            background: 'purple',
            grade: 'faces3',
        },
        {
            id: 'desc160',
            severity: 'highest',
            text: 'Или добавим больше гибкости, попробуйте ещё раз провести оценку дня',
            background: 'purple',
            grade: 'faces5',
        },

        {
            id: 'desc16',
            severity: 'lowest',
            text: 'Отлично, мы ознакомились с основным функционалом RATEIT',
            background: 'gray',
            grade: 'next',
        },
        {
            id: 'desc17',
            severity: 'lowest',
            text: 'Вы спросите, какая польза от этого приложения в целом?',
            background: 'gray',
            grade: 'next',
        },
        {
            id: 'desc18',
            severity: 'lowest',
            text: 'Ну, например, вы можете создать коллекцию для оценки работодателя после собеседования',
            background: 'gray',
            grade: 'next',
        },
        {
            id: 'desc19',
            severity: 'lowest',
            text: 'А затем, провести оценку несколько раз и выбрать того, кто подходит лучше под ваши критерии',
            background: 'gray',
            grade: 'next',
        },
        {
            id: 'desc20',
            severity: 'lowest',
            text: 'В обратную сторону тоже работает, вы можете оценить нового кандидата на должность',
            background: 'gray',
            grade: 'fire',
        },

        {
            id: 'desc21',
            severity: 'lowest',
            text: 'Наша ознакомительная коллекция подходит к концу',
            background: 'green',
            grade: 'next',
        },
        {
            id: 'desc22',
            severity: 'lowest',
            text: 'После ответа на эту карточку вы перейдёте к результатам. Хорошего дня!',
            background: 'green',
            grade: 'fire',
        },
    ]
} as Collection