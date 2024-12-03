// ESERCIZIO 7: Cambiare il contenuto del tag h1
function cambiaNomeNegozio(nuovoNome) {
    document.querySelector('h1').textContent = nuovoNome;
}

// ESERCIZIO 8: Cambiare il colore di background della pagina
function cambiaColoreBackground(colore) {
    document.body.style.backgroundColor = colore;
}

// ESERCIZIO 9: Cambiare l'indirizzo nel footer
function cambiaIndirizzoNegozio() {
    const footer = document.querySelector('footer p');
    footer.textContent = 'Negozio Smartphone Bobine Volanti, Via Fittizia 999, 12345 Palermo';
}

// ESERCIZIO 10: Aggiungere una classe CSS a ogni link Amazon
function aggiungiClasseAmazon() {
    const linksAmazon = document.querySelectorAll('a');
    linksAmazon.forEach(link => {
        link.classList.add('amazon-link');
    });
}

// ESERCIZIO 11: Aggiungere/togliere una classe alle immagini per la visibilità
function toggleVisibilitaImmagini() {
    const immagini = document.querySelectorAll('img');
    immagini.forEach(img => {
        img.classList.toggle('invisible');
    });
}

// ESERCIZIO 12: Cambiare il colore del prezzo
function cambiaColorePrezzo() {
    const prezzi = document.querySelectorAll('td:nth-child(4)');
    prezzi.forEach(prezzo => {
        prezzo.style.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    });
}

document.getElementById('toggleButtons').addEventListener('click', function() {
    const container = document.getElementById('buttonContainer');
    container.classList.toggle('visible');  
});

function aggiornaCarrello() {
   
    const carrelloCount = document.getElementById('carrello-count');

    let count = parseInt(carrelloCount.textContent);

    count += 1;

    carrelloCount.textContent = count;
}

    document.querySelectorAll('.aggiungi').forEach(button => {
    button.addEventListener('click', function() {
        aggiornaCarrello();
    });
});
