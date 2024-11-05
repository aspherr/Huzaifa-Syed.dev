export function buttonDelay() {
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn');
    
    buttons.forEach((button: HTMLButtonElement, index: number) => {
        setTimeout(() => {
            button.classList.add('animate');
        }, index * 100); // Delay each button by 100ms
    });
}
