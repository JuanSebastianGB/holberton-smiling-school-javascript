import { Starts } from '../../app/components/Starts.js';

export const CourseItem = (props) => {
  const {
    title,
    duration,
    author_pic_url,
    thumb_url,
    sub_title,
    author,
    star,
  } = props;
  return `
                <div class="col-sm-12 col-md-4 col-lg-3">
                    <div class="card video-card-control mx-auto my-3">
                        <img class="card-img-top" src="${thumb_url}" alt="Thumbnail 4" width="255"
                            height="154">
                        <img class="play-icon-position" src="images/play.png" alt="Play" width="64" height="64">
                        <div class="card-body">
                            <p class="font-weight-bold mt-5">${title}<br>
                                <span class="text-secondary font-size-14 font-weight-normal">${sub_title}</span>
                            </p>
                            <div class="row justify-content-start font-size-14 text-purple">
                                <div class="col-2">
                                    <img class="rounded-circle" src="${author_pic_url}" width="30" height="30"
                                        alt="Profile 1" loading="lazy">
                                </div>
                                <div class="col mt-1">
                                    ${author}
                                </div>
                            </div>
                            <div class="row justify-content-between mt-2">
                                ${Starts({ star })}
                                <div class="col-4 text-right text-purple">
                                    ${duration}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  `;
};
