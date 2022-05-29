export const QuoteSection = () => {
  const quoteSection = document.createElement('section');
  quoteSection.classList.add('bg-purple');
  quoteSection.classList.add('carousel');
  quoteSection.classList.add('text-white');
  quoteSection.classList.add('quote-section');
  quoteSection.innerHTML = `
    <div id="carouselQuotes" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
    </div>
    <a class="carousel-control-prev" href="#carouselQuotes" role="button" data-slide="prev">
        <span class="holberton_school-icon-arrow_4" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselQuotes" role="button" data-slide="next">
        <span class="holberton_school-icon-arrow_3" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    `;
  return quoteSection;
};
