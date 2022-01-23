let openModal = document.querySelector('.open__modal');
let modal = document.querySelector('.modal');
let modalActive = document.querySelector('modal--active');
let close = document.querySelector('.modal__close');

openModal.addEventListener('click', function(){
    modal.classList.add('modal--active')
});

close.addEventListener('click', function(){
    modal.classList.remove('modal--active')
});