const main = document.querySelector('main');


const multiline =
    `***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`

const titre = document.createElement('h1');
titre.textContent = 'Labyrinthe';
main.appendChild(titre);

const lab = document.createElement('div')
lab.className = "lab"
main.appendChild(lab)

const joueur = document.createElement('div')
joueur.className = 'joueur'


for (let i = 0; i < multiline.length; i++) {

    if (multiline[i].split('') == '*') {

        const mur = document.createElement('div')
        mur.className = "mur"
        lab.appendChild(mur)

    } else if (multiline[i].split('') == '.') {

        const chemin = document.createElement('div')
        chemin.id = i
        chemin.className = "chemin"
        lab.appendChild(chemin)

    } else if (multiline[i].split('') == 'S') {

        const debut = document.createElement('div')
        debut.className = "debut"
        debut.id = i
        lab.appendChild(debut)
        debut.appendChild(joueur)

    } else if (multiline[i].split('') == 'T') {

        const arriver = document.createElement('div')
        arriver.className = "arriver"
        arriver.id = i
        lab.appendChild(arriver)
    }
}

let joueurPosition = 15


document.body.addEventListener('keyup', function (e) {

    if (e.which == '38') {
        haut()
    } else if (e.which == '39') {
        droite()
    } else if (e.which == '37') {
        gauche()
    } else if (e.which == '40') {
        bas()
    }
})

function haut() {

    let play = joueurPosition - 14

    if (multiline[play].split('') != '*') {

        joueurPosition = play
        document.getElementById(joueurPosition).appendChild(joueur)



    }
}

function bas() {

    let play = joueurPosition + 14

    if (multiline[play].split('') != '*') {

        joueurPosition = play
        document.getElementById(joueurPosition).appendChild(joueur)


    }
}

function droite() {

    let play = joueurPosition + 1

    if (multiline[play].split('') != '*') {

        joueurPosition = play
        document.getElementById(joueurPosition).appendChild(joueur)


    }
}

function gauche() {

    let play = joueurPosition - 1

    if (multiline[play].split('') != '*') {

        joueurPosition = play
        document.getElementById(joueurPosition).appendChild(joueur)


    }
}