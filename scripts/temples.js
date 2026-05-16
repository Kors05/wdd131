const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const year = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

const today = new Date();

year.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;