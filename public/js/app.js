function displayComment (response){
    let comments = response.data;
    const ul = document.querySelector('ul');

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

function save(event){
    const item = document.querySelector('.form-control').value;
    // let newItem = {username: parseInt(id), message: item};
    const url ="http://localhost:5000/comments";
    axios
    // .get(url, newItem)
    .get(url)
    .then(displayComment)
}
// const url ="http://localhost:5000/comments";
// axios
// .get(url)
// .then(displayComment)

const btnSend = document.querySelector('button');
const cardComment = document.querySelector('.card-comment');
save();
