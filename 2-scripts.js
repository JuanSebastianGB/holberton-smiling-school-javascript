import { API_URL_QUOTES, API_URL_TUTORIALS } from './config/index.js';
import { CarouselItem } from './custom-components/CarouselItem.js';
import { Loader } from './custom-components/loader/Loader.js';
import { QuoteSection } from './custom-components/QuoteSection.js';
import { TutorialCarousel } from './custom-components/TutorialCarousel.js';
import { TutorialCart } from './custom-components/TutorialCart.js';
import { TutorialSection } from './custom-components/TutorialSection.js';

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

const setTutorials = async () => {
  try {
    const fetchTutorials = await $.get(API_URL_TUTORIALS);
    $('body').append(TutorialSection);
    $('.tutorial-carousel-container').append(
      TutorialCarousel({ isActive: true })
    );
    $('.tutorial-carousel-container').append(
      TutorialCarousel({ isActive: false })
    );
    $('body').append(Loader);
    const tutorialListLength = fetchTutorials.length;
    let middleLength = parseInt(tutorialListLength / 2);
    let counter = 0;
    fetchTutorials.map((element) => {
      element.sub_title = element['sub-title'];
      if (counter < middleLength) {
        counter++;
        $('.row-active').append(TutorialCart(element));
      } else $('.row-inactive').append(TutorialCart(element));
    });
    $('.loader').remove();
  } catch (error) {
    console.log(error);
  }
};

$('document').ready(function () {
  setQuotes();
  setTutorials();
});
