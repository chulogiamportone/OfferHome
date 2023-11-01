var booleannombre=false;
var booleanmail=false;
var booleantext=false;
var booleanprecio=false;
var buscarprecio;
inputs = document.querySelectorAll('input'); //Tomo todos los inputs del html  
texta = document.querySelectorAll('textarea');
expresiones = { //objeto con mis expresiones regulares
    nombre: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{1,30}$/,
    mail: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
    texto: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° .,0-9]{1,400}$/,
    precio:/^[0-9]{1,20}$/,
};

const validar = (e) => { //arrow function para validar datos
    console.log("Validando");
    
    
    switch (e.target.id) {
        case "nombre":
            let t1 = document.querySelector(".terror1");
            if (expresiones.nombre.test(e.target.value)) {
                claseT('nombre')
                t1.innerHTML = ``;
                booleannombre=true;
            } else {
                claseF('nombre');
                booleannombre=false;
                t1.innerHTML = `<p class="TP2">*Complete sin números ni signos entre 1 y 30 caracteres</p>`;
            }
            break;
        case "precio":
            let tp = document.querySelector(".tprecio");
            if (expresiones.precio.test(e.target.value)) {
                claseT('precio')
                tp.innerHTML = ``;
                buscarprecio=e.target.value;
                booleanprecio=true;
            } else {
                claseF('precio');
                tp.innerHTML = `<p class="TP2">*Números entre 1 y 20 caracteres</p>`;
                booleanprecio=false
            }
            break;

        case "mail":
            let t2 = document.querySelector(".terror2");
            if (expresiones.mail.test(e.target.value)) {
                claseT('mail')
                t2.innerHTML = ``;
                booleanmail=true;
            } else {
                claseF('mail');
                booleanmail=false;
                t2.innerHTML = `<p class="TP2">*Complete con formato texto@texto2.com</p>`;
            }
            break;

    }
    if(booleanmail==true && booleannombre==true && booleantext==true){
        //console.log("Validandoentrada");
        let resultado = document.querySelector(".benviar");
        resultado.innerHTML = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Enviar</button>`;
    }else{
        let resultado = document.querySelector(".benviar");
        resultado.innerHTML = ``;
    }
}
const validart = (e) => { //arrow function para validar datos
    console.log("Validando");
    let t3 = document.querySelector(".terror3");
    if (expresiones.texto.test(e.target.value)) {
        claseT('message-text');
        t3.innerHTML = ``;
        booleantext=true;
    } else {
        claseF('message-text');
        booleantext=false;
        t3.innerHTML = `<p class="TP2">*Complete el campo con caracteres entre 1 y 400</p>`;
    }
    if(booleanmail==true && booleannombre==true && booleantext==true){
        //console.log("Validandoentrada");
        let resultado = document.querySelector(".benviar");
        resultado.innerHTML = `<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Enviar</button>`;
    }
    else{
        let resultado = document.querySelector(".benviar");
        resultado.innerHTML = ``;
    }



}
let pb=document.getElementById('precioboton');
pb.addEventListener('click', function () {
    if (booleanprecio==true){
        cambiourl(buscarprecio);
    }
    
});

texta.forEach((textarea) => {
    textarea.addEventListener('keyup', validart);
});

inputs.forEach((input) => {
    input.addEventListener('keyup', validar);
});

const claseF = (a) => {
    
    document.getElementById(a).classList.add('form_error');
    document.getElementById(a).classList.remove('form_correcto');

}
const claseT = (a) => {
    document.getElementById(a).classList.add('form_correcto');
    document.getElementById(a).classList.remove('form_error');
    

}

