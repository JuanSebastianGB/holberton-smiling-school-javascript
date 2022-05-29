import { TutorialStarts } from './TutorialStarts.js';

export const TutorialCart = ({
  title,
  thumb_url: image_big,
  author_pic_url: image_icon,
  author,
  duration,
  sub_title,
}) => {
  const tutorialCart = `
<div class="mx-1 d-sm-flex">
  <div class="card video-card-control mx-auto my-3">
      <img class="card-img-top" src="${image_big}" alt="Thumbnail 3" width="255"
          height="154">
      <img class="play-icon-position" src="images/play.png" alt="Play" width="64" height="64">
      <div class="card-body">
          <p class="font-weight-bold mt-5">${title}<br>
              <span class="text-secondary font-size-14 font-weight-normal">${sub_title}</span>
          </p>
          <div class="row justify-content-start font-size-14 text-purple">
              <div class="col-2">
                  <img class="rounded-circle" src="${image_icon}" width="30"
                      height="30" alt="Profile 1" loading="lazy">
              </div>
              <div class="col mt-1">
                  ${author}
              </div>
          </div>
          <div class="row justify-content-between mt-2">
              ${TutorialStarts()}
              <div class="col-4 text-right text-purple">
                  ${duration}
              </div>
          </div>
      </div>
  </div>
</div>
    `;
  return tutorialCart;
};
