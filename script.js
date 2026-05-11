// Seleciona os elementos do HTML
const btnTema = document.getElementById('theme-toggle');
const body = document.body;

// Função para trocar o tema
btnTema.addEventListener('click', () => {
    // 1. Alterna a classe .dark-mode no <body>
    body.classList.toggle('dark-mode');

    // 2. Altera o texto do botão para o usuário saber o que aconteceu
    if (body.classList.contains('dark-mode')) {
        btnTema.textContent = "☀️ Modo Claro";
        console.log("Modo escuro ativado");
    } else {
        btnTema.textContent = "🌙 Modo Escuro";
        console.log("Modo claro ativado");
    }
});

// BÔNUS: Lógica de boas-vindas (Manipulação de DOM exigida)
const btnNome = document.getElementById('btn-boas-vindas');
const inputNome = document.getElementById('input-nome');
const titulo = document.getElementById('titulo');

btnNome.addEventListener('click', () => {
    const nome = inputNome.value;
    if (nome) {
        titulo.textContent = `Bem-vindo ao Agro, ${nome}!`;
        inputNome.style.display = "none"; // Esconde o campo
        btnNome.style.display = "none"; // Esconde o botão
    }
});
