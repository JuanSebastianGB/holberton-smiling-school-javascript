import api from '../helpers/connection_api.js';
import { CourseCard } from './CourseCard.js';

export const CourseVideosCarousel = async () => {
  const $root = document.getElementById('root');
  const customId = `${Date.now()}`;

  const $results = document.createElement('section');
  $results.classList.add('results-section');
  $results.innerHTML = `
  <div class="container py-5">
      <div class="container text-black-50">11 videos</div>
      <div class="row" id="${customId}">
      </div>
  </div>
  `;
  $root.appendChild($results);
  try {
    const { courses } = await $.ajax({ url: api.API_URL_COURSES });
    console.log(courses);
    let html = '';
    courses.map((course) => (html += CourseCard(course)));
    document.getElementById(customId).innerHTML = html;
  } catch (error) {
    console.log(error);
  }
};
