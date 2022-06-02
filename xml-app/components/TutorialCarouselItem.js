import { Starts } from '../../app/components/Starts.js';

export const TutorialCarouselItem = (props) => {
  const { star } = props;
  return `
              <div class="mx-1">
                  <div class="card video-card-control mx-auto my-3">
                      <img class="card-img-top" src="${
                        props.thumb_url
                      }" alt="Thumbnail 4" width="255"
                          height="154">
                      <img class="play-icon-position" src="images/play.png" alt="Play" width="64" height="64">
                      <div class="card-body">
                          <p class="font-weight-bold mt-5">${props.title}<br>
                              <span class="text-secondary font-size-14 font-weight-normal">${
                                props.sub_title
                              }</span>
                          </p>
                          <div class="row justify-content-start font-size-14 text-purple">
                              <div class="col-2">
                                  <img class="rounded-circle" src="${
                                    props.author_pic_url
                                  }" width="30"
                                      height="30" alt="Profile 1" loading="lazy">
                              </div>
                              <div class="col mt-1">
                                  ${props.author}
                              </div>
                          </div>
                          <div class="row justify-content-between mt-2">
                              <div class="col">
                                  ${Starts({ star })}
                              </div>
                              <div class="col-4 text-right text-purple">
                                  ${props.duration}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  `;
};
