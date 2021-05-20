let requestComment = (response) => {
    let comments = response.data;
    const commentArea = document.querySelector('.comment');
    const listComment = document.querySelector('ul');
    if (listComment !== null) {
        listComment.remove();
     }
    const newListComment = document.createElement('ul');
    for (let comment of comments) {
        const singleComment = document.createElement('li');
        const user = document.createElement('span');
        const comm = document.createElement('span');
        user.classList.add('user');
        comm.classList.add('comm');
        user.textContent = "@" + comment.username + ": ";
        comm.textContent = comment.comment;
        singleComment.appendChild(user);
        singleComment.appendChild(comm);
        newListComment.appendChild(singleComment)
        commentArea.appendChild(newListComment)
    }
}


let loadComment = () => {
    const url = "https://nodedy.herokuapp.com/post";
    axios.get(url).then(requestComment);
    
}


let sendComment = (event) => {
    const username = document.querySelector('#username').value;
    const comment = document.querySelector('#comment').value;
    let newComment = {
        username: username,
        comment: comment
    }
    const url = "https://nodedy.herokuapp.com/post";
    axios.post(url, newComment).then(requestComment);
}

let enableButton = () => {
    btnSend.removeAttribute('disabled', '')
}
let disableButton = () => {
    btnSend.setAttribute('disabled', '')
}

document.addEventListener('keyup', () => {
    const username = document.querySelector('#username').value;
    const comment = document.querySelector('#comment').value;
    if (username !== "" && comment !== "") {
        enableButton()
    } else {
        disableButton();
    }
});
const btnSend = document.querySelector('#send-comment');
btnSend.addEventListener('click', sendComment);

// emoji
new EmojiPicker();


setInterval(loadComment, 5000);