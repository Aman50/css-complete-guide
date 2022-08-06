var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

var planSelectionBtns = document.querySelectorAll('.plan .button');

var modalCloseBtn = document.querySelector('.modal .modal__action--negative');

for(var i = 0; i < planSelectionBtns.length; i++) {
    planSelectionBtns[i].addEventListener('click', function() {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
};

modalCloseBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}