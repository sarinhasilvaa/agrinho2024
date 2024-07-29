document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);

    alert('Obrigado por entrar em contato! Nós responderemos em breve.');

    document.getElementById('contactForm').reset();
});
