import '../../styles/index.css';
import './contacts.css';

import '../../partials/map/map.html';

import '../../partials/navbar/navbar.js';
import '../../partials/footer/footer.js';
import '../../partials/map/map.js';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    let form_inputs = document.querySelectorAll('._req');
    form.addEventListener('submit', formSend);
    async function formSend(e) {
        e.preventDefault();

        let error = formValidate();

        // let formData = new FormData(form);
        // let values = Object.fromEntries(formData.entries());
        // alert(error);
        if(error === 0){
            const inputs_values = parseInputs(form_inputs)
            console.log(inputs_values);
            fetch("http://localhost:4000/api/cars/order-request-NLTU", { 
            method: "POST", 
            body: JSON.stringify(inputs_values), 
            headers: { 
                "Content-type": "application/json"
             } })
             .then(res => console.log(res))
             .catch(err => console.log(err))
            alert("Повідомлення відправлено");
        }
    }

    function formValidate() {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_email')) {
                if(emailTest(input)){
                    formAddError(input);
                    error++
                }
            } else if(input.classList.contains('_tel')){
                if(telTest(input)){
                    formAddError(input);
                    error++
                }   
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++
                }
            }
        }
        return error
    }

    const parseInputs = (inputs) => {
        let obj = {}
        inputs.forEach(key => {
            obj[key.getAttribute("name")] = key.value
        })
        return obj
    }
    
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    function telTest(input) {
        return !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(input.value);
    }
});