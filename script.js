
function openModal(index, title, description) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-img').src = 'images/obraz' + (parseInt(index)+1) + '.jpg';
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = description;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
