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
let player1HP;
let player2HP;
let player1Selected = false;
let currentTurn = 1;
let battleHistory = [];
let maxLogLength = 15;
let fightBtn;
let defendBtn;
let skillBtn;

function setup() {
  createCanvas(1280, 720);
  background(225);

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
      player1HP = player1Stats[0]
    } else if(player1Selected == true) {
      player2Stats = mageStats;
      player2class = "mage";
      fighterIMG.hide();
      rogueIMG.hide();
      rogueTekst.hide();
      fighterTekst.hide();
      karakter1ValgTekst.hide();
      player2HP = player2Stats[0]
      BattleLoad();
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
      player1HP = player1Stats[0]
    } else if(player1Selected == true) {
      player2Stats = fighterStats;
      player2class = "fighter";
      rogueIMG.hide();
      mageIMG.hide();
      rogueTekst.hide();
      mageTekst.hide();
      karakter1ValgTekst.hide();
      player2HP = player2Stats[0]
      BattleLoad();
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
      player1HP = player1Stats[0]
    } else if(player1Selected == true) {
      player2Stats = rogueStats;
      player2class = "rogue";
      mageIMG.hide();
      fighterIMG.hide();
      mageTekst.hide();
      karakter1ValgTekst.hide();
      fighterTekst.hide();
      player2HP = player2Stats[0]
      BattleLoad();
    }
  })
}

//Funktion hvor alle elementer (billeder, tekst og knapper) bliver indlæst
function BattleLoad() {
  background(225);

  switch (player1class) {
    case "mage":
      mageIMG.show();
      mageIMG.position(100, 125);
      break;
    case "fighter":
      fighterIMG.show();
      fighterIMG.position(100, 125);
      break;
    case "rogue":
      rogueIMG.show();
      rogueIMG.position(100, 125);
  }

  switch (player2class) {
    case "mage":
      mageIMG.show();
      mageIMG.position(850, 125);
      break;
    case "fighter":
      fighterIMG.show();
      fighterIMG.position(850, 125);
      break;
    case "rogue":
      rogueIMG.show();
      rogueIMG.position(850, 125);
  }

  let displayHP1 = createP("HP: " + player1HP + "/" + player1Stats[0])
  let displayHP2 = createP("HP: " + player2HP + "/" + player2Stats[0])
  let battleLogHeader = createP("Battle Log:")

  displayHP1.style("font-size", "35px")
  displayHP2.style("font-size", "35px")
  battleLogHeader.style("font-size", "50px")

  displayHP1.position(180, 25)
  displayHP2.position(930, 25)
  battleLogHeader.position(520,20)

  fightBtn = createButton("Angrib")
  defendBtn = createButton("Forsvar")
  skillBtn = createButton("Skill")

  fightBtn.size(150,50)
  defendBtn.size(150,50)
  skillBtn.size(150,50)

  fightBtn.position(100,550)
  defendBtn.position(255,550)
  skillBtn.position(100,605)

  console.log(player1Selected)

  playerTurn(currentTurn);
}

function playerTurn(turn) {
  console.log(turn)
  BattleLog("Det er spiller "+turn+"'s tur")

}

function BattleLog(logInput) {
  noStroke();
  fill(225)
  rect(450,125,370,600)

  fill(0);
  battleHistory.push(logInput);

  if (battleHistory.length > maxLogLength) {
    battleHistory.shift();
  }

  textSize(20)
  textAlign(LEFT)

  for (i = 0; i < battleHistory.length; i++) {
  text(battleHistory[i],450,150 + i*30);
  }

}

function draw() {
}
