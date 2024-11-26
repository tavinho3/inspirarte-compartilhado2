document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();
    var nome = document.getElementById('email').value.trim();
    var senha = document.getElementById('senha').value.trim();
    
    if (nome === '' || senha === '') {
        event.preventDefault();
        document.getElementById('erro').innerHTML = 'Preencha todos os campos!';
      } else {
        window.location.href = "../../Tela inicial/HTML/tela inicial1.html";
      }
    });