export const HeroSection = () => {
  const $section = document.createElement('section');
  $section.classList.add('hero-section');
  $section.innerHTML = `
  <div class="container text-center">
      <h1 class="font-weight-bold text-responsive text-white  text-nowrap">Get schooled</h1>
      <p class="text-white text-uppercase">Smiles&emsp;&emsp;Grin&emsp;&emsp;Laugh</p>
      <button
          class="color-button-purple shadow-sm text-white text-uppercase badge badge-pill m-3 p-3">Register
          for free</button>
      <span class="w-100"></span>
      <p class="text-light font-size-32 contract-spacing my-5 py-5 ">
          <span class="text-purple font-weight-bold">Learn</span>
          from the pros
      </p>
      <div class="container">
          <div class="row row-cols-sm-2 row-cols-md-4 text-white">
              <div class="col">
                  <img class="rounded-circle" src="images/profile_1.jpg" alt="" width="150px" height="150px">
                  <p>
                  <div class="font-weight-bold font-size-18">Phillip Massey</div>
                  <div class="font-italic">« Smile of the year » 2018 - 2019</div>
                  </p>
              </div>
              <div class="col">
                  <img class="rounded-circle" src="images/profile_2.jpg" alt="" width="150px" height="150px">
                  <p>
                  <div class="font-weight-bold font-size-18">Nannie Lawrence</div>
                  <div class="font-italic">Best « little smile » 2017</div>
                  </p>
              </div>
              <div class="col">
                  <img class="rounded-circle" src="images/profile_3.jpg" alt="" width="150px" height="150px">
                  <p>
                  <div class="font-weight-bold font-size-18">Bruce Walters</div>
                  <div class="font-italic">Best « Friend Smile » live performance 2019</div>
                  </p>
              </div>
              <div class="col">
                  <img class="rounded-circle" src="images/profile_4.jpg" alt="" width="150px" height="150px">
                  <p>
                  <div class="font-weight-bold">Henry Hughes</div>
                  <div class="font-italic">« 24h smiles » winner 2016 - 2019</div>
                  </p>
              </div>
          </div>
      </div>
  </div>
  `;
  return $section;
};
