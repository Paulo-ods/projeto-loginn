document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    var email = document.getElementById('ilogin').value;
    var senha = document.getElementById('isenha').value;

    // Salva os dados no localStorage
    localStorage.setItem('loginEmail', email);
    localStorage.setItem('loginSenha', senha);

    // Redireciona para paginaTeste.html
    window.location.href = 'paginaTeste.html';
});

// Outra forma de adicionar o evento click ao botão
document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    var email = document.getElementById('ilogin').value;
    var senha = document.getElementById('isenha').value;

    // Salva os dados no localStorage
    localStorage.setItem('loginEmail', email);
    localStorage.setItem('loginSenha', senha);

    // Redireciona para paginaTeste.html
    window.location.href = 'paginaTeste.html';
});
