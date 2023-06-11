document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var dateInput = document.getElementById('date');
    var timeInput = document.getElementById('time');
    var today = new Date();
    var bookingDate = new Date(dateInput.value);
    var bookingTime = timeInput.value.split(':');

    // Check if the date is in the past
    if (bookingDate.setHours(0,0,0,0) < today.setHours(0,0,0,0)) {
        alert('Please choose a date in the future.');
        return;
    }

    // Check if the time is between 9 am and 6 pm
    if (bookingTime[0] < 9 || bookingTime[0] > 18) {
        alert('You must choose a time between 9 am and 6 pm.');
        return;
    }

    // Store form data in localStorage
    var formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        expert: document.getElementById('expert').value,
        date: dateInput.value,
        time: timeInput.value,
        services: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(function(checkbox) {
            return checkbox.nextElementSibling.textContent;
        }),
        notes: document.getElementById('notes').value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to the confirmation page
    window.location.href = 'confirmation.html';
});
