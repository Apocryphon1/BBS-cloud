const from = document.getElementById('from');
const to = document.getElementById('to');
const time = document.getElementById('time');
const form = document.getElementById('form')
const errelement = document.getElementById('err');


form.addEventListener('submit', (e) => {
    let errmessages = [];
    if (from.value === '' || from.value === null) {
        errmessages.push('Please Enter The Origin');
    }

    if (to.value === '' || to.value === null) {
        errmessages.push('Please Enter The Destination');
    }

    if (time.value === '' || from.value === null) {
        errmessages.push('Please Enter The Trip Time');
    }


    if (errmessages.length > 0) {
        e.preventDefault()
        errelement.innerText = errmessages.join(', ');
        // jquery
        setInterval(() => {
            $("#err").animate({ color: '#FF0000' }, 1000);
            $("#err").animate({ color: '#000000' }, 1000);
            $("#err").fadeOut(1000);
            $("#err").fadeIn(1000);
        }, 5000);
    }
    else {
        alert('Route Added Successfully');
    }

})




