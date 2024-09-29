// Hamburger Menu Logic
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Popup for Book Details
const bookCards = document.querySelectorAll('.book-card');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const closePopup = document.getElementById('close-popup');
const orderNow = document.getElementById('order-now');

bookCards.forEach(card => {
    card.addEventListener('click', () => {
        popupTitle.textContent = card.dataset.title;
        popupDescription.textContent = card.dataset.description;
        popup.style.display = 'flex';
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

orderNow.addEventListener('click', () => {
    // Redirect to WhatsApp Business
    window.open("https://wa.me/6379670225", "_blank");
});
