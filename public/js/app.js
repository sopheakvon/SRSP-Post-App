function messageModal(user, mes, color, b, i, u, profile) {
    // tver oy div jenh mk mean color
    const sms = document.createElement("div");
    sms.classList.add("alert");
    sms.classList.add(color);
    
    const userName = document.createElement("strong");
    const messages = document.createElement("span");

    let images = document.createElement("img");
    images.src = profile;
    images.style.width ="25px";
    images.style.margin = "8px";
    images.style.marginTop ="5px";

    if(b !== ""){
        messages.classList.add(b);
    };
    if(i !== ""){
        messages.classList.add(i);
    };
    if(u !== ""){
        messages.classList.add(u);
    };
    
    userName.textContent = user + " : ";
    messages.textContent = mes;

    sms.appendChild(images);
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
        messageModal(comment.username, comment.message, comment.color, comment.b, comment.i, comment.u, comment.profile);
    };

};


function sendMessage() {

    const messages = document.querySelector("#comment").value;
    let user = localStorage.getItem("username");
    //get color mk pi local store 
    let color = localStorage.getItem("color");
    let profile = localStorage.getItem("profile");

    let messageBody = {
        username:user,
        message: messages,
        color: color,
        b: fonts.b,
        i: fonts.i,
        u: fonts.u,
        profile: profile,
        
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


// input word user keyup 
document.addEventListener('keyup', () => {

    const messages = document.querySelector("#comment").value;
    if (messages !=="") {
        // open
        enableButton()
    } else {
        // off 
        disableButton();
    };

});
const btnSend = document.querySelector("#btnid");



function loadMessage() {

    // const url = "http://localhost:5000/comments";
    const url = "https://srsp-post-app.herokuapp.com/comments";
    axios
    .get(url)
    .then(displayComment)

};


function textstyles(e){
    const bold = document.querySelector('#bolder');
    const italic = document.querySelector('#italic');
    const underLine = document.querySelector('#underline');
    let i = "";
    let b = "";
    let u = "";
    if(e.target.id === "bolder"){
        bold.classList.toggle("activer");
    };
    if(e.target.id === "italic"){
        italic.classList.toggle("activer");
    };
    if(e.target.id === "underline"){
        underLine.classList.toggle("activer");
    };


// click jom bolder yg ng jam yuk bottun dea store 

    if (e.target.id === "bolder" && e.target.className === "input-group-text activer") {
        b = bolder.textContent.toLowerCase();
    }
     if (e.target.className === "input-group-text" && e.target.id === "bolder") {
        b = "";
    }
    if (e.target.id === "italic" && e.target.className === "input-group-text activer") {
        i = italic.textContent.toLowerCase();
    }
     if (e.target.className === "input-group-text" && e.target.id === "italic")  {
        i = "";
    }
    if (e.target.id === "underline" && e.target.className === "input-group-text activer") {
        u = underline.textContent.toLowerCase();
    }
     if (e.target.className === "input-group-text" && e.target.id === "underline") {
        u = "";
    }
    fonts = { b: b, i: i, u: u}
};




// signout comeback to input username and password
function signOut (){
    sessionStorage.clear();
    // window.location.href = "http://localhost:5000/index.html";
    window.location.href = "https://srsp-post-app.herokuapp.com/index.html";
    
}
const singOUT = document.querySelector("#signid");
singOUT.addEventListener("click", signOut);



// leak khan login ket jea minut
let isLogined = sessionStorage.length > 0;
if (isLogined){
    setInterval(loadMessage, 1000);
}else{
    // window.location.href = "http://localhost:5000/index.html";
    window.location.href = "https://srsp-post-app.herokuapp.com/index.html";
}



btnSend.addEventListener("click", sendMessage);
const cardComment = document.querySelector(".card-comment");
const textStyle = document.querySelector(".text-style");
textStyle.addEventListener("click", textstyles);
// tok store bolder and italick underline
let fonts = {};

