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

    return {
        emailValidate
    }

}

var form = Form()
form.emailValidate();