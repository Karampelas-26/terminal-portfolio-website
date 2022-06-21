const app = document.querySelector("#app");

const paragraphs = [];

const commands = [];

let iterator = 1;

const colors = {
    text: "#fff",
    green: "#5df25d"
}


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

function createParagraph(text, color){
    const p = document.createElement("p");
    p.innerHTML = text;
    p.setAttribute("class", "text");
    p.style.color = color;
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
    createParagraph("Hi, I'm George!<br>Welcome on my terminal portfolio, type 'help' to view available commands.", colors.text);
    help();
}

async function help(){
    time = 70;
    createParagraph("You can also navigate on previous commands with up and down arrows.", colors.text);
    await sleep(time);
    createHelpLine("about -----------", false, "Show information about me.");
    await sleep(time);
    createHelpLine("skills ---------", false, "View my skills on programming.");
    await sleep(time);
    createHelpLine("all ----------", true, "All my skills.");
    await sleep(time);
    createHelpLine("p ------------", true, "Programming languages and frameworks I know.");
    await sleep(time);
    createHelpLine("sql ----------", true, "Databases that I have worked with.");
    await sleep(time);
    createHelpLine("t ------------", true, "Tools that I use every day or I am familiar with them.");
    await sleep(time);
    createHelpLine("vcs ----------", true, "Tools for Version Control System that I know.");
    await sleep(time);
    createHelpLine("m ------------", true, "Some more of my knowledge.");
    await sleep(time);
    createHelpLine("contact --------", false, "Find me and conctact with me.");
    await sleep(time);
    createHelpLine("all --------", true, "To view all below option as clickable.");
    await sleep(time);
    createHelpLine("email --------", true, "Send me an email.");
    await sleep(time);
    createHelpLine("github -------", true, "Find me on github.");
    await sleep(time);
    createHelpLine("linkedin -----", true, "Connect with me on linked in.");
    await sleep(time);
    createHelpLine("facebook -----", true, "Send me a friend request on facebook.");
    await sleep(time);
    createHelpLine("instagram ----", true, "Follow me on instagram.");
    await sleep(time);
    createHelpLine("phone --------", true, "Or fell free to call me.");
    await sleep(time);
    createHelpLine("help -----------", false, "For help menu.");
    await sleep(time);
    createHelpLine("command_history", false, "To view all command history.");
    await sleep(time);
    createHelpLine("cls ------------", false, "View my skills on programming.");
}

function createHelpLine(option, skill_opt, text){

    const div = document.createElement("div");
    div.setAttribute("class", "help-spacer");

    const span_a = document.createElement("span");
    span_a.setAttribute("class", "text help-a");
    div.appendChild(span_a);

    const span_b = document.createElement("span");
    span_b.setAttribute("class", "text help-b");
    div.appendChild(span_b);


    if(skill_opt){
        span_a.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|________`;
        span_b.innerHTML = '-'+option;
    }
    else{
        span_a.innerHTML = option;
        span_b.innerHTML = '---------------';
    }
    const span_c = document.createElement("span");
    span_c.setAttribute("class", "text help-c");
    span_c.innerHTML = text;
    div.appendChild(span_c);

    removeInput();
    app.appendChild(div);
    createInput();
}

function wrongInput(false_input){
    createParagraph("'"+false_input+"' is not valid command, please enter a valid command or type 'help' to view all commands.", colors.text)
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

async function aboutMe(){
    createParagraph("About me:", colors.green);
    createParagraph("My name is George Karampelas and I am 22 years old. I am studying Computer Science on Athens University of Economicsand Business. In my free time i like to swim or going for a walk late at noon. I also like gaming but due to my low-end laptop i usually creating efficient programs so my laptop doesn't creash or run out of RAM :)");
}

async function mySkills(){
    createParagraph("Programming Languages:", colors.green);
    await programmingLanguages();
    createParagraph("Databases:", colors.green);
    database();
    createParagraph("Tools:", colors.green);
    createParagraph("More:", colors.green);
}

async function programmingLanguages(){

    await createTextWithPercentageBar("Java", 100)
    await createTextWithPercentageBar("Javascript", 60)
    await createTextWithPercentageBar("Python", 55)
    await createTextWithPercentageBar("HTML5", 85)
    await createTextWithPercentageBar("CSS3", 65)
    await createTextWithPercentageBar("C++", 40)
    await createTextWithPercentageBar("NodeJS & Express", 40)
    await createTextWithPercentageBar("C#", 20)
    await createTextWithPercentageBar("C", 30)

}

String.prototype.replaceAtIndex = function(_index, _newValue) {
    const asd = this.substring(0, _index) + _newValue + this.substring(_index + _newValue.length)
    return asd;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function createTextWithPercentageBar(text_a, percentage){

    const div = document.createElement("div");

    const span_a = document.createElement("span");
    span_a.innerHTML = text_a;
    span_a.setAttribute("class", "text part-a");

    const span_b = document.createElement("span");
    
    span_b.setAttribute("class", "text part-b");

    div.appendChild(span_a);
    div.appendChild(span_b);
    div.setAttribute("class", "space-evenly");

    removeInput();
    app.appendChild(div);
    createInput();


    let perc = 0;
    let progress_bar = `[..................................................]`
    let progress_bar_out = `[..................................................] ${perc}%`;
    span_b.innerHTML = progress_bar_out;
    for(let i = 0; i < 100; i++){
        // progress_bar += percentage/2 > i ? "#" : ".";
        if(percentage > i && i%2 === 1) {
            await sleep(10);
            progress_bar = progress_bar.replaceAtIndex((i+1)/2, "#");
            progress_bar_out = progress_bar + ` ${i+1}%`;
        }
        span_b.innerHTML = progress_bar_out;
    }
}

function database(){
    const pre = document.createElement("pre");
    pre.setAttribute("class", "text db-pre");
    createParagraph("These are the database that I have experience. There are both Relational and NoSQL.<br>Personaly I prefer Relational databases and depending to the project I could easily<br>learn how to woek with a database that I have never worked with.");
    pre.innerHTML = 
    "+-------+-------------------------+----------------------+\n|id     | name                    | type                 |\n+-------+-------------------------+----------------------+\n|1      | Microsoft SQL Server    | Relational           |\n|2      | PostgreSQL              | Relational           |\n|3      | MongoDB                 | NoSQL                |\n+-------+-------------------------+----------------------+";
    removeInput();
    app.appendChild(pre);
    createInput();
}

async function contactWithMe(){
    createParagraph("Contact with me", colors.green);
    createParagraph("You can find me here just with a click, or typing, like 'contact -email', where you want to find me and redirect you...")

    const div = document.createElement("div");
    div.setAttribute("class", "links-wraper");
    removeInput();
    app.appendChild(div);

    await createAnchor(div, "mailto:george.karampelas.26@gmail.com", "email");
    await createAnchor(div, "https://github.com/Karampelas-26/", "github");
    await createAnchor(div, "https://www.linkedin.com/in/george-karampelas/", "linkedin");
    await createAnchor(div, "https://www.facebook.com/george.karampelas.26", "facebook");
    await createAnchor(div, "https://www.instagram.com/george_karampelas/", "instagram");
    await createAnchor(div, "tel:+30 6945227237", "phone");
    createInput();
}

async function createAnchor(parent, link, text){

    const anchor = document.createElement("a");
    anchor.href= link;
    anchor.innerHTML = text;
    anchor.setAttribute("class", "link");
    parent.appendChild(anchor)
    await sleep(100);
}

function checkInput(input){
    createCommandText(input);
    switch(input) {
        case "about":
            aboutMe();
            break;
        case "skills":
            mySkills();
            break;
        case "skills -all":
            mySkills();
            break;
        case "skills -p":
            programmingLanguages();
            break;
        case "skills -sql":
            database();
            break;
        case "skills -t":
            mySkills();
            break;
        case "skills -vcs":
            mySkills();
            break;
        case "skills -m":
            mySkills();
            break;
        case "contact":
            contactWithMe();
            break;
        case "contact -email":
            location.href = "mailto:george.karampelas.26@gmail.com"
            break;
        case "contact -github":
            location.href = "https://www.github.com/Karampelas-26/"
            break;
        case "contact -linkedin":
            location.href = "https://www.linkedin.com/in/george-karampelas/"
            break;
        case "contact -facebook":
            location.href = "https://www.facebook.com/george.karampelas.26"
            break;
        case "contact -instagram":
            location.href = "https://www.instagram.com/george_karampelas"
            break;
        case "contact -phone":
            location.href = "tel:+30 6945227237"
            break;
        case "help":
            help();
            break;
        case "command_history":
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