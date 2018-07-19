import fight from './fight/fight';
import Fighter from './fight/fighter';
import ImprovedFighter from './fight/improvedFighter';

export default class Main {
    constructor() {
        // create two instances
        const firstFighter = new Fighter();
        const secondFighter = new ImprovedFighter();

        // call fight function
        const app = fight(firstFighter, secondFighter, 1, 2, 3, 1, 5, 2, 4, 2, 6, 8, 3, 5, 7);
    }
}

const start = new Main();
