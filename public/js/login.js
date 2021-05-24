function login(response, userName, password){
    let users = response.data;

    for(let user of users){
        if (user.username === userName && user.password === password){
            localStorage.setItem("username", user.username);
            localStorage.setItem("color", user.color);
            window.location.href = "https://srsp-post-app.herokuapp.com/comment.html";
        }
    }

}

function inputUser(){
    const user = document.querySelector('#user').value;
    const pass = document.querySelector("#pwd").value;

    const url = "https://srsp-post-app.herokuapp.com/users";
    // const url = "http://localhost:5000/users";
    axios
    .get(url)
    .then(res=> login(res, user, pass));
    
    
}


const btnLogin = document.querySelector('#btn-login');
btnLogin.addEventListener('click',inputUser);


