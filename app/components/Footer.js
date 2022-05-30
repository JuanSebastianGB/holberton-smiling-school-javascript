export const Footer = () => {
  const $root = document.getElementById('root');
  $root.innerHTML += `

<footer class="black-bg text-white text-center py-5">
<div class="container">
    <div class="row justify-content-between">
        <div class="col text-md-left">
            <a href="#">
                <img class="m-3" src="images/smile_off.png" width="37" height="30" alt="Smile" loading="lazy">
                <img src="images/logo.png" width="115" height="30" alt="Logo" loading="lazy">
            </a>
        </div>
        <div class="d-md-none w-100"></div>
        <div class="col text-md-right m-3">
            <a href="https://www.facebook.com/HolbertonSchool/"
                class="holberton_school-icon-ic_facebook px-2"></a>
            <a href="https://twitter.com/holbertonschool" class="holberton_school-icon-ic_twitter px-2"></a>
            <a href="https://www.instagram.com/holbertonschool/"
                class="holberton_school-icon-ic_instagram px-2"></a>
        </div>
    </div>
    <div>
        <p class="footer__rights mt-3">©smileschool 2020</p>
    </div>
</div>
</footer>
`;
};
