import { Footer } from './app/components/Footer.js';
import { HeaderCourse } from './app/components/HeaderCourse.js';
import { Router } from './app/components/Router.js';
import { SearchAndResults } from './app/components/SearchAndResults.js';
import events from './helpers/handleEvents.js';

export const Scripts = async () => {
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

  Router();
};
