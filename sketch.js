let fighterStats = [120, 9, 12, 1]
let mageStats = [80, 5, 8, 7]
let rogueStats = [80, 13, 5, 13]
let mageIMG;
let fighterIMG;
let rogueIMG;

let player1Stats = [];
let player2Stats = [];
let player1class;
let player2class;
let player1Selected = false;
let playerTurn = 1;

function setup() {
  createCanvas(1280, 720);
  background(255);

  CharacterSelect();
}

// Funktion hvor begge spillere vælgere deres karaktere, og deres stats bliver sat
function CharacterSelect() {

  let karakter1ValgTekst = createP("Spiller 1 vælg en karakter")
  karakter1ValgTekst.style("color", "black")
  karakter1ValgTekst.style("font-size", "50px")
  karakter1ValgTekst.position(360, 0)

  let mageTekst = createP("Troldmand")
  let fighterTekst = createP("Kriger")
  let rogueTekst = createP("Bandit")

  mageTekst.style("font-size", "35px")
  fighterTekst.style("font-size", "35px")
  rogueTekst.style("font-size", "35px")

  mageTekst.position(180, 100)
  fighterTekst.position(600, 100)
  rogueTekst.position(940, 100)


  mageIMG = createImg("mageArt.png", "mage")
  fighterIMG = createImg("fighterArt.png", "fighter")
  rogueIMG = createImg("rogueArt.png", "rougue")

  mageIMG.size(300, 400)
  fighterIMG.size(300, 400)
  rogueIMG.size(300, 400)

  mageIMG.position(100, 200)
  fighterIMG.position(440, 200)
  rogueIMG.position(850, 200)

  mageIMG.mouseClicked(() => {
    console.log("YOU HAVE SELECTED MAGE")
    mageIMG.hide();
    mageTekst.hide();

    if (player1Selected == false) {
      player1Stats = mageStats;
      player1class = "mage";
      player1Selected = true;
      karakter1ValgTekst.html("Spiller 2 vælg en karakter")
    } else {
      player2Stats = mageStats;
      player2class = "mage";
      fighterIMG.hide();
      rogueIMG.hide();
      rogueTekst.hide();
      fighterTekst.hide();
      karakter1ValgTekst.hide();
      battle();
    }
  })

  fighterIMG.mouseClicked(() => {
    console.log("YOU HAVE SELECTED FIGHTER")
    fighterIMG.hide();
    fighterTekst.hide();

    if (player1Selected == false) {
      player1Stats = fighterStats;
      player1class = "fighter";
      player1Selected = true;
      karakter1ValgTekst.html("Spiller 2 vælg en karakter")
    } else {
      player2Stats = fighterStats;
      player2class = "fighter";
      rogueIMG.hide();
      mageIMG.hide();
      rogueTekst.hide();
      mageTekst.hide();
      karakter1ValgTekst.hide();
      battle();
    }
  })

  rogueIMG.mouseClicked(() => {
    console.log("YOU HAVE SELECTED HOBO")
    rogueIMG.hide();
    rogueTekst.hide();

    if (player1Selected == false) {
      player1Stats = rogueStats;
      player1class = "rogue";
      player1Selected = true;
      karakter1ValgTekst.html("Spiller 2 vælg en karakter")
    } else {
      player2Stats = rogueStats;
      player2class = "rogue";
      mageIMG.hide();
      fighterIMG.hide();
      mageTekst.hide();
      karakter1ValgTekst.hide();
      fighterTekst.hide();
      battle();
    }
  })
}

//Funktion hvor selve kampen sker
function battle() {
  let player1HP = player1Stats[0]
  let player2HP = player2Stats[0]

  switch (player1class) {
    case "mage":
      mageIMG.show();
      mageIMG.position(100, 200);
      break;
    case "fighter":
      fighterIMG.show();
      fighterIMG.position(100, 200);
      break;
    case "rogue":
      rogueIMG.show();
      rogueIMG.position(100, 200);
  }

  switch (player2class) {
    case "mage":
      mageIMG.show();
      mageIMG.position(850, 200);
      break;
    case "fighter":
      fighterIMG.show();
      fighterIMG.position(850, 200);
      break;
    case "rogue":
      rogueIMG.show();
      rogueIMG.position(850, 200);
  }

  let displayHP1 = createP(player1HP + "/" + player1Stats[0])
  let displayHP2 = createP(player2HP + "/" + player2Stats[0])

  displayHP1.style("font-size", "35px")
  displayHP2.style("font-size", "35px")

  displayHP1.position(180, 100)
  displayHP2.position(930, 100)
}

function draw() {
}
