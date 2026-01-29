/* ============================================
   TREASURE HUNT - FIRST CLUE
   Screen transitions and password validation
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const submitPasswordBtn = document.getElementById('submitPasswordBtn');
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');

    const screen0 = document.getElementById('screen0');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');

    // Start button -> Clue screen
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            screen0.classList.remove('active');
            setTimeout(() => {
                screen1.classList.add('active');
            }, 100);
        });
    }

    // Learn more button -> Password screen
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            screen1.classList.remove('active');
            setTimeout(() => {
                screen2.classList.add('active');
            }, 100);
        });
    }

    // Password validation
    if (submitPasswordBtn) {
        submitPasswordBtn.addEventListener('click', () => {
            checkPassword();
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }

    function checkPassword() {
        const password = passwordInput.value.trim();

        if (password === '2822') {
            // Success!
            screen2.classList.remove('active');
            setTimeout(() => {
                screen3.classList.add('active');
            }, 100);
        } else {
            // Wrong password
            errorMessage.classList.add('show');
            passwordInput.style.borderColor = '#D4847C';

            setTimeout(() => {
                errorMessage.classList.remove('show');
                passwordInput.style.borderColor = '';
            }, 2000);
        }
    }
});
