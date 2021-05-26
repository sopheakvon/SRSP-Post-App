function login(response, userName, password){
    let users = response.data;

    for(let user of users){
        if (user.username === userName && user.password === password){
            localStorage.setItem("username", user.username);
            localStorage.setItem("color", user.color);
            localStorage.setItem("profile", user.profile);
            sessionStorage.setItem("login", user.username);
            window.location.href = "http://localhost:5000/comment.html";
            //link comment show result of commnet 
        }
    }
}

function inputUser(){
    const user = document.querySelector('#user').value;
    const pass = document.querySelector("#pwd").value;

    // const url = "https://srsp-post-app.herokuapp.com/users";
    const url = "http://localhost:5000/users";

    axios
    .get(url)
    .then(res=> login(res, user, pass))
    };

const btnLogin = document.querySelector('#btn-login');
btnLogin.addEventListener('click', inputUser);


// pil deal input username and password alredy can't resresh
let isLogined = sessionStorage.length > 0;
if (isLogined){
    window.location.href = "http://localhost:5000/comment.html";
}
