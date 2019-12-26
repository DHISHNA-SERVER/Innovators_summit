function post(path, params, method='post') {

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    const form = document.createElement('form');
    form.method = method;
    form.action = path;

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = key;
            hiddenField.value = params[key];

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

function get_val(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("subject").value;
    console.log("here");
    post('http://13.127.118.173/pay',{name : name , email : email , number : number});
    console.log("Sent request");
}