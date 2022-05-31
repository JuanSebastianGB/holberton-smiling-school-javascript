import { TutorialCard } from './TutorialCard.js';
import { ajax } from '../helpers/ajax.js';

export const TutorialVideosSection = async (props) => {
  const { customTitle, url, loaderContainerId } = props;
  const videoControlId = `carousel-videos-${Date.now()}`;
  let htmlActive = '';
  let htmlNotActive = '';
  await ajax({
    url,
    cbSuccess: (tutorials) => {
      const totalTutorials = tutorials.length;
      tutorials.map((tutorial, key) => {
        tutorial['sub_title'] = tutorial['sub-title'];
        if (key + 1 <= parseInt(totalTutorials / 2))
          htmlActive += TutorialCard({ ...tutorial, key });
        else htmlNotActive += TutorialCard({ ...tutorial, key });
      });
      document.getElementById(loaderContainerId).style.display = 'none';
    },
  });
  return `
<section class="tutorial-videos-section">
  ${customTitle}
  <div id="${videoControlId}" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner mb-5">
        <div class="carousel-item active">
            <div class="row justify-content-center">
                ${htmlActive}
            </div>
        </div>
        <div class="carousel-item">
            <div class="row justify-content-center">
                ${htmlNotActive}
            </div>
        </div>
        <a class="carousel-control-prev" href="#${videoControlId}" role="button" data-slide="prev">
            <span class="holberton_school-icon-arrow_4 arrow-black" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#${videoControlId}" role="button" data-slide="next">
            <span class="holberton_school-icon-arrow_3 arrow-black" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
  </div>
</section>
  `;
};
