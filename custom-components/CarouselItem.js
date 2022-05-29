export const CarouselItem = ({ pic_url: image, text, name }, classActive) => {
  const carouselItemString = document.createElement('div');
  carouselItemString.classList.add(`carousel-item`, classActive);
  carouselItemString.innerHTML = `
      <div class="row justify-content-around">
          <div class="col-sm-1">
              <img class="rounded-circle mx-auto my-3 d-block" src="${image}" width="150"
                  height="150" alt="First slide">
          </div>
          <div class="col-sm-6 mx-3">
              <p>${text}</p>
              <p><span class="font-weight-bold">Person Name</span><br>
                  <span class="font-italic">${name}</span>
              </p>
          </div>
      </div>
    `;
  return carouselItemString;
};
