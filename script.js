window.onload = function() {
    const body = document.body;
    const fumacaContainer = document.getElementById('fumacaContainer');

    // Cria as camadas de fumaça
    for (let i = 0; i < 5; i++) {
        const fumaca = document.createElement('div');
        fumaca.classList.add('fumaca');
        fumaca.style.opacity = Math.random();
        fumacaContainer.appendChild(fumaca);
    }

    // Movimento interativo da fumaça
    document.addEventListener('mousemove', (e) => {
        const { clientX: mouseX, clientY: mouseY } = e;
        const fumaças = document.querySelectorAll('.fumaca');

        fumaças.forEach((fumaca, index) => {
            const speed = 0.05 + index * 0.02; // Varia a velocidade para cada camada
            const offsetX = (Math.sin(mouseX * speed) * 20);
            const offsetY = (Math.cos(mouseY * speed) * 20);

            fumaca.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });
};
