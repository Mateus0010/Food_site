(function() {
  emailjs.init("rUs5cxAPuWmw2EBF7"); // Substitua 'YOUR_PUBLIC_KEY' pela sua chave pública real
})();

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
      event.preventDefault();

      // Captura os dados do formulário
      const nome = document.getElementById("nome").value;
      const numero = document.getElementById("numero").value;
      const feedback = document.getElementById("feedback").value;

      // Envia o email via EmailJS
      emailjs.send("service_pwv1n0d", "template_udun9dw", { // Substitua "template_4xs1fnh" pelo ID correto
          from_name: nome,
          from_number: numero,
          message: feedback
      }).then(function(response) {
          console.log("Sucesso!", response.status, response.text);
          document.getElementById("thankYouMessage").style.display = "block";
          document.getElementById("feedbackForm").reset(); // Limpa o formulário após o envio
      }, function(error) {
          console.error("Falha...", error);
      });
  });
});
