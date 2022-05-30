export const Loader = (props) => {
  const { color, id } = props;
  const $loader = document.createElement('img'),
    $div = document.createElement('div');

  $div.classList.add('loader-container');
  $div.appendChild($loader);
  $div.id = id;
  $loader.src = `./app/public/loader-${color}.svg`;
  $loader.classList.add('loader');
  $loader.alt = 'Loading...';
  $div.style.backgroundColor = `${color === 'white' ? '#c273fc' : 'white'}`;

  return $div;
};
