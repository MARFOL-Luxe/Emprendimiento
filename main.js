// Función para abrir el modal
function openModal(img) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "flex"; // Muestra el modal
    modalImage.src = img.src; // Cambia la fuente de la imagen del modal
    modalImage.alt = img.alt; // Cambia la descripción de la imagen del modal
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none"; // Oculta el modal
}

// Cerrar el modal si se hace clic en cualquier parte del modal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
function openModal(src) {
    document.getElementById('modal-image').src = src;
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
