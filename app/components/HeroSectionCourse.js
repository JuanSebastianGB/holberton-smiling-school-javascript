export const HeroSectionCourse = () => {
  const $div = document.createElement('div');
  $div.innerHTML = `
  <section class="hero-courses">
  <div class="container text-center text-white py-5">
      <div class="font-size-32 font-family-coiny">
          « Don’t cry because it’s over.
          <span class="text-purple"><br> Smile</span> because it happened. »
      </div>
  </div>
</section>
  `;
  return $div;
};
