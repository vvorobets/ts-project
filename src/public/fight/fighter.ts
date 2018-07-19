import ImprovedFighter from "./improvedFighter";

export interface IFighter {
    getName: () => string;
    getHealth: () => number;
    getPower: () => number;
    setDamage: (damage: number) => void;
    hit: (enemy: Fighter | ImprovedFighter, point: number) => void;
    knockout: () => Promise<void>;
}

// Create class Fighter
export default class Fighter implements IFighter {
    protected _name: string;
    protected _health: number;
    protected _power: number;
    constructor(name = "padawan", health = 100, power = 10) {
      (this._name = name), (this._health = health), (this._power = power);
    }
    public getName() {
      return this._name;
    }
    public getHealth() {
      return this._health;
    }
    public getPower() {
      return this._power;
    }
    public setDamage(damage) {
      this._health -= damage;
      console.log(`Now the ${this.getName()}'s health is ${this.getHealth()}`);
    }
    public hit(enemy, point) {
      enemy.setDamage(point * this._power);
    }
    public knockout() {
      return new Promise<void>(resolve => setTimeout(resolve, 500)).then(() =>
        console.log("time is over")
      );
    }
}