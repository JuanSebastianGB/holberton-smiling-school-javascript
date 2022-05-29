export const TutorialCarousel = ({ isActive }) => {
  const tutorialCarousel = `
    <div class="carousel-item ${isActive ? 'active' : ''}">
    <div class="row  ${
      isActive ? 'row-active' : 'row-inactive'
    } justify-content-center">

    </div>
</div>
    `;
  return tutorialCarousel;
};
