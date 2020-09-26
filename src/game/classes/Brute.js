import Skill from '../Skill';
import Class from './Class';

export default class Brute extends Class {

    constructor() {
        const skills = {
            'Trample': new Skill('Trample', 1),
            'Eye for an Eye': new Skill('Eye for an Eye', 1),
            'Sweeping Blow': new Skill('Sweeping Blow', 1),
            'Provoking Roar': new Skill('Provoking Roar', 1),
            'Overwhelming Assault': new Skill('Overwhelming Assault', 1),
            'Grab and Go': new Skill('Grab and Go', 1),
            'Warding Strength': new Skill('Warding Strength', 1),
            'Shield Bash': new Skill('Shield Bash', 1),
            'Leaping Cleave': new Skill('Leaping Cleave', 1),
            'Spare Dagger': new Skill('Spare Dagger', 1),
            'Skewer': new Skill('Skewer', 0),
            'Balanced Measure': new Skill('Balanced Measure', 1),
            'Wall of Doom': new Skill('Wall of Doom', 1),
            'Fatal Advance': new Skill('Fatal Advance', 2),
            'Juggernaut': new Skill('Juggernaut', 2),
            'Hook and Chain': new Skill('Hook and Chain', 3),
            'Brute Force': new Skill('Brute Force', 3),
            'Unstoppable Charge': new Skill('Unstoppable Charge', 4),
            'Devastating Hack': new Skill('Devastating Hack', 4),
            'Whirlwind': new Skill('Whirlwind', 5),
            'Skirmishing Maneuver': new Skill('Skirmishing Maneuver', 5),
            'Quiteus': new Skill('Quietus', 6),
            'Immovable Phalanx': new Skill('Immovable Phalanx', 6),
            'Defensive Tactics': new Skill('Defensive Tactics', 7),
            'Crippling Offensive': new Skill('Crippling Offensive', 7),
            'Frenzied Onslaught': new Skill('Frenzied Onslaught', 8),
            'Selfish Retribution': new Skill('Selfish Retribution', 8),
            'King of the Hill': new Skill('King of the Hill', 9),
            'Face Your End': new Skill('Face Your End', 9)
        };
        super('Brute', 10, skills);
    }
}
