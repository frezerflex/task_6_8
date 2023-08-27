const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const aLert = document.querySelector('#aLert');

aLert.addEventListener('click', () => {
    alert('Служит для уведомлений');
})

const pRompt = document.querySelector('#pRompt');

pRompt.addEventListener('click', () => {
    prompt('Служит для ввода информации');
})