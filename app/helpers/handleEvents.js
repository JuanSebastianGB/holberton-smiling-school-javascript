import { CourseVideosCarouselString } from '../components/CourseVideosCarouselString.js';

const handleKeyUp = (props) => {
  let { queryInputId, courseVideoCarouselId } = props;
  const $input = document.getElementById(queryInputId);
  $input.addEventListener('keyup', async (e) => {
    e.preventDefault();
    props.q = $input.value;

    const $nodeToUpdate = document.getElementById(courseVideoCarouselId);
    $nodeToUpdate.innerHTML = await CourseVideosCarouselString(props);

    console.log(e.target.value);
  });
};

export default {
  handleKeyUp,
};
