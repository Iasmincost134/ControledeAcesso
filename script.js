function logar(){
    var numero = document.getElementById('numero').value;
    // let fundo = document.querySelector('#corpo')

    if(numero >= 1000 && numero <=1999){
        alert('Acesso total a todas as áreas restritas.');
        // fundo.style.backgroundColor = '#ffbe0b'
    }
    else if (numero >= 2000 && numero <=2999){
        alert('acesso limitado a algumas áreas restritas.');
    }
    else{
        alert('não têm  acesso para áreas restritas.')
    }

}