const petals = document.querySelectorAll('.petal');
const messageBox = document.getElementById('message-box');

petals.forEach((petal) => {
    petal.addEventListener('click', () => {
        const message = petal.getAttribute('data-message');
        messageBox.textContent = message;
    });
});
