import { Loader } from './Loader.js';
import { TutorialVideosSection } from './TutorialVideosSection.js';

export const TutorialVideosSectionWithLoader = async (props) => {
  const { color, url, customTitle } = props;
  const customId = `${Date.now()}`;
  const $root = document.getElementById('root');
  $root.appendChild(Loader({ color, id: customId }));
  let videosHtml = await TutorialVideosSection({
    customTitle,
    url,
    loaderContainerId: customId,
  });
  $root.innerHTML += videosHtml;
};
