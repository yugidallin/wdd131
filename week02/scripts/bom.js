const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

button.addEventListener('click', function() {
    if (input.value !== ''){
        const listItem = document.createElement('li');

        const deleteBtn = document.createElement('button');

        listItem.textContent = input.value;
        input.value = '';
        deleteBtn.textContent = 'X';

        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);

        deleteBtn.addEventListener('click', function(){
            list.removeChild(listItem);
            input.focus();
        })
    }
    input.focus();
})
input.focus();

