export const getLocalTime = (date: Date) => date.toLocaleTimeString('ru-RU', {
  hour: 'numeric',
  minute: 'numeric',
});