export function typewriter(text: string, keyword: string, speed: number=100) {
    const typewriterText = document.getElementById("typewriter");
    let index = 0;
    
    function type() {
        if (typewriterText && index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        
        } else if (typewriterText && typewriterText.textContent) {
            if (text.indexOf(keyword) !== -1) {
                const keywordElement = document.createElement('span');
                keywordElement.textContent = keyword;
                keywordElement.style.color = "rgb(107 114 128)";
                keywordElement.style.transition = "color 2.5s ease";
                keywordElement.style.display = "inline";

                typewriterText.textContent = typewriterText.textContent.slice(0, text.indexOf(keyword));
                typewriterText.appendChild(keywordElement);

                setTimeout(() => {
                    keywordElement.style.color = "rgb(37 99 235)";
                }, 100);
            };
        };
    };
    type();
}
