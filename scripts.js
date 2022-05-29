import { API_URL_QUOTES } from './config/index.js';
import { CarouselItem } from './custom-components/CarouselItem.js';
import { Loader } from './custom-components/loader/Loader.js';
import { QuoteSection } from './custom-components/QuoteSection.js';

const setQuotes = async () => {
  try {
    let fetchQuotes = await $.get(API_URL_QUOTES);
    let counter = 0;
    let classActive = '';
    $('body').append(Loader);
    $('body').append(QuoteSection);

    fetchQuotes.map((element) => {
      if (counter === 0) {
        classActive = 'active';
        counter++;
      } else classActive = 'another-quote';
      $('#carouselQuotes .carousel-inner').append(
        CarouselItem(element, classActive)
      );
    });
    $('.loader').remove();
  } catch (error) {
    console.log(error);
    $('body').append(Loader);
  }
};

$('document').ready(function () {
  setQuotes();
});
