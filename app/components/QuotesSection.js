import { ajax } from '../helpers/ajax.js';
import { CarouselArrow } from './CarouselArrow.js';
import { Quote } from './Quote.js';
import api from '../helpers/connection_api.js';

export const QuotesSection = async (props) => {
  const { loaderContainerId } = props;
  const $quotesSection = document.createElement('section'),
    $carousel = document.createElement('div'),
    $carouselInner = document.createElement('div');
  const videoControlId = `carousel-videos-${Date.now()}`;

  $quotesSection.classList.add(
    'bg-purple',
    'carousel',
    'text-white',
    'quote-section',
    'mb-5'
  );
  $carousel.classList.add('carousel', 'slide');
  $carousel.setAttribute('data-ride', 'carousel');
  $carousel.id = videoControlId;
  $quotesSection.appendChild($carousel);
  $carouselInner.classList.add('carousel-inner');
  $carousel.appendChild($carouselInner);

  await ajax({
    url: api.API_URL_QUOTES,
    cbSuccess: (quotes) => {
      let totalQuotes = quotes.length;

      quotes.map((quote, key) => {
        if (key + 1 <= parseInt(totalQuotes / 2))
          $carouselInner.appendChild(Quote({ active: true, ...quote }));
        else $carouselInner.appendChild(Quote({ active: false, ...quote }));
      });
      document.getElementById(loaderContainerId).style.display = 'none';
    },
  });

  $quotesSection.appendChild(
    CarouselArrow({ direction: 'left', videoControlId })
  );
  $quotesSection.appendChild(
    CarouselArrow({ direction: 'right', videoControlId })
  );
  return $quotesSection;
};
