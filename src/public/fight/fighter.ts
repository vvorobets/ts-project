import ImprovedFighter from "./improvedFighter";

export interface IFighter {
    _name: string;
    _health: number;
    _power: number;
    getName: () => string;
    getHealth: () => number;
    getPower: () => number;
    setDamage: (damage: number) => void;
    hit: (enemy: Fighter | ImprovedFighter, point: number) => void;
    knockout: () => Promise<void>;
}

// Create class Fighter
export default class Fighter implements IFighter {
    _name: string;
    _health: number;
    _power: number;
    constructor(name = "padawan", health = 100, power = 10) {
      (this._name = name), (this._health = health), (this._power = power);
    }
    getName() {
      return this._name;
    }
    getHealth() {
      return this._health;
    }
    getPower() {
      return this._power;
    }
    setDamage(damage) {
      this._health -= damage;
      console.log(`Now the ${this.getName()}'s health is ${this.getHealth()}`);
    }
    hit(enemy, point) {
      enemy.setDamage(point * this._power);
    }
    knockout() {
      return new Promise<void>(resolve => setTimeout(resolve, 500)).then(() =>
        console.log("time is over")
      );
      let Promise: PromiseConstructor
new <void>(executor: (resolve: (value?: void | PromiseLike<void>) => void) => void) => Promise<void>
    }
}