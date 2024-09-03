document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const templateParams = {
      nome: document.getElementById('nome').value,
      numero: document.getElementById('numero').value,
      feedback: document.getElementById('feedback').value,
  };

  emailjs.send('service_pwv1n0d', 'template_g6hfpi2', templateParams)
      .then(function(response) {
          alert('Avaliação enviada com sucesso!');
          document.getElementById('feedbackForm').reset();
      }, function(error) {
          alert('Ocorreu um erro ao enviar sua avaliação. Tente novamente.');
          console.log('FAILED...', error);
      });
});
