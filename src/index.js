import './style.css'

const Form = () => {

    const emailValidate = () => {
        const emailInp = document.getElementById('email');
        
        document.getElementById('email').addEventListener('input', function() {
            if (emailInp.validity.valid) {
                document.getElementById('emailError').textContent = '';
                emailInp.className = '';
            } else if (emailInp.value == '') {
                document.getElementById('emailError').textContent = '';
                emailInp.className = '';
            }else if (!emailInp.validity.valid) {
                document.getElementById('emailError').textContent = 'Please enter valid email';
                emailInp.className = 'error';
            }
        })
    }

    const countryValidate = () => {
        const country = document.getElementById('country');

        country.addEventListener('input', function() {
            if (country.validity.valid) {
                document.getElementById('countryError').textContent = '';
                country.className = '';
            } else if (country.value == '') {
                document.getElementById('countryError').textContent = '';
                country.className = '';
            } else if (!country.validity.valid) {
                document.getElementById('countryError').textContent = 'Enter valid country';
                country.className = 'error';
            }
        })
    }

    const zipValidate = () => {
        const zip = document.getElementById('zip');

        zip.addEventListener('input', function() {
            if (zip.validity.valid) {
                document.getElementById('zipError').textContent = '';
                zip.className = '';
            } else if (zip.value == '') {
                document.getElementById('zipError').textContent = '';
                zip.className = '';
            } else if (!zip.validity.valid) {
                document.getElementById('zipError').textContent = 'Enter valid zipcode';
                zip.className = 'error';
            }
        })
    }

    const addEvents = () => {
        emailValidate();
        countryValidate();
        zipValidate();
    }

    return {
        addEvents
    }

}

var form = Form()
form.addEvents();