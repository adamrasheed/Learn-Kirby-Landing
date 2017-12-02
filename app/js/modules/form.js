import { validate } from 'validate.js'
import keys from './keys'


const Ajax = () => {
    
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

            fetch(postRequest)
                .then(
                resp => {
                    if (resp.ok){
                        return resp.json();
                    } throw new Error('401, Homie 💩');
                    }
                )
                .then(
                data => {
                    if(data.error){
                        console.log(`${data.error}: ${data.message}`);
                    }else {
                        console.log(data);
                        formSuccess.style.display = "inline-block";
                    };
                }
                )
                .catch(error => {
                    console.log(`Error: ${error.message}`);

                });

            console.log(`${inputEmail} was not entered.`);
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