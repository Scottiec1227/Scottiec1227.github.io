document.addEventListener('DOMContentLoaded', function() {
    const weddingYes = document.getElementById('wedding-yes');
    const weddingNo = document.getElementById('wedding-no');
    const weddingFields = document.getElementById('wedding-fields');
    const form = document.getElementById('contact-form');

    // Toggle wedding fields based on selection
    weddingYes.addEventListener('change', function() {
        if (weddingYes.checked) {
            weddingFields.classList.remove('hidden'); // Show wedding fields
        }
    });

    weddingNo.addEventListener('change', function() {
        if (weddingNo.checked) {
            weddingFields.classList.add('hidden'); // Hide wedding fields
        }
    });

    // Ensure one option is selected before submission
    form.addEventListener('submit', function(event) {
        if (!weddingYes.checked && !weddingNo.checked) {
            alert("Please select if this appointment is for a wedding.");
            event.preventDefault();
        } else if (weddingYes.checked && (!document.getElementById('wedding-date').value || !document.getElementById('wedding-location').value)) {
            alert("Please fill out both the wedding date and location.");
            event.preventDefault();
        }
    });
});
