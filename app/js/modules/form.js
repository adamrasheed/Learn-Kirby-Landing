import { validate } from 'validate.js'

const form = () => {

    let constraints = {
    }

    const forms = document.getElementsByClassName('form');

    for (let form of forms) {
        form.addEventListener('submit', (event) => {

            let submission = () => {
                console.log('hi');
            }

            submission();

            event.preventDefault();
            return false;

        }
        );
    }

    const ckKeys = {
        url: 'https://api.convertkit.com/v3',
        api: 'U5nErI005k7uw3DR5Uvslg',
        secret: 'yo',
        courseId: 91345
    }
    const myRequest = new Request(
        `${ckKeys.url}/sequences?api_key=${ckKeys.api}`,
        {
            'method' : 'GET',
            'Content-Type': 'application/json'
        });

    fetch(myRequest)
        .then(
            resp=> resp.json()
        )
        .then(
            data=>{
                let crashCourse = data.courses.filter(course=> (course.id == ckKeys.courseId))
                console.log(crashCourse[0]);
            }
        )
        .catch(error=>console.log(error.message));

}

export default form