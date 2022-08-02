'use strick';

let date = new Date();

const helloMessage = document.getElementById('hello-message');
const dayWeek = document.getElementById('day-week');
const timeNow = document.getElementById('time-now');
const dayNewyear = document.getElementById('day-newyear');

const dayName = {
  0: 'Воскресенье',
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
};

const init = () => {
  sayMessage();
  weekDay();
  time();
  daysToNewYear();
};

const sayMessage = () => {
  let hours = date.getHours();

  if (0 <= hours < 5) {
    helloMessage.textContent = 'Доброй ночи';
  } else if (5 <= hours < 12) {
    helloMessage.textContent = 'Доброе утро';
  } else if (12 <= hours < 17) {
    helloMessage.textContent = 'Добрый день';
  } else {
    helloMessage.textContent = 'Добрый вечер';
  }
};

const weekDay = () => {
  let days = date.getDay();
  dayWeek.textContent = `Сегодня: ${dayName[days]}`;
};

const time = () => {
  let currentTime = date.toLocaleTimeString('en');
  timeNow.textContent = `Текущее времяя: ${currentTime}`;
};

const daysToNewYear = () => {
  let nowTime = new Date().getTime();
  let nextYear = new Date('1 januar 2023').getTime();
  let timeRemaining = (nextYear - nowTime) / 1000;
  let daysToNewYear = Math.ceil(timeRemaining / 60 / 60 / 24);
  
  dayNewyear.textContent = `До нового года осталось ${daysToNewYear} дней`;
};

init();