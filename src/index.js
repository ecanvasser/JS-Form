import './style.css';
import Icon from './checkmark.png';

const Form = () => {

    const emailValidate = () => {
        const emailInp = document.getElementById('email');
        var check = new Image();
        check.src = Icon;
        
        document.getElementById('email').addEventListener('input', function() {
            if (emailInp.validity.valid) {
                document.getElementById('emailError').textContent = '';
                emailInp.className = 'success';
                let emailIcon = document.getElementById('email-row').insertAdjacentElement('beforeend', check);
                emailIcon.setAttribute('id', 'email-icon');
            } else if (emailInp.value == '') {
                document.getElementById('emailError').textContent = '';
                emailInp.className = '';
                document.getElementById('email-icon').remove();
            }else if (!emailInp.validity.valid) {
                document.getElementById('emailError').textContent = 'Please enter valid email';
                emailInp.className = 'error';
            }
        })
    }

    const countryValidate = () => {
        const country = document.getElementById('country');
        var check = new Image();
        check.src = Icon;

        country.addEventListener('input', function() {
            if (country.validity.valid) {
                document.getElementById('countryError').textContent = '';
                country.className = 'success';
                let countryIcon = document.getElementById('country-row').insertAdjacentElement('beforeend', check);
                countryIcon.setAttribute('id', 'country-icon')
            } else if (country.value == '') {
                document.getElementById('countryError').textContent = '';
                country.className = '';
                document.getElementById('country-icon').remove();
            } else if (!country.validity.valid) {
                document.getElementById('countryError').textContent = 'Enter valid country';
                country.className = 'error';
            }
        })
    }

    const zipValidate = () => {
        const zip = document.getElementById('zip');
        var check = new Image();
        check.src = Icon;

        zip.addEventListener('input', function() {
            if (zip.validity.valid) {
                document.getElementById('zipError').textContent = '';
                zip.className = 'success';
                let zipIcon = document.getElementById('zip-row').insertAdjacentElement('beforeend', check);
                zipIcon.setAttribute('id', 'zip-icon')
            } else if (zip.value == '') {
                document.getElementById('zipError').textContent = '';
                zip.className = '';
                document.getElementById('zip-icon').remove();
            } else if (!zip.validity.valid) {
                document.getElementById('zipError').textContent = 'Enter valid zipcode';
                zip.className = 'error';
            }
        })
    }

    const pwdValidate = () => {
        const pwd = document.getElementById('pwd');
        var check = new Image();
        check.src = Icon;

        pwd.addEventListener('input', function() {
            if (pwd.validity.valid) {
                document.getElementById('pwdError').textContent = '';
                pwd.className = 'success';
                let pwdIcon = document.getElementById('pwd-row').insertAdjacentElement('beforeend', check);
                pwdIcon.setAttribute('id', 'pwd-icon');
            } else if (pwd.value == '') {
                document.getElementById('pwdError').textContent = '';
                pwd.className = '';
                document.getElementById('pwd-icon').remove();
            } else {
                document.getElementById('pwdError').textContent = 'Passwords need to be 8 characters';
                pwd.className = 'error';
            }
        })
    }

    const addEvents = () => {
        emailValidate();
        countryValidate();
        zipValidate();
        pwdValidate();
    }

    return {
        addEvents
    }

}

var form = Form()
form.addEvents();