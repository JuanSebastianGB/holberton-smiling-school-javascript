export const MembershipSection = () => {
  const $membershipSection = document.createElement('section');
  $membershipSection.classList.add('free-membership', 'pb-4', 'text-center');
  $membershipSection.innerHTML = `
  <div class="container">
      <header class="free-membership__header pt-5 pb-4 text-center">
          <p class="free-membership__title font-size-32">
              <span class="text-purple">Free</span> membership
          </p>
      </header>
      <div class="row justify-content-around">
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
              <article class="card-membership ">
                  <img class="cad-membership__logo mb-4" class="m-3" src="images/smile_on.png" alt="" width="36"
                      height="29">
                  <div class="card-membership__title my-3 font-size-18">
                      Lorem ipsum
                  </div>
                  <div class="card-membership__body my-3 font-size-14">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
              </article>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
              <article class="card-membership ">
                  <img class="cad-membership__logo mb-4" class="m-3" src="images/smile_on.png" alt="" width="36"
                      height="29">
                  <div class="card-membership__title my-3 font-size-18">
                      Lorem ipsum
                  </div>
                  <div class="card-membership__body my-3 font-size-14">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
              </article>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
              <article class="card-membership ">
                  <img class="cad-membership__logo mb-4" class="m-3" src="images/smile_on.png" alt="" width="36"
                      height="29">
                  <div class="card-membership__title my-3 font-size-18">
                      Lorem ipsum
                  </div>
                  <div class="card-membership__body my-3 font-size-14">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
              </article>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 text-center">
              <article class="card-membership ">
                  <img class="cad-membership__logo mb-4" class="m-3" src="images/smile_on.png" alt="" width="36"
                      height="29">
                  <div class="card-membership__title my-3 font-size-18">
                      Lorem ipsum
                  </div>
                  <div class="card-membership__body my-3 font-size-14">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
              </article>
          </div>
      </div>
      <button
          class="color-button-purple shadow-sm text-white text-uppercase badge badge-pill m-3 p-3 my-5">Register
          for free</button>
  </div>
    `;
  return $membershipSection;
};
