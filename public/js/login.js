// function login(response, userName, password){
//     let users = response.data;

//     for(let user of users){
//         if (user.username === userName && user.password === password){
//             localStorage.setItem("username", user.username);
//             localStorage.setItem("color", user.color);
//             localStorage.setItem("profile", user.profile);
//             sessionStorage.setItem("login", user.username);
//             window.location.href = "http://localhost:5000/comment.html";
//             //link comment show result of commnet 
//         }
//     }
// }

// function inputUser(){
//     const user = document.querySelector('#user').value;
//     const pass = document.querySelector("#pwd").value;

//     // const url = "https://srsp-post-app.herokuapp.com/users";
//     const url = "http://localhost:5000/users";

//     axios
//     .get(url)
//     .then(res=> login(res, user, pass))
//     };

// const btnLogin = document.querySelector('#btn-login');
// btnLogin.addEventListener('click', inputUser);


// // pil deal input username and password alredy can't resresh
// let isLogined = sessionStorage.length > 0;
// if (isLogined){
//     window.location.href = "http://localhost:5000/comment.html";
// }



let counterFailLogin = 0;
function displayMessage (color, messages, text){
    counterFailLogin++;
    let oldMessage = document.querySelector(".alert");
    if(oldMessage !== null){
        oldMessage.remove();
    }

    let message = document.createElement('div');
    message.classList.add("alert");
    message.classList.add(color);
    
    let strong = document.createElement("strong");
    strong.textContent = counterFailLogin + text;

    let sms = document.createElement('span');
    sms.textContent = messages;
    

    message.appendChild(strong);
    message.appendChild(sms);
    col6.appendChild(message);
};


function login(response, userName, password){
    let users = response.data;
    let isLogin = false;
    for(let user of users){
        if (user.username === userName && user.password === password && !isLogin){
            isLogin = true;
            localStorage.setItem("username", user.username);
            localStorage.setItem("color", user.color);
            localStorage.setItem("profile", user.profile);
            sessionStorage.setItem("login", user.username);
        };
    };

    if(counterFailLogin>5){
        window.location.href = "http://localhost:5000/404.html";
    }else{
        
    }
    
    if(isLogin){
        displayMessage("alert-success", " Login Success", " Welcome!!");
        setTimeout(()=> {
            //link comment show result of commnet 
            window.location.href = "http://localhost:5000/comment.html"
        }, 2000);
        
    }else{
        displayMessage("alert-danger", " Login Fail ", " Sorry try again!! ");
    };
};

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

let col6 = document.querySelector('.col-6');


// pil deal input username and password alredy can't resresh
let isLogined = sessionStorage.length > 0;
if (isLogined){
    window.location.href = "http://localhost:5000/comment.html";
}
