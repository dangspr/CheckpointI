const inputNickname = document.querySelector('#nick');
const inputChampion = document.querySelector('#champion');
const inputLane = document.querySelector('#lane');
let contentRef = document.querySelector('#content');
const registerBtnRef = document.querySelector("#registerBtn");
const charFormRef = document.querySelector("#charForm");


var formErrors = {
    nick: true  ,
    champion: true,
    lane: true
};

function checkFormValidity() {
    const formErrorsArray = Object.values(formErrors);
    const formValidity = formErrorsArray.every(item => item === false);

    registerBtnRef.disabled = !formValidity;
}

function validateInput(inputRef) {
    const inputValid = inputRef.checkValidity();
    const elementFatherRef = inputRef.parentElement;

    if (inputValid) {
        elementFatherRef.classList.remove('error');
    } else {
        elementFatherRef.classList.add('error');
    }

    formErrors[inputRef.id] = !inputValid;

    checkFormValidity();
}

function register(event) {

    event.preventDefault();

    let characters = [];

    let character = {
        nick: "",
        champion: "",
        lane: ""
    }

    character.nick = document.querySelector("#nick").value;
    character.champion = document.querySelector("#champion").value;
    character.lane = document.querySelector("#lane").value;

    characters.push(character);

    console.log(characters);

    for (const char of characters) {
        contentRef.innerHTML += `
                <div class="card">
                <div class="card-image">
                <img src="${char.imgURL}" alt="">
            </div>
                    <div class="card-content">
                        <h3>${char.nick}</h3>
                        <h2>${char.champion}</h2>
                        <p>${char.lane}</p>
                    </div>        
                </div>`
    }

    registerBtnRef.disabled = true;
    charFormRef.reset();

    formErrors.nick = true;
    formErrors.champion = true;
    formErrors.lane = true;

}

inputNickname.addEventListener('keyup', () => validateInput(inputNickname));
inputChampion.addEventListener('keyup', () => validateInput(inputChampion));
inputLane.addEventListener('keyup', () => validateInput(inputLane));
registerBtnRef.addEventListener('click', (event) => register(event));