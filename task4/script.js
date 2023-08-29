const changeText = document.querySelector('a');

changeText.addEventListener('click', (event) =>{
    event.preventDefault();
    changeText.textContent = prompt('Введите  текст');
})