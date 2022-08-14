var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

var planSelectionBtns = document.querySelectorAll('.plan .button');

var modalCloseBtn = document.querySelector('.modal .modal__action--negative');

var sideNavToggleBtn = document.querySelector('.toggle-button');
var sideNav = document.querySelector('.mobile-nav');

for(var i = 0; i < planSelectionBtns.length; i++) {
    planSelectionBtns[i].addEventListener('click', function() {
        backdrop.style.display = 'block';
        setTimeout(() => {
            backdrop.classList.add('open');
        }, 20);
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

    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('open');
    }, 20);
});

function closeModal() {
    backdrop.classList.remove('open');
    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 500);
    if (modal) {
        modal.classList.remove('open');
    }
}