let inputName, inputLastName, inputNacionalidad, inputAge, message, messageButton;

// Creando bloque 1 "container1" de forma dinamica!

function createHTML(){
    const div = document.createElement('div');
    div.classList.add('container1');

    const label = document.createElement('label');
    label.htmlFor = 'name';
    label.textContent = 'Cual es tu nombre ?';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'name';
    input.placeholder = 'Ingrese su nombre';
    input.required = true;


    // Part 2

    const label2 = document.createElement('label');
    label2.htmlFor = 'lastName';
    label2.textContent = 'Cual es tu apellido ?';

    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.id = 'lastName';  //  Debe ser lastName! 
    input2.placeholder = 'Ingrese su apellido';
    input2.required = true;

    // Button

    const button = document.createElement('button');
    button.onclick = firstQuestion;
    button.textContent = 'ok';

    const html = [label, input, label2, input2, button];

    html.forEach(e => {
        div.appendChild(e);
    });

    const containerFather = document.querySelector('.container-father');
    containerFather.appendChild(div);
}

createHTML();

function firstQuestion(){
    const container1 = document.querySelector('.container1');
    const container2 = document.querySelector('.container2');
    inputName = document.getElementById('name').value;
    inputLastName = document.getElementById('lastName').value;

    const soloLetras = /^[A-Za-z]+$/;

    if(soloLetras.test(inputName.trim()) && 
    soloLetras.test(inputLastName.trim())){

        container1.style.display = 'none';
        container2.style.display = 'block';

    } else {
        alert('Por favor, ingrese un nombre con solo letras');
    }
};



function secondQuestion(){
    const container2 = document.querySelector('.container2');
    const container3 = document.querySelector('.container3');
    inputNacionalidad = document.getElementById('nacionalidad').value;

    const soloLetras = /^[A-Za-z]+$/;

    if(soloLetras.test(inputNacionalidad.trim())){

        container2.style.display = 'none';
        container3.style.display = 'block';

    } else {
        alert('Por favor, ingrese una Nacionalidad con solo letras');
    }
};

function thirdQuestion(){
    const container3 = document.querySelector('.container3');
    const message = document.querySelector('.message');
    const messageButton = document.querySelector('.messageButton');
    inputAge = document.getElementById('age').value;

    const soloNumeros = /^[0-9]+$/;

    if(soloNumeros.test(inputAge.trim())){

        container3.style.display = 'none';
        message.style.display = 'block';
        messageButton.style.display = 'block';

        message.textContent = inputName + ' ' + inputLastName + ', ' + inputNacionalidad + ', ' + inputAge + ' años';
    } else {
        alert('Por favor, ingrese la edad con solo numeros');
    }

};

function restartQuestion(){
    location.reload();
};







