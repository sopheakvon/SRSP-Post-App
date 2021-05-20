function displayUser(response){
    // console.log(response.data);
    let users = response.data;
    let userList = document.querySelector('.user-list');
    let ul = document.querySelector('ul');
    if (ul !== null){
        ul.remove();
    }

    const newUl = document.createElement('ul');
    for (let user of users) {
        const li = document.createElement('li');
        li.textContent = user.id + " " +user.username + " " + user.password;
        newUl.appendChild(li);
        userList.appendChild(newUl);
    }
}

function save(event) {
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    let user = {username: username,  password: password};
    const url ="http://localhost:5000/api/users";
    axios
    .post(url, user)
    .then(displayUser);
}

// function loadData() {
//     const url="http://localhost:5000/api/users";
//     axios
//     .get(url)
//     .then(displayUser)
// }


function deleteUser () {

}

function updateUser () {
    
}
const saveUser = document.querySelector('#save');
saveUser.addEventListener('click', save);

// loadData();