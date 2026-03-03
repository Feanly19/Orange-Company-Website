// Countdown Timer Logic
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30); // Set launch date to 30 days from now

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

// Initial call
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

// Form Submission Simulation
const form = document.getElementById('notify-form');
const messageEl = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;

    // Loading state
    btn.innerHTML = `<span>Gönderiliyor...</span>`;
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        if (email) {
            messageEl.textContent = 'Katıldığınız için teşekkürler! Sizi haberdar edeceğiz.';
            messageEl.className = 'form-message success';
            form.reset();
        } else {
            messageEl.textContent = 'Lütfen geçerli bir e-posta adresi girin.';
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
