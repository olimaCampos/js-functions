const keyDiv = document.getElementById('key');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        keyDiv.style.backgroundColor = 'pink';
    } else if (event.key === 's' || event.key === 'S') {
        keyDiv.style.backgroundColor = 'orange';
    } else if (event.key === 'd' || event.key === 'D') {
        keyDiv.style.backgroundColor = 'cyan';
    } else if (event.key === 'q' || event.key === 'Q') {
        addNewDiv('purple');
    } else if (event.key === 'w' || event.key === 'W') {
        addNewDiv('gray');
    } else if (event.key === 'e' || event.key === 'E') {
        addNewDiv('brown');
    }
    });
    
function addNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.height = '200px';
    newDiv.style.width = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '2px solid black';
    document.body.appendChild(newDiv);
}