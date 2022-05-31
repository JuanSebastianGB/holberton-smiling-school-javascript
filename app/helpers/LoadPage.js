import { FaqSection } from '../components/FaqSection.js';
import { Footer } from '../components/Footer.js';
import { Header } from '../components/Header.js';
import { HeaderCourse } from '../components/HeaderCourse.js';
import { HeaderPrice } from '../components/HeaderPrice.js';
import { MembershipSection } from '../components/MembershipSection.js';
import { QuotesSectionWithLoader } from '../components/QuotesSectionWithLoader.js';
import { SearchAndResults } from '../components/SearchAndResults.js';
import { TitleLatestVideos } from '../components/TitleLatestVideos.js';
import { TitlePopularVideos } from '../components/TitlePopularVideos.js';
import { TutorialVideosSectionWithLoader } from '../components/TutorialVideosSectionWithLoader.js';
import events from '../helpers/handleEvents.js';
import api from '../helpers/connection_api.js';

const LoadHome = async () => {
  const $root = document.getElementById('root');

  $root.appendChild(Header());
  await QuotesSectionWithLoader({ color: 'white' });
  await TutorialVideosSectionWithLoader({
    color: 'purple',
    url: api.API_URL_TUTORIALS,
    customTitle: TitlePopularVideos(),
  });
  $root.appendChild(MembershipSection());
  await TutorialVideosSectionWithLoader({
    color: 'purple',
    url: api.API_URL_TUTORIALS_LATEST,
    customTitle: TitleLatestVideos(),
  });
  Footer();
  events.handleClickArrow();
};

const LoadCourses = async () => {
  let queryInputId = `q-${Date.now()}`,
    topicId = `topic-${Date.now()}`,
    sortId = `sort-${Date.now()}`,
    courseVideoCarouselId = `courseVideoCarouselId-${Date.now()}`,
    ids = { queryInputId, topicId, sortId },
    params = { q: '', topic: 'all', sort: 'most_popular' };
  const objectToHandleEvents = { ...ids, ...params, courseVideoCarouselId };
  HeaderCourse();
  await SearchAndResults({ ...objectToHandleEvents });
  Footer();

  events.handleKeyUp({ ...objectToHandleEvents });
  events.handleChangeTopic({ ...objectToHandleEvents });
  events.handleChangeSort({ ...objectToHandleEvents });
};

const loadPricing = async () => {
  HeaderPrice();
  await QuotesSectionWithLoader({ color: 'white' });
  FaqSection();
  Footer();
};

export default {
  LoadHome,
  LoadCourses,
  loadPricing,
};
