const app = document.querySelector("#app");

const paragraphs = [];

app.addEventListener('keypress', function (e) {
    if (e.key == 'Enter'){
        const input = document.querySelector('input').value;
        createCommandText(input);
    }
} )

function createParagraph(text){
    const p = document.createElement("p");
    p.innerHTML = text;
    p.setAttribute("class", "text");
    paragraphs.push(p);
    removeInput();
    app.appendChild(p)
    createInput();   
}

function createCommandText(text){
    const span_user = document.createElement("span"); 
    span_user.innerHTML = `user@root:~$ `;
    span_user.setAttribute("class", "user text")
    const span_command = document.createElement("span");
    span_command.innerHTML = text; 
    span_command.setAttribute("class", "text");
    const p = document.createElement("p");
    p.setAttribute("class", "text")
    removeInput();
    p.appendChild(span_user);
    p.appendChild(span_command);
    paragraphs.push(p);
    app.appendChild(p);
    createInput();

}

function removeInput(){
    const input = document.getElementById("input-paragraph");
    input.remove();
}

function createInput(){
    const input = document.createElement("input");
    input.setAttribute("class", "text input")
    const span = document.createElement("span");
    span.innerHTML = `user@root:~$ `;
    span.setAttribute("class", "user");
    const p = document.createElement("p")
    p.setAttribute("class", "text")
    p.setAttribute("id", "input-paragraph")
    p.appendChild(span);
    p.appendChild(input);
    app.appendChild(p);
    input.focus();
}


function createTerminal(){
    createInput();
    createParagraph("Hi,");
    createParagraph("I'm George!");
}

createTerminal();