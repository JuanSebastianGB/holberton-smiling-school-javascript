import { Starts } from './Starts.js';

export const CourseCard = (props) => {
  const {
    title,
    sub_title,
    duration,
    author,
    thumb_url: thumbPic,
    author_pic_url: profilePic,
    star,
  } = props;

  return `
<div class="col-sm-12 col-md-4 col-lg-3">
  <div class="card video-card-control mx-auto my-3">
      <img class="card-img-top" src="${thumbPic}" alt="Thumbnail 4" width="255"
          height="154">
      <img class="play-icon-position" src="images/play.png" alt="Play" width="64" height="64">
      <div class="card-body">
          <p class="font-weight-bold mt-5">${title}<br>
              <span class="text-secondary font-size-14 font-weight-normal">Lorem ipsum dolor
                  sit
                  amet, consect adipiscing elit, sed do eiusmod.</span>
          </p>
          <div class="row justify-content-start font-size-14 text-purple">
              <div class="col-2">
                  <img class="rounded-circle" src="${profilePic}" width="30" height="30"
                      alt="Profile 1" loading="lazy">
              </div>
              <div class="col mt-1">
                  ${author}
              </div>
          </div>
          <div class="row justify-content-between mt-2">
              <div class="col">
                  ${Starts({ star })}
              </div>
              <div class="col-4 text-right text-purple">
                  ${duration}
              </div>
          </div>
      </div>
  </div>
</div>
  `;
};
