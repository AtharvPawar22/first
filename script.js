/* ============================================
   TREASURE HUNT - FIRST CLUE
   Simple, elegant transitions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const screen0 = document.getElementById('screen0');
    const screen1 = document.getElementById('screen1');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // Transition to clue screen
            screen0.classList.remove('active');
            setTimeout(() => {
                screen1.classList.add('active');
            }, 100);
        });
    }
});
