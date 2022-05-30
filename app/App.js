import { Header } from './components/Header.js';
import { Loader } from './components/Loader.js';
import { QuotesSection } from './components/QuotesSection.js';

export const App = async () => {
  const $root = document.getElementById('root');
  $root.appendChild(Header());
  $root.appendChild(Loader());
  $root.appendChild(await QuotesSection());
};
