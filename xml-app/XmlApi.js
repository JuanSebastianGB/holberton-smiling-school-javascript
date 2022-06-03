import { handleInputValue } from './helpers/handleEvents.js';
import loadData from './helpers/renderDynamicData.js';
export const XmlApi = () => {
  loadData.renderQuotes();
  loadData.renderTutorials();
  loadData.renderLatestVideos();
  loadData.renderCourses();
  loadData.renderTopicsDropDown();
  loadData.renderSortDropDown();

  localStorage.search = '';
  handleInputValue();
};
