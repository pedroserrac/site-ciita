// script.js

document.getElementById("form-contato").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
  
    if (nome && email && mensagem) {
      alert(`Obrigado, ${nome}! Recebemos sua mensagem e entraremos em contato em breve.`);
      // Limpa os campos do formulário
      document.getElementById("form-contato").reset();
    } else {
      alert("Por favor, preencha todos os campos antes de enviar.");
    }
  });
  