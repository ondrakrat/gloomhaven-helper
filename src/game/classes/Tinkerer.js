import Class from './Class';
import Skill from '../Skill';

export default class Tinkerer extends Class {

    constructor() {
        const skills = {
            'Proximity Mine': new Skill('Proximity Mine', 1),
            'Harmless Contraption': new Skill('Harmless Contraption', 1),
            'Flamethrower': new Skill('Flamethrower', 1),
            'Hook Gun': new Skill('Hook Gun', 1),
            'Ink Bomb': new Skill('Ink Bomb', 1),
            'Net Shooter': new Skill('Net Shooter', 1),
            'Stun Shot': new Skill('Stun Shot', 1),
            'Reinvigorating Elixir': new Skill('Reinvigorating Elixir', 1),
            'Restorative Mist': new Skill('Restorative Mist', 1),
            'Energizing Tonic': new Skill('Energizing Tonic', 1),
            'Enhancement Field': new Skill('Enhancement Field', 1),
            'Toxic Bolt': new Skill('Toxic Bolt', 1),
            'Reviving Shock': new Skill('Reviving Shock', 0),
            'Volatile Concoction': new Skill('Volatile Concoction', 0),
            'Potent Potables': new Skill('Potent Potables', 0),
            'Stamina Booster': new Skill('Stamina Booster', 2),
            'Disorienting Flash': new Skill('Disorienting Flash', 2),
            'Tinkerer\'s Tools': new Skill('Tinkerer\'s Tools', 3),
            'Crank Bow': new Skill('Crank Bow', 3),
            'Dangerous Contraption': new Skill('Dangerous Contraption', 4),
            'Micro Bots': new Skill('Micro Bots', 4),
            'Noxious Vials': new Skill('Noxious Vials', 5),
            'Disintegration Beam': new Skill('Disintegration Beam', 5),
            'Gas Canister': new Skill('Gas Canister', 6),
            'Auto Turret': new Skill('Auto Turret', 6),
            'Murderous Contraption': new Skill('Murderous Contraption', 7),
            'Curative Aerosol': new Skill('Curative Aerosol', 7),
            'Jet Propulsion': new Skill('Jet Propulsion', 8),
            'Harsh Stimulants': new Skill('Harsh Stimulants', 8),
            'Lethal Injection': new Skill('Lethal Injection', 9),
            'Chimeric Formula': new Skill('Chimeric Formula', 9),
        };
        super('Tinkerer', 12, skills);
    }
}
