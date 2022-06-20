const app = document.querySelector("#app");

const paragraphs = [];

const commands = [];

let iterator = 1;

app.addEventListener('keypress', function (e) {
    if (e.key == 'Enter'){
        console.log("enter key");
        const input = document.querySelector('input').value;
        checkInput(input);
    }
} )

app.addEventListener('keydown', function (e){
    //up key code 
    if(e.keyCode == 38){
        upCommand();
    }
    //down key coode
    if(e.keyCode == 40){
        downCommand();
    }
})

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
    span_user.innerHTML = `user@User:~$ `;
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
    input.setAttribute("id", "only-input");
    const span = document.createElement("span");
    span.innerHTML = `user@User:~$ `;
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
    createParagraph("Hi, I'm George!");
    createParagraph("Welcome on my terminal portfolio, type 'help' to view available commands.");
}

//it doesnt keep the string format
function help(){
    const p = document.createElement("pre");
    p.innerHTML = "about      Show information about me.<br>skills     View my skills on programming.<br>contact    Find me and conctact with me.<br>help       For help menu.<br>history    To view command history<br>cls        To clean terminal.";
    p.setAttribute("class", "text");
    paragraphs.push(p);
    removeInput();
    app.appendChild(p)
    createInput();
}

function wrongInput(false_input){
    createParagraph("'"+false_input+"' is not valid command, please enter a valid command or type 'help' to view all commands.s")
}

function upCommand(){
    const input = document.getElementById("only-input");
    if(iterator == 0){
        return;
    }
    iterator--;
    let command = commands[iterator];
    input.value = command;
}

function downCommand(){
    const input = document.getElementById("only-input");
    if(iterator == commands.length){
        input.value = '';
        return;
    } 
    let command = commands[iterator];
    input.value = command;
    iterator++;
}

function cleanTerminal(){
    createCommandText("cls");
    app.textContent = '';
    createInput();
}

function generateHistory(){
    removeInput();
    paragraphs.forEach(element => {
        app.appendChild(element);
    });
    createInput();
    iterator = paragraphs.length;
}

function aboutMe(){
    createParagraph(
        `I am 22 years old and Iam studying Computer Science on Athens University of 
        Economicsand Business.<br> In my free time i like to swim or going for a walk late at noon.
        <br>I also like gaming but due to my low-end laptop i usually creating efficient programs so my laptop 
        doesn't creash or run out of ram :)`
    );
}

function mySkills(){
    createParagraph(
        `
        Programming Languages:<br>
        Java ============ 86%<br>
        Python ============ 86%<br>
        C++ ============ 86%<br>
        HTML5 ============ 86%<br>
        CSS3 ============ 86%<br>
        Javascript ============ 86%<br>
        C ============ 86%<br>
        NodeJS ============ 86%<br>
        Express ============ 86%<br>
        C# ============ 86%<br>
        `
    );
}


function contactWithMe(){
    createParagraph(`
    george.karampelas.26@gmail.com<br>
    github.com/Karampelas-26<br>
    linkedin.com/in/george-karampelas<br>
    facebook.com/george.karampelas.26<br>
    instagram.com/george_karampelas<br>
    +30 6945227237<br>
    `);
}


function checkInput(input){
    switch(input) {
        case "about":
            aboutMe();
            break;
        case "skills":
            mySkills();
            break;
        case "contact":
            contactWithMe();
            break;
        case "help":
            help();
            break;
        case "history":
            generateHistory();
            break;
        case "cls":
            cleanTerminal();
            break;
        default: 
            wrongInput(input);
    }

    commands.push(input);
    iterator = commands.length;

}

createTerminal();