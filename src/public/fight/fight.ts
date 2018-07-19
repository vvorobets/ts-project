import Fighter from './fighter';
import ImprovedFighter from './improvedFighter';

// create async function fight
async function fight(fighter: Fighter, improvedFighter: ImprovedFighter, ...points): Promise<void> {
    let assertedPoints = <number[]>points;
    console.log(
      `To the left is: ${fighter.getName()}! And to the right is: ${improvedFighter.getName()}!`
    );
    let is1FighterTurn: boolean = true;
    for (let point of assertedPoints) {
      is1FighterTurn
        ? console.log(`The ${fighter.getName()}'s turn!`)
        : console.log(`The ${improvedFighter.getName()}'s turn!`);
      if (is1FighterTurn) {
        fighter.hit(improvedFighter, point);
        if (improvedFighter.getHealth() < 0) {
          console.log(`${improvedFighter.getName()} in knockout!`);
          await improvedFighter.knockout();
          console.log(`${fighter.getName()} won!`);
          return;
        }
        is1FighterTurn = false;
      } else {
        improvedFighter.doubleHit(fighter, point);
        if (fighter.getHealth() < 0) {
          console.log(`${fighter.getName()} in knockout!`);
          await fighter.knockout();
          console.log(`${improvedFighter.getName()} won!`);
          return;
        }
        is1FighterTurn = true;
      }
    }
    fighter.getHealth() === improvedFighter.getHealth()
      ? console.log("It's the Draw! Go to corners!")
      : fighter.getHealth() > improvedFighter.getHealth()
        ? console.log(`${fighter.getName()} won!`)
        : console.log(`${improvedFighter.getName()} won!`);
  }
  
  export default fight;
  