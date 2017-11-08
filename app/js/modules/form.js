import { validate } from 'validate.js'
import keys from './keys'

const postRequest = new Request(
    `${keys.url}/courses/${keys.courseId}/subscriptions?api_secret=${keys.secret}`,
    {
        'method': 'GET',
        'Content-Type': 'application/json'
    },
    {
        body: JSON.stringify({
            email: ''
        })
    }
);

const myRequest = new Request(
    `${keys.url}/sequences?api_key=${keys.api}`,
    {
        'method': 'GET',
        'Content-Type': 'application/json'
    }
);


const form = () => {

    const forms = Array.from(document.querySelectorAll('form'));


    const formFunc = forms.map( singleForm => {
        let email = singleForm.querySelector('.form__input');
            singleForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // return false;
                console.log(e.target.value)
            });

            email.addEventListener('blur', (e)=>{
                let val = e.target.value;
                if(val != "") {
                    e.target.classList.add('has-value');
                } else {
                    e.target.classList.remove('has-value');
                }
            });
        }
    );


    fetch(postRequest)
        .then(
        resp => resp.json()
        )
        .then(
        data => {
            let crashCourse = data.courses.filter(
                course => (course.id == keys.courseId)
            )
            console.log(...crashCourse);
            console.log('hi');
        }
        )
        .catch(error => console.log(`Error: ${error.message}`));

}

export default form