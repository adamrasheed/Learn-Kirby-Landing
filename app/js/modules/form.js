import { validate } from 'validate.js'
import keys from './keys'
import axios from 'axios'

const formMsgs = {
    success: 'Thanks for Subscribing! Please check your email',
    error: 'There was an error. Please try again.'
}

const urlQuery = (msg) => {
    let url = document.location;
    let separator = `?`;
    let queryString = msg;
    // url += separator + queryString;
    let newUrl = url + separator + queryString;
    window.history.pushState({}, '', newUrl);
}


const form = () => {

    const forms = Array.from(document.querySelectorAll('form'));

    const formFunc = forms.map( singleForm => {
        let email        = singleForm.querySelector('.form__input');
        let formMsg      = singleForm.querySelector('.form__msg-container');
        let formSuccess  = formMsg.querySelector('.form__msg--success');
        let formError    = formMsg.querySelector('.form__msg--error');

        singleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let inputEmail = e.target.querySelector('.form__input').value;

            const fetchOptions = {
                method: 'POST',
                mode: 'cors',
                headers: new Headers({
                    'Content-Type': 'application/ json; charset=utf-8',
                    api_key: keys.api
                }),
                body: JSON.stringify({
                    api_key: keys.api,
                    email_address: inputEmail
                },
            )
            };

            const postRequest = new Request(
                `${keys.url}/forms/${keys.formId}/subscribe`,
                fetchOptions
            );

            axios({
                method: 'post',
                url: `${keys.url}/forms/${keys.formId}/subscribe`,
                data: {
                    api_key: keys.api ,
                    email: inputEmail
                }
            })
            .then(response => {
                // console.log(formMsgs.success);
                // console.log(response.data.subscription);
                formSuccess.innerHTML = `${formMsgs.success}`;
                formSuccess.style.display='inline-block';
                singleForm.reset();
                urlQuery('confirmed=1');

            })
            .catch(error => {
                console.log(error);
                console.log(`${inputEmail} was not entered.`);
                formError.style.display = 'inline-block';
                singleForm.reset();
            });

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