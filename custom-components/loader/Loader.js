import sheet from './loader.css' assert { type: 'css' };
document.adoptedStyleSheets = [sheet];

export const Loader = () => {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  return loader;
};
