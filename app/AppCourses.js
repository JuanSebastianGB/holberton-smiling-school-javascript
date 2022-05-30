import { CourseVideosCarousel } from './components/CourseVideosCarousel.js';
import { Footer } from './components/Footer.js';
import { HeaderCourse } from './components/HeaderCourse.js';
import { SearchSection } from './components/SearchSection.js';

export const AppCourses = async () => {
  HeaderCourse();
  SearchSection();
  await CourseVideosCarousel();
  Footer();
};
