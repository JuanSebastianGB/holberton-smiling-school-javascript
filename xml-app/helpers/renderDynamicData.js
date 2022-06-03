import { QuoteCarouselItem } from '../components/QuoteCarouselItem.js';
import { TutorialCarouselItem } from '../components/TutorialCarouselItem.js';
import api from './endPoints.js';
import { handleTopic, handleSort, handleInputValue } from './handleEvents.js';

const renderQuotes = () => {
  const url = api.xmlQuotes;
  $.ajax({
    url,
    type: 'GET',
    dataType: 'xml',
    beforeSend: function () {
      $('.loader').show();
    },
    success: function (response) {
      const $nodes = $(response).find('quote');
      $nodes.map((index, element) => {
        let name = $(element).find('name').text(),
          title = $(element).find('title').text(),
          text = $(element).find('text').text(),
          pic_url = $(element).find('pic_url').text();
        let $carouselItem = $(
          QuoteCarouselItem({ name, title, text, pic_url, title, index })
        );
        $('#carouselQuotes .carousel-inner').append($carouselItem);
      });
      $('.loader').hide();
    },
  });
};

const renderTutorials = () => {
  const url = api.xmlTutorials;
  $.ajax({
    url,
    type: 'GET',
    dataType: 'xml',
    beforeSend: function () {
      $('.loader-popular-videos').show();
    },
    success: function (response) {
      const $nodes = $(response).find('video');
      $nodes.map((index, element) => {
        let title = $(element).find('title').text(),
          sub_title = $(element).find('sub-title').text(),
          pic_url = $(element).find('pic_url').text(),
          thumb_url = $(element).find('thumb_url').text(),
          author = $(element).find('author').text(),
          author_pic_url = $(element).find('author_pic_url').text(),
          duration = $(element).find('duration').text(),
          topic = $(element).find('topic').text(),
          keywords = $(element).find('keywords').text();

        let $carouselItem = $(
          TutorialCarouselItem({
            title,
            sub_title,
            pic_url,
            thumb_url,
            author,
            author_pic_url,
            duration,
            topic,
            keywords,
            index,
          })
        );
        if (index < 4)
          $('#carousel-videos-control .carousel-inner .row-active').append(
            $carouselItem
          );
        else
          $('#carousel-videos-control .carousel-inner .row-not-active').append(
            $carouselItem
          );
      });
      $('.loader-popular-videos').hide();
    },
  });
};

const renderLatestVideos = () => {
  const url = api.xmlLatestVideos;
  $.ajax({
    url,
    type: 'GET',
    dataType: 'xml',
    beforeSend: function () {
      $('.loader-latest-videos').show();
    },
    success: function (response) {
      const $nodes = $(response).find('video');

      $nodes.map((index, element) => {
        let title = $(element).find('title').text(),
          sub_title = $(element).find('sub-title').text(),
          pic_url = $(element).find('pic_url').text(),
          thumb_url = $(element).find('thumb_url').text(),
          author = $(element).find('author').text(),
          author_pic_url = $(element).find('author_pic_url').text(),
          duration = $(element).find('duration').text(),
          topic = $(element).find('topic').text(),
          keywords = $(element).find('keywords').text();
        let $carouselItem = $(
          TutorialCarouselItem({
            title,
            sub_title,
            pic_url,
            thumb_url,
            author,
            author_pic_url,
            duration,
            topic,
            keywords,
            index,
          })
        );
        if (index < 4)
          $(
            '#carousel-latest-videos-control .carousel-inner .row-active'
          ).append($carouselItem);
        else if (index >= 4 && $nodes.length > 4)
          $(
            '#carousel-latest-videos-control .carousel-inner .row-not-active'
          ).append($carouselItem);
      });
      $('.loader-latest-videos').hide();
    },
  });
};

const renderTopicsDropDown = () => {
  const url = api.xmlCourses;
  $.ajax({
    url,
    type: 'GET',
    dataType: 'xml',
    data: {
      action: 'query',
      list: 'search',
      format: 'json',
    },
    success: function (response) {
      const selectedData = $(response).find('topics').find('topic');
      let html = '';
      selectedData.map((index, topic) => {
        html += `<a class="dropdown-item" href="#">${$(topic).text()}</a>`;
      });
      $('#dropDownMenuTopics').append(html);
      handleTopic();
    },
  });
};

const renderSortDropDown = () => {
  const url = api.xmlCourses;
  $.ajax({
    url,
    type: 'GET',
    dataType: 'xml',
    data: {
      action: 'query',
      list: 'search',
      format: 'json',
    },
    success: function (response) {
      console.log(response);
      const selectedData = $(response).find('sorts').find('sort');
      let html = '';
      selectedData.map((index, sort) => {
        html += `<a class="dropdown-item" href="#">${$(sort)
          .text()
          .replace('_', ' ')}</a>`;
      });
      $('#dropDownMenuSort').append(html);
      handleSort();
    },
  });
};

const renderCourses = () => {
  const url = api.xmlCourses;
  $.ajax({
    url,
    type: 'GET',
    dataType: 'xml',
    beforeSend: function () {},
    data: {
      action: 'query',
      list: 'search',
      format: 'json',
    },
    success: function (response) {
      const selectedData = $(response).find('topics').find('topic');

      selectedData.map((index, course) => {});
    },
  });
};

export default {
  renderQuotes,
  renderTutorials,
  renderLatestVideos,
  renderCourses,
  renderTopicsDropDown,
  renderSortDropDown,
};
