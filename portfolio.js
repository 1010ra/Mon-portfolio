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