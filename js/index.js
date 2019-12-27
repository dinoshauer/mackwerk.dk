const noJs = document.querySelector('.no-js');
noJs.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', function () {
  const waveEl = document.querySelector('.wave');
  setPopIn(waveEl);
});

function setPopIn (el) {
  setTimeout(() => {
    el.style.animationName = 'pop-in';
    el.style.animationDuration = '.5s';
  }, 500)

  el.addEventListener('animationend', () => {
    el.style.transform = 'scale(1)';
    el.style.animationName = 'wave';
    el.style.animationDuration = '1s';
    el.style.animationDelay = '.2s';
    el.style.animationIterationCount = 'infinite';
  })
}
