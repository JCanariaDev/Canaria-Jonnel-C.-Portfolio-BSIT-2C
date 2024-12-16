const githubLink = document.getElementById('githubLink');
const githubAccountURL = 'https://github.com/JCanariaDev';
githubLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = githubAccountURL;
});

const facebookLink = document.getElementById('facebookLink');
const facebookAccountURL = 'https://www.facebook.com/jonnel.canaria.9';
facebookLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = facebookAccountURL;
});

const linkedinLink = document.getElementById('linkedinLink'); 
const linkedinAccountURL = 'https://www.linkedin.com/in/jonnel-canaria-b84568324/'; 
linkedinLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = linkedinAccountURL;
});