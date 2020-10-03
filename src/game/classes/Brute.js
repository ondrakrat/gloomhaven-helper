import Skill from '../Skill';
import Class from './Class';

const skills = {
    'Trample': new Skill('Trample', 1, 72),
    'Eye for an Eye': new Skill('Eye for an Eye', 1, 18),
    'Sweeping Blow': new Skill('Sweeping Blow', 1, 64),
    'Provoking Roar': new Skill('Provoking Roar', 1, 10),
    'Overwhelming Assault': new Skill('Overwhelming Assault', 1, 61),
    'Grab and Go': new Skill('Grab and Go', 1, 87),
    'Warding Strength': new Skill('Warding Strength', 1, 32),
    'Shield Bash': new Skill('Shield Bash', 1, 15),
    'Leaping Cleave': new Skill('Leaping Cleave', 1, 54),
    'Spare Dagger': new Skill('Spare Dagger', 1, 27),
    'Skewer': new Skill('Skewer', 0, 35),
    'Balanced Measure': new Skill('Balanced Measure', 1, 77),
    'Wall of Doom': new Skill('Wall of Doom', 1, 20),
    'Fatal Advance': new Skill('Fatal Advance', 2, 40),
    'Juggernaut': new Skill('Juggernaut', 2, 34),
    'Hook and Chain': new Skill('Hook and Chain', 3, 42),
    'Brute Force': new Skill('Brute Force', 3, 51),
    'Unstoppable Charge': new Skill('Unstoppable Charge', 4, 86),
    'Devastating Hack': new Skill('Devastating Hack', 4, 27),
    'Whirlwind': new Skill('Whirlwind', 5, 28),
    'Skirmishing Maneuver': new Skill('Skirmishing Maneuver', 5, 29),
    'Quietus': new Skill('Quietus', 6, 57),
    'Immovable Phalanx': new Skill('Immovable Phalanx', 6, 17),
    'Defensive Tactics': new Skill('Defensive Tactics', 7, 26),
    'Crippling Offensive': new Skill('Crippling Offensive', 7, 33),
    'Frenzied Onslaught': new Skill('Frenzied Onslaught', 8, 41),
    'Selfish Retribution': new Skill('Selfish Retribution', 8, 12),
    'King of the Hill': new Skill('King of the Hill', 9, 39),
    'Face Your End': new Skill('Face Your End', 9, 67)
};

export default class Brute extends Class {

    constructor() {
        super('Brute', 10, skills);
    }
}
