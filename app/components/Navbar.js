export const Navbar = () => {
  const $nav = document.createElement('nav');
  $nav.classList.add('navbar', 'navbar-expand-sm', 'bg-transparent');
  $nav.innerHTML = `
<button class="navbar-toggler mt-3" type="button" data-toggle="collapse"
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
  aria-label="Toggle navigation">
  <span class="holberton_school-icon-menu text-white"></span>
</button>
<a href="#" class="navbar-brand text-center d-block d-sm-none mx-auto">
  <img class="my-3 ml-n5" src="images/smile_off.png" alt="" width="30" height="23" loading="lazy">
  <div class="w-100"></div>
  <img class="ml-n5 mb-3" src="images/logo.png" alt="logo" width="115" height="30" loading="lazy">
</a>
<a href="#" class="navbar-brand text-center d-none d-sm-block   ">
  <img class="m-3" src="images/smile_off.png" alt="" width="36" height="29">
  <img src="images/logo.png" alt="logo" width="115" height="30">
</a>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav d-flex align-items-center d-block d-sm-none">
      <li class="nav-item">
          <a class="nav-link text-white text-uppercase font-weight-bold" href="#/courses">courses
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link text-white text-uppercase font-weight-bold" href="#/pricing">pricing</a>
      </li>
      <li class="nav-item">
          <a href="#" class="nav-link text-white text-uppercase font-weight-bold">login</a>
      </li>
  </ul>
  <ul class="navbar-nav  ml-auto d-none d-sm-flex flex-row align-items-end">
      <li class="nav-item">
          <a class="nav-link text-white text-uppercase font-weight-bold" href="#/courses">courses
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link text-white text-uppercase font-weight-bold" href="#/pricing">pricing</a>
      </li>
      <li class="nav-item">
          <a href="#" class="nav-link text-white text-uppercase font-weight-bold">login</a>
      </li>
  </ul>
</div>
  `;
  return $nav;
};
