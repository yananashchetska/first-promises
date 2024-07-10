'use strict';

const logo = document.querySelector('.logo');

function successHandler() {
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = 'Promise was resolved!';

    document.body.appendChild(message);
}

function errorHandler() {
    const message = document.createElement('div');
    message.classList.add('message', 'error-message');
    message.innerHTML = 'Promise was rejected!';

    document.body.appendChild(message);
}

const firstPromise = new Promise(function(resolve) {
    logo.addEventListener('click', () => {
        resolve();
    })
})

const secondPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject();
    }, 3000);
})

firstPromise.then(successHandler);
secondPromise.catch(errorHandler);