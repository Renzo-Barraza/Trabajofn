/let form = document.getElementById('supportForm');
let messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío tradicional del formulario

    // Crear un objeto con los datos del formulario
    const formData = new FormData(form);

    // Enviar los datos del formulario a Formspree
    fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
    })
    .then(response => {
        if (response.ok) {
            displayMessage('Formulario enviado correctamente', 'success');
            form.reset(); // Limpiar el formulario
        } else {
            displayMessage('Hubo un error al enviar el formulario', 'error');
        }
    })
    .catch(error => {
        displayMessage('Hubo un problema al enviar el formulario', 'error');
    });
});

function displayMessage(msg, type) {
    messageDiv.textContent = msg;
    messageDiv.className = type;
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000);
}