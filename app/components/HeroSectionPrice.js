export const HeroSectionPrice = () => {
  const $div = document.createElement('div');
  $div.innerHTML = `
  <!-- Hero Section -->
  <section class="hero-pricing">
      <div class="container text-center text-white py-5">
          <div class="d-block d-sm-none">
              <h4>What is <img class="m-3" src="images/smile_off.png" width="37" height="30" alt="Smile"
                      loading="lazy">
                  <img src="images/logo.png" width="153" height="40" alt="Logo" loading="lazy"> ?</h4>
          </div>
          <div class="d-none d-sm-block">
              <h2>What is <img class="m-3" src="images/smile_off.png" width="37" height="30" alt="Smile"
                      loading="lazy">
                  <img src="images/logo.png" width="153" height="40" alt="Logo" loading="lazy"> ?</h2>
          </div>
          <h1 class="font-size-60 font-weight-bold">Go pro!</h1>
      </div>
  </section>

  <!-- Grid Section  -->

  <div class="container text-center text-white">
      <div class="row mb-1">
          <div class="col-12 col-md-4"></div>
          <div class="col-6 col-md-4">
              <a href="#"> <span class="badge badge-pill bg-purple text-white text-uppercase py-2 px-4">buy 3
                      months</span></a>
              <p class="mt-3">
                  <span class="font-size-44">$3.60</span>
                  <br>
                  <span class="font-size-12 text-white-50">1.20/month</span>
              </p>

          </div>
          <div class="col-6 col-md-4">
              <a href="#">
                  <span class="badge badge-pill bg-purple text-white text-uppercase py-2 px-4">buy 1 year</span>
              </a>
              <p class="mt-3">
                  <span class="font-size-44">$12.99</span>
                  <br>
                  <span class="font-size-12 text-white-50">$1.08/month</span>
              </p>
          </div>
      </div>
      <div class="d-sm-none text-uppercase font-size-12 font-weight-bold my-5">
          <div class="row">
              <div class="col-4"></div>
              <div class="col-4">3 months</div>
              <div class="col-4">1 year</div>
          </div>
      </div>
      <div class="row font-size-18">
          <div class="col-4 text-left">
              Unlimited access to all tutorials
          </div>
          <div class="col-4 holberton_school-icon-check bg-green"></div>
          <div class="col-4 holberton_school-icon-check"></div>
      </div>
      <hr class="hr-gray">
      <div class="row font-size-18">
          <div class="col-4 text-left">
              Access SmileSchool private forum
          </div>
          <div class="col-4 holberton_school-icon-check bg-green"></div>
          <div class="col-4 holberton_school-icon-check"></div>
      </div>
      <hr class="hr-gray">
      <div class="row font-size-18">
          <div class="col-4 text-left">
              Access Smiles contests & Smiles Analysis
          </div>
          <div class="col-4 holberton_school-icon-check bg-green"></div>
          <div class="col-4 holberton_school-icon-check"></div>
      </div>
      <hr class="hr-gray">
      <div class="row font-size-18">
          <div class="col-4 text-left">
              Get a free toothbrush
          </div>
          <div class="col-4 "></div>
          <div class="col-4 holberton_school-icon-check"></div>
      </div>
      <hr class="hr-gray">
      <div class="row">
          <div class="col-4 text-left">
              <img class="my-1" src="images/signal.png" width="88" height="35" alt="Signal" loading="lazy">
              <br>
              Exclusive discount on all Signal products
          </div>
          <div class="col-4"></div>
          <div class="col-4 holberton_school-icon-check"></div>
      </div>
  </div>
  `;
  return $div;
};
