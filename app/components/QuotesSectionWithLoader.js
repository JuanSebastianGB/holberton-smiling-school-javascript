import { Loader } from './Loader.js';
import { QuotesSection } from './QuotesSection.js';

export const QuotesSectionWithLoader = async (props) => {
  const { color } = props;
  const $root = document.getElementById('root');
  const customId = `${Date.now()}`;
  $root.appendChild(Loader({ color, id: customId }));
  $root.appendChild(await QuotesSection({ loaderContainerId: customId }));
};
