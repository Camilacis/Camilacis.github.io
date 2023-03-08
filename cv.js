const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acento.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letras y espacios, pueden llevar acento.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos ={
    nombre:false,
    apellido:false,
    email:false,
}


const validarFormulario = (event) => {
    switch (event.target.nombre) {
        case "nomrbre":
            validarCampo(expresiones.nombre, event.target, 'nombre')
        break;
        case "apellido":
            validarCampo(expresiones.apellido, event.target, "apellido")
        break;
        case "email":
            validarCampo(expresiones.email, event.target, "email")
        break;
    
    }

}

const validarCampo = (expresiones, input, campo) => { 
    if(expresiones.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto')
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto')
        document.querySelector(`grupo_${campo} i`).classList.remove('fa-solid fa-check-xmark')
        document.querySelector(`grupo_${campo} i`).classList.add('fa-solid fa-circle-xmark')
        document.querySelector(`#grupo_${campo} .formulario_imput-error`).classList.remove('formulario_imput-error-activo')
        campos[campo] = true;
   
    } else{
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto')
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto')
        document.querySelector(`grupo_${campo} i`).classList.remove('fa-solid fa-circle-xmark')
        document.querySelector(`grupo_${campo} i`).classList.add('fa-solid fa-check-xmark')
        document.querySelector(`#grupo_${campo} .formulario_imput-error`).classList.add('formulario_imput-error-activo') 
        campos[campo] = false;
    }
}
    
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
    
});
    
validarFormulario.addEventListener('submit', (event) =>{
    event.preventDefault();

    const terminos = document.getElementById ('termninos')
    if(campos.nombre && campos.apellido && campos.email && terminos.check){
        formulario.reset()

        document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo')
        setTimeout(() => {
            document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo')

        }, 10000);
        document.querySelectorAll('.formulario_grupo-correcto').forEach((icono)=>{
            icono.classList.remove('formulario_grupo-correcto')
        })

    } else{
        document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo')
    }

});

