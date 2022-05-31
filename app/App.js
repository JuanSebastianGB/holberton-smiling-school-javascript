import { Router } from './components/Router.js';

export const App = async () => {
  let queryInputId = `q-${Date.now()}`,
    topicId = `topic-${Date.now()}`,
    sortId = `sort-${Date.now()}`,
    courseVideoCarouselId = `courseVideoCarouselId-${Date.now()}`,
    ids = { queryInputId, topicId, sortId },
    params = { q: '', topic: 'all', sort: 'most_popular' };
  const objectToHandleEvents = { ...ids, ...params, courseVideoCarouselId };

  Router();
};
