export const QuoteCarouselItem = (props) => {
  return `
        <div class="carousel-item ${props.index === 0 ? 'active' : ''}">
            <div class="row justify-content-around">
                <div class="col-sm-1">
                    <img class="rounded-circle mx-auto my-3 d-block" src="${
                      props.pic_url
                    }" width="150"
                        height="150" alt="First slide">
                </div>
                <div class="col-sm-6 mx-3">
                    <p>« ${props.text}</p>
                    <p><span class="font-weight-bold">${props.name}</span><br>
                        <span class="font-italic">${props.title}</span>
                    </p>
                </div>
            </div>
        </div>
  `;
};
