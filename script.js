window.onload = function() {
    const body = document.body;
    body.style.overflow = 'hidden';

    function criarFogos() {
        const numFogos = 5;
        for (let i = 0; i < numFogos; i++) {
            setTimeout(() => {
                const explosaoX = Math.random() * window.innerWidth;
                const explosaoY = Math.random() * window.innerHeight * 0.5;

                for (let j = 0; j < 150; j++) {
                    const confete = document.createElement('div');
                    confete.classList.add('confete');
                    const angle = Math.random() * 2 * Math.PI;
                    const distance = Math.random() * window.innerWidth;
                    confete.style.left = `${explosaoX + Math.cos(angle) * distance}px`;
                    confete.style.top = `${explosaoY + Math.sin(angle) * distance}px`;
                    confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    confete.style.width = `${Math.random() * 5 + 5}px`;
                    confete.style.height = `${Math.random() * 5 + 5}px`;
                    document.body.appendChild(confete);
                    confete.style.animation = 'dispersar 1s forwards, cair 2s forwards';
                    confete.addEventListener('animationend', () => {
                        confete.remove();
                    });
                }
            }, i * 1000);
        }
    }

    criarFogos();

    const mensagem = document.createElement('div');
    mensagem.classList.add('mensagem');
    mensagem.innerHTML = `
        <img src="https://raw.githubusercontent.com/Ciuze/Ciuze/9dcf685e3b014eb544c08830e5509ce58bc59500/Logo%20para%20mensagem%202.0.png" width="100" height="100" alt="Logo">
        <br>
        Bem-vindo a Ciuze!<br><br>
        Cupom de desconto na compra diretamente em nossa página oficial.<br><br>
        Clique para copiar o código de desconto!<br><br>
        Adquira seu desconto!<br><br>
        <div class="desconto" id="cupomDesconto">5% desconto</div><br><br>
        <p>
            <a href="https://www.ciuze.com.br/" target="_blank" style="color: #0033CC;">Clique aqui</a>
            <span style="color: white;"> para ser redirecionado à página oficial da loja!</span>
        </p>
    `;

    document.body.appendChild(mensagem);

    // Evento para copiar o desconto
    const descontoBotao = document.getElementById('cupomDesconto');
    descontoBotao.addEventListener('click', function() {
        navigator.clipboard.writeText(this.innerText).then(() => {
            alert('Copiado: Cupom de desconto!');
            window.open("https://www.ciuze.com.br/", '_blank'); // Redireciona após copiar
        }).catch(err => {
            console.error('Erro ao copiar: ', err);
        });
    });

    const link = document.querySelector('a');
    link.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.add('deslizar');
        setTimeout(() => {
            window.open(this.href, '_blank');
        }, 500);
    });

    setTimeout(() => {
        body.style.overflow = '';
    }, 5000);
};
