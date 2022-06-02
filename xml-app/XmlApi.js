import loadData from './helpers/renderDynamicData.js';
export const XmlApi = () => {
  loadData.renderQuotes();
  loadData.renderTutorials();
  loadData.renderLatestVideos();
};
