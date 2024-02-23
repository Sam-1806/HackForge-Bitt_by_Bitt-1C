document.getElementById("form").addEventListener("submit", (event) => {

    event.preventDefault();
})
function login() {

    const email = document.getElementById("logEmail").value;
    const password = document.getElementById("logPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password)

        .catch((error) => {

            document.getElementById("error").innerHTML = "Invalid login credentials"
        })
}

firebase.auth().onAuthStateChanged((user) => {

    if (user) {
        location.replace("index.html");
    }
})
var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function login1() {
    x.style.left = "27px";
    y.style.right = "-350px";
    z.style.left = "0px";
}
function register() {
    x.style.left = "-350px";
    y.style.right = "25px";
    z.style.left = "150px";
}
// view password codes


function myLogPassword() {
    var a = document.getElementById('logPassword');
    var b = document.getElementById('eye');
    var c = document.getElementById('eye-slash');
    if (a.type === "password") {
        a.type = "text"
        b.style.opacity = "0";
        c.style.opacity = "1";
    } else {
        a.type = "password"
        b.style.opacity = "1";
        c.style.opacity = "0";
    }
}


function myRegPassword() {
    var d = document.getElementById('regPassword');
    var b = document.getElementById("eye-2");
    var c = document.getElementById("eye-slash-2");
    if (d.type === "password") {
        d.type = "text"
        b.style.opacity = "0";
        c.style.opacity = "1";
    } else {
        d.type = "password"
        b.style.opacity = "1";
        c.style.opacity = "0";
    }
}