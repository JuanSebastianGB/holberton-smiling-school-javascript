import { HeroSectionPrice } from './HeroSectionPrice.js';
import { Navbar } from './Navbar.js';

export const HeaderPrice = () => {
  const $header = document.createElement('header'),
    $root = document.getElementById('root');
  $header.classList.add('header-price', 'pb-5');
  $header.innerHTML = `
    <div class="container"></div>
  `;
  $header.appendChild(Navbar());
  $header.appendChild(HeroSectionPrice());
  $root.appendChild($header);
};
