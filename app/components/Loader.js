export const Loader = () => {
  const $loader = document.createElement('img'),
    $div = document.createElement('div');

  $div.classList.add('loader-container');
  $div.appendChild($loader);
  $loader.src = './app/public/loader.svg';
  $loader.classList.add('loader');
  $loader.alt = 'Loading...';

  return $div;
};
