let optionsEstado = document.querySelector('#dropdownestado')
let arrayEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO']
for (index = 0; index < arrayEstados.length; index += 1) {
    let estados = document.createElement('option')
    estados.innerText = arrayEstados[index]
    optionsEstado.appendChild(estados)
}




function clear() {
    let reset = document.querySelector('#reset')
    let inputTxt = document.querySelectorAll('input')

    reset.addEventListener('click', function () {

        for (let index = 0; index < inputTxt.length; index += 1) {
            let inputIn = inputTxt[index];

            if (inputIn.value.length > 0) {
                inputIn = '';
            }

        }
    })
}

function enviardados(){

let submit = document.querySelector('#myButton')

submit.addEventListener('click', function (Event) {

    Event.preventDefault(Event)
    

    if(document.querySelector('#name').value=="" ||
    document.querySelector('#name').value.length < 8)
    {
    alert( "Preencha campo NOME corretamente!" );
    // document.querySelector('#name').focus();
    return false;
    }
    
    
    if( document.querySelector('#email').value=="" ||
    document.querySelector('#email').value.indexOf('@')==-1 ||
    document.querySelector('#email').value.indexOf('.')==-1 )
    {
    alert( "Preencha campo E-MAIL corretamente!" );
    document.querySelector('#email').focus();
    return false;
    }

    if (document.querySelector('#cpf').value.length < 11)
{
alert( "Preencha o campo CPF corretamente!" );

document.querySelector('#cpf').focus();
return false;
}



})
}



enviardados()