const abrirModal = document.querySelector('.boton-primario');
const modal = document.querySelector('.modal');
const cerrarModal= document.querySelector('.modal-cerrar')

abrirModal.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.classList.add('modal--ver');
});

cerrarModal.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.classList.remove('modal--ver');
});