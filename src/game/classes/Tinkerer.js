import Class from './Class';
import Skill from '../Skill';

const skills = {
    'Proximity Mine': new Skill('Proximity Mine', 1, 62),
    'Harmless Contraption': new Skill('Harmless Contraption', 1, 74),
    'Flamethrower': new Skill('Flamethrower', 1, 47),
    'Hook Gun': new Skill('Hook Gun', 1, 72),
    'Ink Bomb': new Skill('Ink Bomb', 1, 74),
    'Net Shooter': new Skill('Net Shooter', 1, 19),
    'Stun Shot': new Skill('Stun Shot', 1, 20),
    'Reinvigorating Elixir': new Skill('Reinvigorating Elixir', 1, 37),
    'Restorative Mist': new Skill('Restorative Mist', 1, 17),
    'Energizing Tonic': new Skill('Energizing Tonic', 1, 16),
    'Enhancement Field': new Skill('Enhancement Field', 1, 61),
    'Toxic Bolt': new Skill('Toxic Bolt', 1, 18),
    'Reviving Shock': new Skill('Reviving Shock', 0, 34),
    'Volatile Concoction': new Skill('Volatile Concoction', 0, 76),
    'Potent Potables': new Skill('Potent Potables', 0, 46),
    'Stamina Booster': new Skill('Stamina Booster', 2, 48),
    'Disorienting Flash': new Skill('Disorienting Flash', 2, 73),
    'Tinkerer\'s Tools': new Skill('Tinkerer\'s Tools', 3, 26),
    'Crank Bow': new Skill('Crank Bow', 3, 66),
    'Dangerous Contraption': new Skill('Dangerous Contraption', 4, 84),
    'Micro Bots': new Skill('Micro Bots', 4, 22),
    'Noxious Vials': new Skill('Noxious Vials', 5, 75),
    'Disintegration Beam': new Skill('Disintegration Beam', 5, 36),
    'Gas Canister': new Skill('Gas Canister', 6, 71),
    'Auto Turret': new Skill('Auto Turret', 6, 34),
    'Murderous Contraption': new Skill('Murderous Contraption', 7, 94),
    'Curative Aerosol': new Skill('Curative Aerosol', 7, 21),
    'Jet Propulsion': new Skill('Jet Propulsion', 8, 38),
    'Harsh Stimulants': new Skill('Harsh Stimulants', 8, 27),
    'Lethal Injection': new Skill('Lethal Injection', 9, 85),
    'Chimeric Formula': new Skill('Chimeric Formula', 9, 43),
};

export default class Tinkerer extends Class {

    constructor() {
        super('Tinkerer', 12, skills);
    }
}
