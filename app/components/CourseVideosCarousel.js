import api from '../helpers/connection_api.js';
import { CourseCard } from './CourseCard.js';

export const CourseVideosCarousel = async (props) => {
  let { courseVideoCarouselId, q, topic, sort } = props;
  try {
    let $root = document.getElementById('root');
    let customId = `${Date.now()}`;

    let $results = document.createElement('section');
    $results.id = courseVideoCarouselId;
    $results.classList.add('results-section');

    let data = {
      action: 'query',
      list: 'search',
      format: 'json',
      q,
      topic,
      sort,
    };
    let { courses } = await $.ajax({ url: api.API_URL_COURSES, data }),
      response = await $.ajax({ url: api.API_URL_COURSES, data });
    console.log(response);
    $results.innerHTML = `
      <div class="container py-5">
          <div class="container text-black-50">${courses.length} videos</div>
          <div class="row" id="${customId}">
          </div>
      </div>
      `;
    $root.appendChild($results);

    let html = '';
    courses.map((course) => (html += CourseCard(course)));
    document.getElementById(customId).innerHTML = html;
  } catch (error) {
    console.log(error);
  }
};
