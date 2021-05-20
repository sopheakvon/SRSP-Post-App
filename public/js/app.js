function displayUser(response){
    // console.log(response.data);
    let users = response.data;
    let userList = document.querySelector('.message');
    let ul = document.querySelector('ul');
    if (ul !== null){
        ul.remove();
    }
    
    const newUl = document.createElement('ul');
    for(let comment of users){
        // const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = comment.username + " : " + comment.message;
        ul.appendChild(li);
        userList.appendChild(ul);
    }
}

function save(){
    const comments = document.querySelector('#comments').value;
    let user = {comments: comments};
    const url = "http://localhost:5000/comments";
    axios
    .get(url, user)
    .then(displayUser);
}

function loadData() {
    const url="http://localhost:5000/comments";
    axios
    .get(url)
    .then(displayUser)
}

function deleteUser () {

}

function updateUser () {
    
}
// const btnSend = document.querySelector('button');
const saveUser = document.querySelector('#send-comment');
saveUser.addEventListener('click', save);
save();






