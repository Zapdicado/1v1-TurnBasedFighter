let fighterStats = [100, 8, 12, 1]
let mageStats = [80, 5, 8, 7]
let rogueStats = [85, 11, 5, 13]
let mageIMG;
let fighterIMG;
let rogueIMG;
let battleLogHeader;

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
let backBtn;
let restartBtn;
let skill1Btn;
let skill2Btn;
let displayHP1;
let displayHP2;
let usedDefend1 = false;
let usedDefend2 = false;
let vanish1 = 1;
let vanish2 = 1;

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

  displayHP1 = createP("HP: " + player1HP + "/" + player1Stats[0])
  displayHP2 = createP("HP: " + player2HP + "/" + player2Stats[0])
  battleLogHeader = createP("Battle Log:")

  displayHP1.style("font-size", "35px")
  displayHP2.style("font-size", "35px")
  battleLogHeader.style("font-size", "50px")

  displayHP1.position(180, 25)
  displayHP2.position(930, 25)
  battleLogHeader.position(520,20)

  fightBtn = createButton("Angrib")
  defendBtn = createButton("Forsvar")
  skillBtn = createButton("Skill")
  backBtn = createButton("Tilbage")
  skill1Btn = createButton("")
  skill2Btn = createButton("")
  restartBtn = createButton("Genstart Spil")
  restartBtn.size(250,100)
  restartBtn.position(500,630)

  restartBtn.hide();
  backBtn.hide();
  skill1Btn.hide();
  skill2Btn.hide();

  skill1Btn.size(150,50)
  skill2Btn.size(150,50)
  fightBtn.size(150,50)
  defendBtn.size(150,50)
  skillBtn.size(150,50)
  backBtn.size(150,50)

  fightBtn.position(100,550)
  defendBtn.position(255,550)
  skillBtn.position(175,605)

  playerTurn(currentTurn);
}

function playerTurn(turn) {

  BattleLog("Det er spiller "+turn+"'s tur")

  if (turn == 1) {
    if (usedDefend1 == true) {
      player1Stats[2] = player1Stats[2]/2
      usedDefend1 = false;
    }

    fightBtn.position(100,550)
    defendBtn.position(255,550)
    skillBtn.position(175,605)

  } else if (turn == 2) {
    if (usedDefend2 == true) {
      player2Stats[2] = player2Stats[2]/2
      usedDefend2 = false;
    }

    fightBtn.position(850,550)
    defendBtn.position(1005,550)
    skillBtn.position(925,605)

  }

  fightBtn.mouseClicked(() => {
    if (turn == 1) {
      let damage = round((player1Stats[1]/player2Stats[2])*10*random(0.8,1.2)*vanish2);
      player2HP -= damage;
      displayHP2.html("HP: " + player2HP + "/" + player2Stats[0]);
      BattleLog("Spiller "+ turn +" angreb og gjorde "+ damage + " skade")
      if (vanish1 == 0) {
        player1Stats[1] = player1Stats[1]/2
        vanish1 = 1;
      }
      currentTurn = 2;
      playerTurn(currentTurn);
    } else if (turn == 2) {
      let damage = round((player2Stats[1]/player1Stats[2])*10*random(0.8,1.2)*vanish1);
      player1HP -= damage;
      displayHP1.html("HP: " + player1HP + "/" + player1Stats[0]);
      BattleLog("Spiller "+ turn +" angreb og gjorde "+ damage + " skade")
      if (vanish2 == 0) {
        player2Stats[1] = player2Stats[1]/2
        vanish2 = 1;
      }
      currentTurn = 1;
      playerTurn(currentTurn);
    }

  })

  defendBtn.mouseClicked(() => {
    if (turn == 1) {
      player1Stats[2] = player1Stats[2]*2
      BattleLog("Spiller "+ turn + " forsvare sig mod det næste angreb")
      usedDefend1 = true;
      currentTurn = 2;
      playerTurn(currentTurn)
    } else if (turn == 2) {
      player2Stats[2] = player2Stats[2]*2
      BattleLog("Spiller "+ turn + " forsvare sig mod det næste angreb")
      usedDefend2 = true;
      currentTurn = 1;
      playerTurn(currentTurn)
    }
  })

  skillBtn.mouseClicked(() => {
    fightBtn.hide();
    defendBtn.hide();
    skillBtn.hide();
    skill1Btn.show();
    skill2Btn.show();
    backBtn.show();

    if(turn == 1) {
       backBtn.position(175,605)
       skill1Btn.position(100,550)
       skill2Btn.position(255,550)

       switch (player1class) {
        case "mage":
          skill1Btn.html("Tordennedslag");
          skill2Btn.html("Helbredende Magi");
          break;
        case "fighter":
          skill1Btn.html("Dumdristig Manøvre");
          skill2Btn.html("Mere Rustning");
          break;
        case "rogue":
          skill1Btn.html("Slib klingen");
          skill2Btn.html("Røgbombe");
      }

    } else if (turn == 2) {
       backBtn.position(925,605)
       skill1Btn.position(850,550)
       skill2Btn.position(1005,550)

       switch (player2class) {
        case "mage":
          skill1Btn.html("Tordennedslag");
          skill2Btn.html("Helbredende Magi");
          break;
        case "fighter":
          skill1Btn.html("Dumdristig Manøvre");
          skill2Btn.html("Mere Rustning");
          break;
        case "rogue":
          skill1Btn.html("Slib klingen");
          skill2Btn.html("Røgbombe");
      }

    }

  })

  backBtn.mouseClicked(() => {
    fightBtn.show();
    defendBtn.show();
    skillBtn.show();
    backBtn.hide();
    skill1Btn.hide();
    skill2Btn.hide();
  })

  skill1Btn.mouseClicked(() => {

    if (turn == 1) {
      switch (player1class) {
        case "mage":
          let damage = round(random(10,20));
          player2HP -= damage;
          displayHP2.html("HP: " + player2HP + "/" + player2Stats[0]);
          BattleLog("Spiller "+ turn +" brugte lynmagi gjorde "+ damage + " skade")
          currentTurn = 2;
          playerTurn(currentTurn);
          break;
        case "fighter":
          let damage2 = round(random(13,19));
          player2HP -= damage2;
          displayHP2.html("HP: " + player2HP + "/" + player2Stats[0]);
          BattleLog("Spiller "+ turn +" angreb hensynløst og gjorde "+ damage2 + " skade")
          player1Stats[2] -= 1;
          currentTurn = 2;
          playerTurn(currentTurn);
          break;
        case "rogue":
          player1Stats[1] += 2;
          BattleLog("Spiller " + turn + " gjorde sin klinge skarpere")
          currentTurn = 2;
          playerTurn(currentTurn);
      }
    } else if (turn == 2) {
      switch (player2class) {
        case "mage":
          let damage = round(random(10,20));
          player1HP -= damage;
          displayHP1.html("HP: " + player1HP + "/" + player1Stats[0]);
          BattleLog("Spiller "+ turn +" brugte lynmagi og gjorde "+ damage + " skade")
          currentTurn = 1;
          playerTurn(currentTurn);
          break;
        case "fighter":
          let damage2 = round(random(13,19));
          player1HP -= damage2;
          displayHP1.html("HP: " + player1HP + "/" + player1Stats[0]);
          BattleLog("Spiller "+ turn +" angreb hensynløst og gjorde "+ damage2 + " skade")
          player2Stats[2] -= 1;
          currentTurn = 1;
          playerTurn(currentTurn);
          break;
        case "rogue":
          player2Stats[1] += 2;
          BattleLog("Spiller " + turn + " gjorde sin klinge skarpere")
          currentTurn = 1;
          playerTurn(currentTurn);
      }
    }

    if (player1HP > 0 && player2HP > 0) {
      fightBtn.show();
      defendBtn.show();
      skillBtn.show();
      backBtn.hide();
      skill1Btn.hide();
      skill2Btn.hide();
    }
  })

  skill2Btn.mouseClicked(() => {

    if (turn == 1) {
      switch (player1class) {
        case "mage":
          let healing = round(random(10,17));
          player1HP += healing;
          if (player1HP > 80) {
            player1HP = 80;
          }
          displayHP1.html("HP: " + player1HP + "/" + player1Stats[0]);
          BattleLog("Spiller "+ turn +" brugte helbredning og fik "+ healing + " HP")
          currentTurn = 2;
          playerTurn(currentTurn);
          break;
        case "fighter":
          player1Stats[2] += 2;
          BattleLog("Spiller " + turn + " tog mere rustning på")
          currentTurn = 2;
          playerTurn(currentTurn);
          break;
        case "rogue":
          console.log(vanish1)
          if (vanish1 == 1) {
            player1Stats[1] = player1Stats[1]*2
          }
          vanish1 = 0;
          BattleLog("Spiller "+ turn +" gemmer sig i skyggerne...")
          currentTurn = 2;
          playerTurn(currentTurn)
      }
    } else if (turn == 2) {
      switch (player2class) {
        case "mage":
          let healing = round(random(10,17));
          player2HP += healing;
          if (player2HP > 80) {
            player2HP = 80;
          }
          displayHP2.html("HP: " + player2HP + "/" + player2Stats[0]);
          BattleLog("Spiller "+ turn +" brugte helbredning og fik "+ healing + " HP")
          currentTurn = 1;
          playerTurn(currentTurn);
          break;
        case "fighter":
          player2Stats[2] += 2;
          BattleLog("Spiller " + turn + " tog mere rustning på")
          currentTurn = 1;
          playerTurn(currentTurn);
          break;
        case "rogue":
          if (vanish2 == 1) {
            player2Stats[1] = player2Stats[1]*2
          }
          vanish2 = 0;
          BattleLog("Spiller "+ turn +" gemmer sig i skyggerne...")
          currentTurn = 1;
          playerTurn(currentTurn)
      }
    }

    if (player1HP > 0 && player2HP > 0) {
      fightBtn.show();
      defendBtn.show();
      skillBtn.show();
      backBtn.hide();
      skill1Btn.hide();
      skill2Btn.hide();
    }
  })

  if (player1HP <= 0 || player2HP <= 0) {
    if(currentTurn == 1) {
      BattleLog("Spiller 2 vandt")
    } else if (currentTurn == 2) {
      BattleLog("Spiller 1 vandt")
    }

    fightBtn.hide();
    defendBtn.hide();
    skillBtn.hide();
    backBtn.hide();
    skill1Btn.hide();
    skill2Btn.hide();

    restartBtn.show();
  }

  restartBtn.mouseClicked(() => {
    mageIMG.hide();
    fighterIMG.hide();
    rogueIMG.hide();
    battleLogHeader.hide();
    battleHistory = [];
    fill(255)
    rect(450,125,400,600)
    displayHP1.hide();
    displayHP2.hide();
    restartBtn.hide();
    player1HP = 0;
    player2HP = 0;
    player1Stats = [];
    player2Stats = [];
    player1Selected = false;  
    currentTurn = 1;

    CharacterSelect();
  })


}

function BattleLog(logInput) {
  noStroke();
  fill(255)
  rect(450,125,400,600)

  fill(0);
  battleHistory.push(logInput);

  if (battleHistory.length > maxLogLength) {
    battleHistory.shift();
  }

  textSize(17)
  textAlign(LEFT)

  for (i = 0; i < battleHistory.length; i++) {
      text(battleHistory[i],450,150 + i*30, 400);
  }

}

function draw() {
}
