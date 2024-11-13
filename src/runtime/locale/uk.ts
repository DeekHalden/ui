import { defineLocale } from '../composables/defineLocale'

export default defineLocale({
  name: 'Українська',
  code: 'uk',
  messages: {
    inputMenu: {
      noMatch: 'Не знайдено збігів',
      noData: 'Немає даних',
      create: 'Створити "{label}"'
    },
    commandPalette: {
      noMatch: 'Не знайдено збігів',
      noData: 'Немає даних',
      close: 'Закрити'
    },
    selectMenu: {
      noMatch: 'Не знайдено збігів',
      noData: 'Немає даних',
      create: 'Створити "{label}"'
    },
    toast: {
      close: 'Закрити'
    },
    carousel: {
      prev: 'Назад',
      next: 'Далі',
      goto: 'Перейти до {slide}'
    },
    modal: {
      close: 'Закрити'
    },
    slideover: {
      close: 'Закрити'
    },
    alert: {
      close: 'Закрити'
    },
    table: {
      noData: 'Немає даних'
    }
  }
})
