import { CourseVideosCarouselString } from '../components/CourseVideosCarouselString.js';

const handleKeyUp = (props) => {
  let { queryInputId, courseVideoCarouselId } = props;
  const $input = document.getElementById(queryInputId);
  $input.addEventListener('keyup', async (e) => {
    e.preventDefault();
    localStorage.setItem('q', $input.value);
    if (localStorage.getItem('q') === '') localStorage.removeItem('q');

    const $nodeToUpdate = document.getElementById(courseVideoCarouselId);
    $nodeToUpdate.innerHTML = await CourseVideosCarouselString(props);
  });
};

const handleChangeTopic = (props) => {
  const { topicId } = props;
  const elements = document.querySelectorAll(`#${topicId} .dropdown-item`);
  let { courseVideoCarouselId } = props;

  elements.forEach((element) => {
    element.addEventListener('click', async (e) => {
      e.preventDefault();
      const filterValue = e.target.innerText;
      localStorage.setItem('topic', filterValue.toLowerCase());
      document.getElementById(`dropdownMenuButton-${topicId}`).innerText =
        filterValue;

      const $nodeToUpdate = document.getElementById(courseVideoCarouselId);
      $nodeToUpdate.innerHTML = await CourseVideosCarouselString(props);
    });
  });
};

const handleChangeSort = (props) => {
  const { sortId } = props;
  const elements = document.querySelectorAll(`#${sortId} .dropdown-item`);
  let { courseVideoCarouselId } = props;

  elements.forEach((element) => {
    element.addEventListener('click', async (e) => {
      e.preventDefault();
      const filterValue = e.target.innerText;
      localStorage.setItem(
        'sort',
        filterValue.replaceAll(' ', '_').toLowerCase()
      );

      document.getElementById(`dropdownMenuButton-${sortId}`).innerText =
        filterValue;

      const $nodeToUpdate = document.getElementById(courseVideoCarouselId);
      $nodeToUpdate.innerHTML = await CourseVideosCarouselString(props);
    });
  });
};

export default {
  handleKeyUp,
  handleChangeTopic,
  handleChangeSort,
};
