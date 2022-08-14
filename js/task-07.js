const slider = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

slider.addEventListener('input', event => {
  textChange.style.fontSize = event.currentTarget.value + 'px';
});
