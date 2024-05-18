let i = 0;
let txt = 'Bienvenue chez Fabuleux-Entreprise !';
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ces informations seront envoyées à EmailJS
    const nom = document.getElementById('inputNom').value;
    const email = document.getElementById('inputMail').value;
    const sujet = document.getElementById('inputSujet').value;
    const details = document.querySelector('textarea').value;

    const templateParams = {
        name: nom,
        email: email,
        message: sujet,
        details: details
    };

    emailjs.send('service_ylwkkjr', 'template_tjbvmwr', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Merci! Votre message a été envoyé.');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Erreur! Votre message n\'a pas pu être envoyé.');
        });
});

    



