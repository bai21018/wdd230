const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.onclick = function() {
    let myChap = input.value;
    input.value = '';

    const favChaps = document.createElement('li');
    const chapsText = document.createElement('span');
    const addBtn = document.createElement('button');

    favChaps.appendChild(chapsText);
    chapsText.textContent = myChap;
    favChaps.appendChild(addBtn);
    addBtn.textContent = 'X';
    list.appendChild(favChaps);

    addBtn.onclick = function(i) {
        list.removeChild(favChaps);
    }

    input.focus();
}