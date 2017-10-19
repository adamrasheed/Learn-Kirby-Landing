const floatingLabels = () => {
    const formGroup = document.body.getElementsByClassName('form__group');

    for (let group of formGroup){
        let input = group.querySelector('.form__input');

        if (input.value.length != 0) {
            console.log('fillin up');
        }
    }
}

export default floatingLabels;