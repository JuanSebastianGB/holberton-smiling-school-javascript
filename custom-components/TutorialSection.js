import { TutorialCarousel } from './TutorialCarousel.js';

export const TutorialSection = (props) => {
  console.log(props);
  const tutorialSection = document.createElement('div');
  tutorialSection.classList.add('tutorial-section');
  tutorialSection.innerHTML = `
  <section>
  <h2 class="text-center">Most <span class="text-purple">popular</span> tutorials</h2>
  <div id="carousel-videos-control" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner tutorial-carousel-container mb-5">
        ${TutorialCarousel({ isActive: true }, props)}
        ${TutorialCarousel({ isActive: false }, props)}
          <a class="carousel-control-prev" href="#carousel-videos-control" role="button" data-slide="prev">
              <span class="holberton_school-icon-arrow_4 arrow-black" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel-videos-control" role="button" data-slide="next">
              <span class="holberton_school-icon-arrow_3 arrow-black" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
      </div>
</section>
    `;
  return tutorialSection;
};
