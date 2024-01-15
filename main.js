import './style.css'

// should be deleted if i ever decide to use it as a real resume site (probably not)
document.querySelectorAll('img[src="github.svg"]').forEach(element => {
    element.parentElement.setAttribute('href', 'https://github.com/pljjy/homepage');
});

document.querySelectorAll('img[src="external.svg"]').forEach(element => {
    element.parentElement.setAttribute('href', 'https://pljjy.github.io/homepage');
});