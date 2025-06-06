
function openModal(index, title, description) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-img').src = 'images/obraz' + (parseInt(index)+1) + '.jpg';
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = description;
}
<script>
function openModal(imageSrc, captionText) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("modalCaption");
  
  modal.style.display = "block";
  modalImg.src = imageSrc;
  caption.innerText = captionText;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
</script>

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
