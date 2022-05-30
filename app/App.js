import { Header } from './components/Header.js';

export const App = () => {
  const $root = document.getElementById('root');
  $root.appendChild(Header());
};
