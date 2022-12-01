import './style.css'

const Form = () => {

    const emailValidate = () => {
        const emailInp = document.getElementById('email');
        
        document.getElementById('email').addEventListener('input', function() {
            if (emailInp.validity.valid) {
                document.getElementById('emailError').textContent = '';
                emailInp.className = '';
            } else if (!emailInp.validity.valid) {
                document.getElementById('emailError').textContent = 'Please enter valid email';
                emailInp.className = 'error';
            } else {
                document.getElementById('emailError').textContent = '';
                emailInp.className = '';
            }
        })
    }

    const countryValidate = () => {
        const country = document.getElementById('country');

        country.addEventListener('input', function() {
            if (country.validity.valid) {
                document.getElementById('countryError').textContent = '';
                country.className = '';
            } else if (!country.validity.valid) {
                document.getElementById('countryError').textContent = 'Enter valid country';
                country.className = 'error';
            }
        })
    }

    const addEvents = () => {
        emailValidate();
        countryValidate();
    }

    return {
        addEvents
    }

}

var form = Form()
form.addEvents();