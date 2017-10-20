const parallax = (callback) => {

    const heroHeight = document.getElementById('hero').offsetHeight;

    const heroContent = document.querySelector('.hero__container');
    const heroBg = document.querySelector('.hero__img');

    const heroForm = document.querySelector('#hero-form');

    const hrs = document.getElementsByClassName('hr');


    const logTop = () => {
        let windowTop = window.pageYOffset;

        heroBg.style.transform = `translateY(-${32 +windowTop / 2 }px`;
        heroContent.style.transform = `translateY(-${windowTop / 9}px)`;
        heroForm.style.transform = `translateY(-${windowTop / 9}px)`;

        // console.log(heroForm.style.transform);



        if(document.querySelector('#love-kirby').clientHeight >= 0){

            for(let hr of hrs){
                // hr.style.width = '30%';
                hr.style.maxWidth = `${30 + windowTop/30}%`;
                // hr.style.maxWidth = '100%';
                // console.log(hr.style.width);
            }
        } else {
            for (let hr of hrs){
                hr.style.width = '30%';
            }
        }

    }

    window.addEventListener('scroll', logTop);
}

export default parallax