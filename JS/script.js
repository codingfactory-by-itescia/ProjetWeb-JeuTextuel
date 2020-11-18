const myInput = document.getElementById('commande');
myInput.onkeydown = function (event) {
    if (event.which == 13) {
        commande();
        myInput.value = '';
    }
}

const Inventory = document.getElementById('inventaire');
const gameOverScreen = document.getElementById('gameOver');

const crossButton = document.getElementById('crossButton');
crossButton.addEventListener('click', () => Inventory.style.display = 'none')

const room = document.getElementsByClassName('room');
console.log(room);
let position = room[0];
console.log(position);
RoomText();
// room[0].style.display = 'block';

const clef = document.getElementById("descriptionObjet");
clef.addEventListener('click', descriptionObjet)


//Classe de Personnages
class Character {
    constructor(life, attack) {
        this.life = life;
        this.attack = attack;
    }
    attaquer(object) {
        object.life = object.life - this.attack;
    }
}
let PersoPpal = new Character(50, 5);
let Boss = new Character(50, 5);

//Variables relatives à la clef
let clef2 = new Boolean(false);
let porteNordUnlocked = new Boolean(false);
let porteDeCelluleUnlocked = new Boolean(false);

//Fonction cotenant le switch de toutes les commandes disponibles avec l'input
function commande() {
    let commande = myInput.value;
    console.log(commande);

    switch (commande) {


        case 'attaquer':
            PersoPpal.attaquer(Boss);
            console.log(Boss.life);
            break;


        //Permet d'ouvrir l'inventaire
        case 'inventaire':
            Inventory.style.display = 'block';
            break;

        // Gestion de la clef
        case 'clef':
            switch (position) {
                case room[0]:
                    if (clef2 === true) {
                        porteNordUnlocked = true;
                        document.getElementById("room0Unlock").style.display = "block";
                        window.alert("La porte est déverrouillée");
                        console.log(clef2);
                        break;
                    }
                    else {
                        document.getElementById("room0UnlockNoKey").style.display = "block";
                        window.alert("Vous n'avez pas la clef");
                        break;
                    }
                case room[3]:
                    if (clef2 === true) {
                        porteDeCelluleUnlocked = true;
                        document.getElementById("cellUnlock").style.display = "block";
                        window.alert("La porte est déverrouillée");
                        break;
                    }
                    else {
                        document.getElementById("cellUnlockNoKey").style.display = "block";
                        window.alert("Vous n'avez pas la clef");
                        break;
                    }
                case room[4]:
                    if (clef2 === true) {
                        document.getElementById("storageKeyNo").style.display = "block";
                        window.alert("Elle est dans votre main");
                        break;
                    }
                    else {
                        clef2 = true;
                        document.getElementById("storageKey").style.display = "block";
                        window.alert("Vous trouvez une clef");
                        break;
                    }
                default:
                    if (clef2 === true) {
                        document.getElementById("keyUseless").style.display = "block";
                        window.alert("Elle ne vous servira à rien ici")
                        break;
                    }
                    else {
                        document.getElementById("generalNoKey").style.display = "block";
                        window.alert("Vous n'avez pas de clef")
                        break;
                    }
            }
            break;

        case 'nord':
            switch (position) {
                case room[0]:
                    if (porteNordUnlocked === true) {
                        position = room[11];
                        console.log(position);
                        RoomText();
                        break;
                    }
                    else {
                        position = room[0];
                        window.alert("La porte est verrouillée");
                        RoomText();
                        break;
                    }
                case room[1]:
                    position = room[0];
                    console.log(position);
                    RoomText();
                    break;
                case room[3]:
                    position = room[1];
                    console.log(position);
                    RoomText();
                    break;
                case room[6]:
                    position = room[7];
                    console.log(position);
                    RoomText();
                    break;
                case room[8]:
                    position = room[6];
                    console.log(position);
                    RoomText();
                    break;
                case room[11]:
                    position = room[10];
                    console.log(position);
                    RoomText();
                    break;
                case room[13]:
                    position = room[12];
                    console.log(position);
                    RoomText();
                    break;

                default:
                    window.alert('Vous ne pouvez pas aller plus loin');
                    console.log(position);
                    RoomText();
                    break;
            }
            break;

        case 'sud':
            switch (position) {
                case room[0]:
                    position = room[1];
                    console.log(position);
                    RoomText();
                    break;
                case room[1]:
                    position = room[3];
                    console.log(position);
                    RoomText();
                    break;
                case room[6]:
                    position = room[8];
                    console.log(position);
                    RoomText();
                    break;
                case room[7]:
                    position = room[6];
                    console.log(position);
                    RoomText();
                    break;
                case room[9]:
                    position = room[10];
                    console.log(position);
                    RoomText();
                    break;
                case room[10]:
                    position = room[0];
                    console.log(position);
                    RoomText();
                    break;
                case room[11]:
                    position = room[0];
                    console.log(position);
                    RoomText();
                    break;
                case room[12]:
                    position = room[13];
                    console.log(position);
                    RoomText();
                    break;

                default:
                    window.alert('Vous ne pouvez pas aller plus loin');
                    console.log(position);
                    break;
            }
            break;

        case 'est':
            switch (position) {
                case room[0]:
                    position = room[13];
                    console.log(position);
                    RoomText();
                    break;
                case room[1]:
                    position = room[4];
                    console.log(position);
                    RoomText();
                    break;
                case room[2]:
                    position = room[1];
                    console.log(position);
                    RoomText();
                    break;
                case room[5]:
                    position = room[6];
                    console.log(position);
                    RoomText();
                    break;
                case room[6]:
                    position = room[0];
                    console.log(position);
                    RoomText();
                    break;
                case room[10]:
                    position = room[9];
                    console.log(position);
                    RoomText();
                    break;
                case room[13]:
                    position = room[14];
                    console.log(position);
                    RoomText();
                    break;
                default:
                    window.alert('Vous ne pouvez pas aller plus loin');
                    console.log(position);
                    break;
            }
            break;

        case 'ouest':
            switch (position) {
                case room[13]:
                    position = room[0];
                    console.log(position);
                    RoomText();
                    break;
                case room[4]:
                    position = room[1];
                    console.log(position);
                    RoomText();
                    break;
                case room[1]:
                    position = room[2];
                    console.log(position);
                    RoomText();
                    break;
                case room[6]:
                    position = room[5];
                    console.log(position);
                    RoomText();
                    break;
                case room[0]:
                    position = room[6];
                    console.log(position);
                    RoomText();
                    break;
                case room[9]:
                    position = room[10];
                    console.log(position);
                    RoomText();
                    break;
                case room[14]:
                    position = room[13];
                    console.log(position);
                    RoomText();
                    break;
                default:
                    window.alert('Vous ne pouvez pas aller plus loin');
                    console.log(position);
                    break;
            }
            break;

        default:
            window.alert('Veuillez rentrer une commande valide.');
            break;
    }
}


//Desscription des objets de l'inventaire
function ChangeDescrption(event) {
    console.log(event.target.id)
    if (event.target.id.includes("clef") === true) {
        clef.innerHTML = 'Ouvre une porte <br><br> "Non jure wallah"'
    }
    else if (event.target.id.includes("epee") === true) {
        clef.innerHTML = 'Epée basique en fer <br><br> Pemettra surement de ce defendre'
    }
    else if (event.target.id.includes("master-sword") === true) {
        clef.innerHTML = 'Epée légendaire'
    }
    else {
        clef.innerHTML = 'Sélectionne un objet'
    }

}

//GameOver t'as capté
function verifLife(object) {
    if (object.life <= 0) {
        gameOverScreen.style.display = 'block'
    }
}

// Afficher le texte de la salle correspondante
function RoomText() {
    for (let i = 0; i < room.length; i++) {
        if (position === room[i]) {
            room[i].style.display = 'block';
        }
        else {
            room[i].style.display = 'none';
        }
    }
}