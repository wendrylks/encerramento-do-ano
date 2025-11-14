const btnMensagem = document.getElementById("btnMensagem");
const mensagemEspecial = document.getElementById("mensagemEspecial");


btnMensagem.addEventListener("click", () => {
mensagemEspecial.textContent = "Parabéns por concluir mais um ano! Que o próximo seja ainda melhor!";
mensagemEspecial.classList.toggle("hidden");
});