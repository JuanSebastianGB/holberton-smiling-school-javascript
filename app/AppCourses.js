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
  HeaderCourse();
  await SearchAndResults({
    ...ids,
    ...params,
    courseVideoCarouselId,
  });
  Footer();

  events.handleKeyUp({ queryInputId, ...params, courseVideoCarouselId });
};
