let  readlineSync  =  require('readline-sync');

console.log( "Welcome to Batman: Arkham Asylum!" );
console.log( "What do you want to do?" );
let option = readlineSync.question( "Options: look around, smack a prisoner, stop them, run away" );

switch(option) {
  case "look around":
    console.log( "You see a bunch of angry prisoners and the Joker!" );
    break;
  case "smack a prisioner":
    console.log( "Ouch! What did I ever do to you, man?" );
    break;
  case "stop them":
    console.log("You see prisoners getting rowdy" );    
    break;
  case "run away":
    console.log( "Batman: \"Bats can't run.\"" );
    break;
   case "get help":
     console.log("Prisoners are still rowdy");
    break;
  default: 
    console.log( "A prisoner punches you in the face." );
    console.log( "Prisoner: \"Quit messin' around.\"" );
} 
