const timer = {
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
};

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

setInterval(() => {
  const targetTime = timer.targetDate.getTime();
  const currentTime = Date.now();
  const time = targetTime - currentTime;

  const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(
    2,
    '0',
  );
  const hours = String(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  ).padStart(2, '0');
  const mins = String(
    Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
  ).padStart(2, '0');
  const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}, 1000);
