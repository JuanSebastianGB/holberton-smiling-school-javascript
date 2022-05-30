export const Quote = (props) => {
  const { active, pic_url, text, name, title } = props;
  const $div = document.createElement('div');
  $div.classList.add('carousel-item');
  if (active) $div.classList.add('active');
  $div.innerHTML = `
    <div class="row justify-content-around">
        <div class="col-sm-1">
            <img class="rounded-circle mx-auto my-3 d-block" src="${pic_url}" width="150"
                height="150" alt="First slide">
        </div>
        <div class="col-sm-6 mx-3">
            <p>« ${text}</p>
            <p><span class="font-weight-bold">${name}</span><br>
                <span class="font-italic">${title}</span></p>
        </div>
    </div>
    `;
  return $div;
};
