



function displayComment (response){
    
    const comments = response.data;
    for(let comment of comments){
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = comment.username + " : " + comment.message;
        ul.appendChild(li);

    }

}

function save(){
    const url = "http://localhost:5000/comments";
    axios
    .get(url)
    .then(displayComment);

    
}
const btnSend = document.querySelector('button');
save();
