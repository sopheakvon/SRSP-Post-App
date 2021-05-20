



function displayComment (response){
    
    const comments = response.data;
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

function save(){
    const url = "http://localhost:5000/comments";
    axios
    .get(url)
    .then(displayComment);

    
}
const btnSend = document.querySelector('button');

const cardComment = document.querySelector('.card-comment');

save();

