// Глобальное состояние для управления блокировкой прокрутки
let count = 0;
const html = document.documentElement;

export function incrementModalCount() {
  count += 1;
  if (count === 1) {
    html.classList.add('is-locked');
  }
}

export function decrementModalCount() {
  count = Math.max(0, count - 1);
  if (count === 0) {
    html.classList.remove('is-locked');
  }
}