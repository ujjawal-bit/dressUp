// Selecting all the draggable items
const draggableItems = document.querySelectorAll('.dress__wrpr img');
const mainContainer = document.querySelector('.main');

draggableItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

mainContainer.addEventListener('dragover', dragOver);
mainContainer.addEventListener('drop', drop);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.src);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const src = e.dataTransfer.getData('text/plain');
    const img = document.createElement('img');
    img.src = src;
    img.style.position = 'absolute';
    img.style.left = '0'; // Adjust based on body positioning
    img.style.top = '0'; // Adjust based on body positioning
    img.style.width = '100%'; // Ensure the dress fits over the body
    img.style.height = 'auto'; // Maintain the aspect ratio
    img.style.pointerEvents = 'none'; // Make sure the dress is not draggable after being dropped
    mainContainer.appendChild(img);
}
