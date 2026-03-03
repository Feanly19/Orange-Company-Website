// Form Submission Simulation
const form = document.getElementById('notify-form');
const messageEl = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;

    // Loading state
    btn.innerHTML = `<span>Sending...</span>`;
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        if (email) {
            messageEl.textContent = 'Thank you for joining! We will keep you updated.';
            messageEl.className = 'form-message success';
            form.reset();
        } else {
            messageEl.textContent = 'Please enter a valid email address.';
            messageEl.className = 'form-message error';
        }

        btn.innerHTML = originalText;
        btn.disabled = false;

        // Clear message after 5 seconds
        setTimeout(() => {
            messageEl.style.opacity = '0';
            setTimeout(() => {
                messageEl.textContent = '';
                messageEl.className = 'form-message';
                messageEl.style.opacity = '1';
            }, 300);
        }, 5000);
    }, 1500);
});
