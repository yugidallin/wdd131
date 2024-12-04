// const input = document.getElementById('favchap');
// const button = document.querySelector('button');
// const list = document.getElementById('list');

// button.addEventListener('click', function() {
//     if (input.value !== ''){
//         const listItem = document.createElement('li');

//         const deleteBtn = document.createElement('button');

//         listItem.textContent = input.value;
//         input.value = '';
//         deleteBtn.textContent = 'X';

//         listItem.appendChild(deleteBtn);
//         list.appendChild(listItem);

//         deleteBtn.addEventListener('click', function(){
//             list.removeChild(listItem);
//             input.focus();
//         })
//     }
//     input.focus();
// })
// input.focus();


const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

let chaptersArray = getChapterList() || [];

// Populate list with stored chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value) {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    const listItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    listItem.textContent = item;
    deleteBtn.textContent = '❌';
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
    
    deleteBtn.addEventListener('click', () => {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

input.focus();


