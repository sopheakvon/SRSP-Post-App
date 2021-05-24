function messageModal(user, mes, color, B, I, U) {
    const sms = document.createElement("div");
    sms.classList.add("alert");
    sms.classList.add(color);

    const userName = document.createElement("strong");
    const messages = document.createElement("span");
    if (B !== "") messages.classList.add(B);
    if (I !== "") messages.classList.add(I);
    if (U !== "") messages.classList.add(U);
    
    userName.textContent = user + " : ";
    messages.textContent = mes;
    
    sms.appendChild(userName);
    sms.appendChild(messages);
    cardComment.appendChild(sms);

};

function displayComment(response) {
    let comments = response.data;
    let removemessage = document.querySelectorAll(".alert");
    for (let message of removemessage) {
        message.remove();

    };
    for (let comment of comments) {
        messageModal(comment.username, comment.message, comment.color, comment.b, comment.i, comment.u);
    };
};

function sendMessage() {
    let messages = document.querySelector("#comment").value;
    let user = localStorage.getItem("username");
    let color = localStorage.getItem('color');

    let messageBody = {

        username:user,
        message: messages,
        color: color,
        b: font.b,
        i: font.i,
        u: font.u,
    };

    // const url = "http://localhost:5000/comments";
    const url = "https://srsp-post-app.herokuapp.com/comments";
    axios
    .post(url, messageBody)
    .then(displayComment);

    document.querySelector("#comment"). value = "";
    disableButton();
};

let enableButton = () => {
    btnSend.removeAttribute('disabled')
};
let disableButton = () => {
    btnSend.setAttribute('disabled', '')
};
document.addEventListener('keyup', () => {
    
    const messages = document.querySelector("#comment").value;
    if (messages !=="") {
        enableButton()
        // console.log(messages);
    } else {
        disableButton();
    };
});
const btnSend = document.querySelector("#btnid");




function loadMessage() {
    // const url = "http://localhost:5000/comments";
    const url = "https://srsp-post-app.herokuapp.com/comments";
    axios.get(url).then(displayComment);
};

function textstyles(e){
    const bolder = document.querySelector('#bolder');
    const italic = document.querySelector('#italic');
    const underLine = document.querySelector('#underline');
    let i = "";
    let u = "";
    let b = "";
    if(e.target.id === "bolder"){
        bolder.classList.toggle("activer");
    };
    if(e.target.id === "italic"){
        italic.classList.toggle("activer");
    };
    if(e.target.id === "underline"){
        underLine.classList.toggle("activer");
    };

    if(e.target.id === 'bolder' && e.target.className === 'input-group-text activer'){
        b = bolder.textContent.toLowerCase();
    }
    if(e.target.className === "input-group-text" && e.target.id === 'bolderr'){
        b = "";
    }
    if(e.target.id === 'italic' && e.target.className ==='input-group-text activer'){
        i = italic.textContent.toLowerCase();
    }
    if(e.target.className === 'input-group-text' && e.target.id === 'italic'){
        i = "";
    }
    if(e.target.id === "underline" && e.target.className === "input-group-text activer"){
        u = underLine.textContent.toLowerCase();
    }
    if(e.target.className === "input-group-text" && e.target.id === "underline"){
        u = "";
    }
    

    font = {b: b, i: i, u: u};
    
};

btnSend.addEventListener("click", sendMessage);
let font = {};
const cardComment = document.querySelector(".card-comment");
const textStyle = document.querySelector(".text-style");
textStyle.addEventListener("click", textstyles);
setInterval(loadMessage,1000);
















