import { Footer } from './components/Footer.js';
import { HeaderCourse } from './components/HeaderCourse.js';
import { SearchAndResults } from './components/SearchAndResults.js';
import events from './helpers/handleEvents.js';

export const AppCourses = async () => {
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
