export function playIntro() {
    setTimeout(() => {
        const introOverlay = document.getElementById('intro-overlay') as HTMLElement | null;
        if (introOverlay) {
            introOverlay.classList.add('fade-out');
            setTimeout(() => {
                introOverlay.style.display = 'none';
                document.dispatchEvent(new Event('introCompleted')); 
            }, 1000); 
        }
    }, 1700);
}
 