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
                if (document.getElementById('email-icon')) {
                    document.getElementById('email-icon').remove();
                }
            }else if (!emailInp.validity.valid) {
                document.getElementById('emailError').textContent = 'Please enter valid email';
                emailInp.className = 'error';
                if (document.getElementById('email-icon')) {
                    document.getElementById('email-icon').remove();
                }
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
                if (document.getElementById('country-icon')) {
                    document.getElementById('country-icon').remove();
                }
            } else if (!country.validity.valid) {
                document.getElementById('countryError').textContent = 'Enter valid country';
                country.className = 'error';
                if (document.getElementById('country-icon')) {
                    document.getElementById('country-icon').remove();
                }
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
                if (document.getElementById('zip-icon')) {
                    document.getElementById('zip-icon').remove();
                }
            } else if (!zip.validity.valid) {
                document.getElementById('zipError').textContent = 'Enter valid zipcode';
                zip.className = 'error';
                if (document.getElementById('zip-icon')) {
                    document.getElementById('zip-icon').remove();
                }
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
                confirmPwd();
            } else if (pwd.value == '') {
                document.getElementById('pwdError').textContent = '';
                pwd.className = '';
                if (document.getElementById('pwd-icon')) {
                    document.getElementById('pwd-icon').remove();
                }
            } else {
                document.getElementById('pwdError').textContent = 'Passwords need to be 8 characters';
                pwd.className = 'error';
                if (document.getElementById('pwd-icon')) {
                    document.getElementById('pwd-icon').remove();
                }
            }
        })
    }

    const confirmPwd = () => {
        const pwdKey = document.getElementById('pwd').value;
        const confirm = document.getElementById('pwd-confirm');
        var check = new Image();
        check.src = Icon;

        confirm.addEventListener('input', function() {
            if (pwdKey == confirm.value) {
                document.getElementById('confirmError').textContent = '';
                confirm.className = 'success';
                let confirmIcon = document.getElementById('confirm-row').insertAdjacentElement('beforeend', check);
                confirmIcon.setAttribute('id', 'confirm-icon');
            } else if (confirm.value == '') {
                document.getElementById('confirmError').textContent = '';
                confirm.className = '';
                if (document.getElementById('confirm-icon')) {
                    document.getElementById('confirm-icon').remove();
                }
            } else if (pwdKey != confirm.value) {
                document.getElementById('confirmError').textContent = 'Passwords do not match';
                confirm.className = 'error';
                if (document.getElementById('confirm-icon')) {
                    document.getElementById('confirm-icon').remove();
                }
            }
        })
    }

    const submitForm = () => {
        const form = document.getElementById('form');

        form.addEventListener('submit', function(e) {
            var inputList = Array.from(document.querySelectorAll('input'));
            var status = [];

            inputList.forEach(x => status.push(x.className));
            if (status.includes('error')) {
                document.getElementById('loginError').textContent = 'Please fix all incorrect fields to login';
                e.preventDefault()
            } else {
                document.getElementById('loginError').textContent = '';
                alert(`You're in!`)
            }
            
        })
    }

    const addEvents = () => {
        emailValidate();
        countryValidate();
        zipValidate();
        pwdValidate();
        submitForm();
    }

    return {
        addEvents
    }

}

var form = Form()
form.addEvents();