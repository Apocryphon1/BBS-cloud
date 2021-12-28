const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
this.flag2 = true;


function checkinput() {
    const emailvalue = email.value.trim();
    const passwordValue = password.value.trim();
    if (emailvalue === '') {
        seterror(email, 'Email cannot be empty');
    }
    else if (!checkmail(emailvalue)) {
        seterror(email, 'not a valid Email');
    } else {
        setsuccess(email);
    }
    if (passwordValue === '') {
        seterror(password, 'Password cannot be blank');
    } else {
        setsuccess(password);
    }

}
function seterror(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-controll ghalat';
    this.flag2 = false;

}
function setsuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-controll sah';
}
function checkmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
app.post('/submit-login-data', function (req, res) {
    var email = req.body.emaill;
    var password = req.body.passwordd;
    res.redirect('/ViewDonations.html');

   

})