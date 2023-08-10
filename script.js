function logar(){
    var numero = document.getElementById('numero').value;
    // let fundo = document.querySelector('#corpo')
    // document.getElementById('trocar').style.backgroundColor = "blue"
    var trocar = document.body;
    if(numero >= 1000 && numero <=1999){
        alert('Acesso total a todas as áreas restritas.');
        trocar.style.backgroundColor = 'green';

    }
    else if (numero >= 2000 && numero <=2999){
        alert('acesso limitado a algumas áreas restritas.');
        trocar.style.backgroundColor = 'yellow';
    }
    else{
        trocar.style.backgroundColor = 'red';
        alert('não têm acesso para áreas restritas.')
    }

    // switch (logar) {
    //     case "Acesso total a todas as áreas restritas.":
    //         cor.backgroundColor = 'green';
    //         break;
    // }

}