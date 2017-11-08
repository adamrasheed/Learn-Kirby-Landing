import { validate } from 'validate.js'
import keys from './keys'


const fetchOptions = {
    'method': 'POST',
    'Content-Type': 'application/json; charset=utf-8',
};

const postRequest = new Request(
    `${keys.url}/forms/${keys.formId}/subscribe`,
    fetchOptions
);

const Ajax = (passedData) => {
    fetch(postRequest)
        .then(
        resp => resp.json()
        )
        .then(
        data => {
            // let crashCourse = data.courses.filter(
            //     course => (course.id == keys.courseId)
            // )
            // console.log(...crashCourse);

            let form = data.forms.filter(
                form => (form.id == keys.formId)
            )
            console.log(form);
            let messageSuccess = form.success_message;
        }
        )
        .catch(error => {
            console.log(error.message);

        });
}


const form = () => {

    const forms = Array.from(document.querySelectorAll('form'));

    const formFunc = forms.map( singleForm => {
        let email = singleForm.querySelector('.form__input');
        let formMsg = singleForm.querySelector('.form__msg-container');
        let formSuccess = formMsg.querySelector('.form__msg--success');
        
        singleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let inputEmail = e.target.querySelector('.form__input').value;
            Ajax(inputEmail);
            formSuccess.style.display = "inline-block";
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



}

export default form