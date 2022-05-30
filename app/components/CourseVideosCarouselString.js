import api from '../helpers/connection_api.js';
import { CourseCard } from './CourseCard.js';

export const CourseVideosCarouselString = async (props) => {
  let { q, topic, sort } = props;
  let customId = `${Date.now()}`;

  try {
    let data = {
      action: 'query',
      list: 'search',
      format: 'json',
      q,
      topic,
      sort,
    };
    let { courses } = await $.ajax({ url: api.API_URL_COURSES, data });

    let html = '';
    courses.map((course) => (html += CourseCard(course)));
    return `
      <div class="container py-5">
          <div class="container text-black-50">${courses.length} videos</div>
          <div class="row" id="${customId}">
            ${html}
          </div>
      </div>
      `;
  } catch (error) {
    console.log(error);
  }
};
