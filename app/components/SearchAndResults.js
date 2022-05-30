import { CourseVideosCarousel } from './CourseVideosCarousel.js';
import { SearchSection } from './SearchSection.js';

export const SearchAndResults = async (props) => {
  SearchSection(props);
  await CourseVideosCarousel(props);
};
