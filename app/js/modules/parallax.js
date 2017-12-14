const parallax = (callback) => {

    const heroHeight = document.getElementById('hero').offsetHeight;

    const heroContent = document.querySelector('.hero__container');
    const heroBg = document.querySelector('.hero__img');

    const heroForm = document.querySelector('#hero-form');

    const hrs = document.getElementsByClassName('hr');
    const hrCenter = document.getElementsByClassName('hr--center');


    const logTop = () => {
        let windowTop = window.pageYOffset;

        heroBg.style.transform = `translateY(-${32 +windowTop / 9 }px`;
        heroContent.style.transform = `translateY(-${windowTop / 3}px)`;
        heroForm.style.transform = `translateY(-${windowTop / 3}px)`;

        // console.log(heroForm.style.transform);



        if(document.querySelector('#love-kirby').clientHeight >= 0){

            for(let hr of hrs){
                // hr.style.width = '30%';
                hr.style.maxWidth = `${30 + windowTop/30}%`;
                // hr.style.maxWidth = '100%';
                // console.log(hr.style.width);
            }

            for (let hrC of hrCenter){
                hrC.style.width = `${5 + windowTop/30}%`;
            }

        } else {
            for (let hr of hrs){
                hr.style.width = '30%';
            }

            for (let hrC of hrCenter) {
                hrC.style.width = `20%`;
            }
        }

    }

    window.addEventListener('scroll', logTop);
}

export default parallax