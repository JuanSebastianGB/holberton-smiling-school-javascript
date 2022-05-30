import { Footer } from './components/Footer.js';
import { Header } from './components/Header.js';
import { MembershipSection } from './components/MembershipSection.js';
import { QuotesSectionWithLoader } from './components/QuotesSectionWithLoader.js';
import { TitleLatestVideos } from './components/TitleLatestVideos.js';
import { TitlePopularVideos } from './components/TitlePopularVideos.js';
import { TutorialVideosSectionWithLoader } from './components/TutorialVideosSectionWithLoader.js';
import api from './helpers/connection_api.js';

export const App = async () => {
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
};
