const stylesheets = document.querySelectorAll('.js-toggle-styles-stylesheet');
const button = document.querySelector('.js-toggle-styles-button');
const handleButtonClick = (event) => {
  event.target.classList.toggle('is-off');
  stylesheets.forEach((item) => item.toggleAttribute('disabled'));
};

const init = () => button.addEventListener('click', handleButtonClick);

export default init();
