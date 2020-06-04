const navBtn = document.getElementById('nav-btn');
const modal = document.getElementById('modal-container');
const signBtn = document.getElementById('sign-up');
const closeBtn = document.getElementById('modal-close');


// Show/hide navbar
navBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
})

// Show modal
signBtn.addEventListener('click', () => {
    modal.classList.add('show-modal');
})

// Hide modal
// With button
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})

// With click outside modal
modal.addEventListener('click', (e) => {
    e.target == modal ? modal.classList.remove('show-modal') : false;
})