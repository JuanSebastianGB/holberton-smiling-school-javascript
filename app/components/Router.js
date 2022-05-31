import { HeaderCourse } from './HeaderCourse.js';
import { SearchAndResults } from './SearchAndResults.js';
import events from '../helpers/handleEvents.js';
import api from '../helpers/connection_api.js';
import { Footer } from './Footer.js';
import { HeaderPrice } from './HeaderPrice.js';
import { QuotesSectionWithLoader } from './QuotesSectionWithLoader.js';
import { FaqSection } from './FaqSection.js';
import { TutorialVideosSectionWithLoader } from './TutorialVideosSectionWithLoader.js';
import { TitlePopularVideos } from './TitlePopularVideos.js';
import { MembershipSection } from './MembershipSection.js';
import { TitleLatestVideos } from './TitleLatestVideos.js';
import { Header } from './Header.js';

export const Router = async () => {
  let { hash } = location;
  const $root = document.getElementById('root');
  $root.innerHTML = null;

  if (!hash || hash === '#/') {
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
  } else if (hash === '#/courses') {
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
  } else if (hash === '#/pricing') {
    HeaderPrice();
    await QuotesSectionWithLoader({ color: 'white' });
    FaqSection();
    Footer();
  }
};
