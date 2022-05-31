import loads from '../helpers/LoagPage.js';

export const Router = async () => {
  let { hash } = location;
  const $root = document.getElementById('root');
  $root.innerHTML = null;

  if (!hash || hash === '#/') {
    loads.LoadHome();
  } else if (hash === '#/courses') {
    loads.LoadCourses();
  } else if (hash === '#/pricing') {
    loads.loadPricing();
  }
};
