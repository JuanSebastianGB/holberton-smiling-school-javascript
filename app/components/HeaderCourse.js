import { HeroSectionCourse } from './HeroSectionCourse.js';
import { Navbar } from './Navbar.js';

export const HeaderCourse = () => {
  const $header = document.createElement('header'),
    $root = document.getElementById('root');
  $header.classList.add('header-course', 'pb-5');
  $header.innerHTML = `
      <div class="container"></div>
    `;
  $header.appendChild(Navbar());
  $header.appendChild(HeroSectionCourse());
  $root.appendChild($header);
};
