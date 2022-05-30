import { FaqSection } from './components/FaqSection.js';
import { Footer } from './components/Footer.js';
import { HeaderPrice } from './components/HeaderPrice.js';
import { QuotesSectionWithLoader } from './components/QuotesSectionWithLoader.js';

export const AppPrice = async () => {
  HeaderPrice();
  await QuotesSectionWithLoader({ color: 'white' });
  FaqSection();
  Footer();
};
