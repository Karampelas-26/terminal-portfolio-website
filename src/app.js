const app = document.querySelector("#app");



app.addEventListener('keypress', function (e) {
    console.log("hatem")
    if (e.key == 'Enter'){
        console.log("i hit enter");
        const input = document.querySelector('input').value;
        createParagraph(input);
    }
} )

function createParagraph(text){
    const p = document.createElement("p");
    p.innerHTML = text;
    p.setAttribute("class", "text");
    const input = document.querySelector('input');
    app.insertBefore(p, input);
    input.focus();
    input.value = '';
    
}

function createInput(){
    const input = document.createElement("input");
    input.setAttribute("class", "text input")
    app.appendChild(input);

}


function createTerminal(){
    
    createInput();
    createParagraph("Hello i m George");
    createParagraph("This is my portfolio website");
    createParagraph("Hello i m George");
    createParagraph("This is my portfolio website");
    createParagraph("Hello i m George");
    createParagraph("This is my portfolio website");
    createParagraph("Hello i m George");
    createParagraph("This is my portfolio website");
    createParagraph("Hello i m George");
    createParagraph("This is my portfolio website");
    createParagraph("Hello i m George");
 


}

createTerminal();