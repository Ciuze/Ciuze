body {
    margin: 0;
    overflow: hidden;
    background-color: #282c34; /* cor de fundo como fallback */
    background-image: url('https://raw.githubusercontent.com/Ciuze/Ciuze/7aa93f571ae3c29b684557300bc278d5915ba39f/Nova%20imagem%20para%20site.png'); /* Nova imagem para PC */
    background-size: cover; /* Faz a imagem cobrir todo o fundo */
    background-position: center; /* Centraliza a imagem */
    color: white;
    font-family: Arial, sans-serif;
    height: 100vh; /* Garante que o corpo tenha pelo menos a altura da viewport */
}

/* Imagem de fundo para dispositivos móveis */
@media (max-width: 768px) {
    body {
        background-image: url('https://raw.githubusercontent.com/Ciuze/Ciuze/bb5abf00dcf145de159316d0fd2bb3e15dffb20d/Design%20sem%20nome.png'); /* Nova imagem para celular */
        background-size: cover; /* Ajusta a imagem para não distorcer */
        background-position: center; /* Centraliza a imagem */
        background-repeat: no-repeat; /* Impede a repetição da imagem */
        height: 100vh; /* Mantém a altura da viewport */
    }
}

.confete {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
}

@keyframes dispersar {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
}

@keyframes cair {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(600px); opacity: 0; }
}

.mensagem {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 20px;
    z-index: 10;
    opacity: 0;
    animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.link a {
    display: inline-block;
    color: white;
    text-decoration: underline;
    transition: transform 0.2s, opacity 0.2s;
}

.link a:hover {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
}

.link a:active {
    transform: scale(1.1);
    opacity: 0.5;
}

@keyframes deslizar {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-20px); opacity: 0; }
}

.link a.deslizar {
    animation: deslizar 0.5s forwards;
}

.desconto {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #ff4081;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    border: 2px solid white;
    transition: transform 0.2s, background-color 0.2s;
}

.desconto:hover {
    transform: scale(1.1);
    background-color: #e91e63;
}
