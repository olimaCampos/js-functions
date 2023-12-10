const divs = document.querySelectorAll('div');

divs.forEach(function(div){
    div.addEventListener('click', () => div.style.backgroundColor='black');
})