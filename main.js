
const showReservationFormBtn = document.getElementById('showReservationFormBtn'); // Bouton existant dans la navbar
const reservationFormContainer = document.getElementById('reservationFormContainer');
const closeReservationFormBtn = document.getElementById('closeReservationFormBtn');

showReservationFormBtn.addEventListener('click', function() {
    reservationFormContainer.style.display = 'flex';
});

closeReservationFormBtn.addEventListener('click', function() {
    reservationFormContainer.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == reservationFormContainer) {
        reservationFormContainer.style.display = 'none';
    }
});

// Gérer le clic sur le bouton Annuler
cancelReservationBtn.addEventListener('click', function() {
    reservationFormContainer.style.display = 'none';
});
