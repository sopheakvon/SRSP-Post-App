function displayComment (response){
    let comments = response.data;
    

    for(let comment of comments){
        

        const sms = document.createElement('div');
        sms.classList.add('alert');
        sms.classList.add('alert-info');

        const userName = document.createElement('strong');
        const messages = document.createElement('span');

        userName.textContent = comment.username + " : ";
        messages.textContent = comment.message;

        sms.appendChild(userName);
        sms.appendChild(messages);
        cardComment.appendChild(sms);
    }
}

function sendMessage (){
    
    const messages = document.querySelector('#comment').value;
    let messageBody = {
        username: "Unknown", message: messages
    };
    console.log(messageBody);
    const url ="http://localhost:5000/comments";
    axios
    .post(url,messageBody)
    .then(displayComment)
}

function loadMessage(){
    const url ="http://localhost:5000/comments";
    axios
    .get(url)
    .then(displayComment)
}
const btnSend = document.querySelector('button');
btnSend.addEventListener('click',sendMessage);
const cardComment = document.querySelector('.card-comment');
loadMessage();
