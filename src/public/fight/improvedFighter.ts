import Fighter from "./fighter";

// Create class ImprovedFighter
export default class ImprovedFighter extends Fighter {
  constructor(name = "Darth Vader", health = 100, power = 10) {
    super(name, health, power);
  }
  public doubleHit(enemy: Fighter, point: number): void {
    super.hit(enemy, point * 2);
  }
}