var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

var planSelectionBtns = document.querySelectorAll('.plan .button');

var modalCloseBtn = document.querySelector('.modal .modal__action--negative');

var sideNavToggleBtn = document.querySelector('.toggle-button');
var sideNav = document.querySelector('.mobile-nav');

for(var i = 0; i < planSelectionBtns.length; i++) {
    planSelectionBtns[i].addEventListener('click', function() {
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
};

backdrop.addEventListener('click', () => {
    sideNav.classList.remove('open');
    closeModal();
});

if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
}

sideNavToggleBtn.addEventListener('click', () => {
    sideNav.classList.add('open');
    backdrop.classList.add('open');
});

function closeModal() {
    backdrop.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
}