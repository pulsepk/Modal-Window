'use strict';
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnmodal = document.querySelectorAll('.show-modal');
const close = document.querySelector('.close-modal');

const openmodal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i=0; i<btnmodal.length; i++){
    btnmodal[i].addEventListener('click', openmodal);
}
const closemodal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

close.addEventListener('click', closemodal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closemodal();
    }
})