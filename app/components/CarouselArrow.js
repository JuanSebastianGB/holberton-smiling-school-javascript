export const CarouselArrow = (props) => {
  const { direction, videoControlId } = props;
  const $div = document.createElement('div');
  if (direction === 'right')
    $div.innerHTML = `
  <a class="carousel-control-prev" href="#${videoControlId}" role="button" data-slide="prev">
    <span class="holberton_school-icon-arrow_4" aria-hidden="true" id="arrow-prev-${videoControlId}"></span>
    <span class="sr-only">Previous</span>
  </a>
  `;
  else
    $div.innerHTML = `
  <a class="carousel-control-next" href="#${videoControlId}" role="button" data-slide="next">
    <span class="holberton_school-icon-arrow_3" aria-hidden="true" id="arrow-next-${videoControlId}"></span>
    <span class="sr-only" >Next</span>
  </a>
    `;
  return $div;
};
