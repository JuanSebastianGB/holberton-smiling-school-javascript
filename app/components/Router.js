import loads from '../helpers/LoadPage.js';

export const Router = async () => {
  let { hash } = location;

  $('body').html('');
  $('body').append('<div id="root"></div>');
  const $root = document.getElementById('root');
  $root.innerHTML = null;

  console.log(hash);
  if (hash === '#') {
    loads.LoadHome();
  } else if (hash === '#/courses') {
    loads.LoadCourses();
  } else if (hash === '#/pricing') {
    loads.loadPricing();
  }
};
