import { HeroSection } from './HeroSection.js';
import { Navbar } from './Navbar.js';

export const Header = () => {
  const $header = document.createElement('header');
  $header.classList.add('header');
  $header.innerHTML = `
      <div class="container header-section">
      </div>
  `;
  $header.appendChild(Navbar());
  $header.appendChild(HeroSection());
  return $header;
};
