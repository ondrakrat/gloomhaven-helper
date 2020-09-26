import Class from './Class';
import Skill from '../Skill';

export default class Cragheart extends Class {

    constructor() {
        const skills = {
            'Opposing Strike': new Skill('Opposing Strike', 1),
            'Crushing Grasp': new Skill('Crushing Grasp', 1),
            'Avalanche': new Skill('Avalanche', 1),
            'Rumbling Advance': new Skill('Rumbling Advance', 1),
            'Massive Boulder': new Skill('Massive Boulder', 1),
            'Backup Ammunition': new Skill('Backup Ammunition', 1),
            'Rock Tunnel': new Skill('Rock Tunnel', 1),
            'Unstable Upheaval': new Skill('Unstable Upheaval', 1),
            'Crater': new Skill('Crater', 1),
            'Dirt Tornado': new Skill('Dirt Tornado', 1),
            'Earthen Clod': new Skill('Earthen Clod', 1),
            'Heaving Swing': new Skill('Heaving Swing', 0),
            'Forceful Storm': new Skill('Forceful Storm', 0),
            'Nature\'s Lift': new Skill('Nature\'s Lift', 0),
            'Explosive Punch': new Skill('Explosive Punch', 2),
            'Sentient Growth': new Skill('Sentient Growth', 2),
            'Clear the Way': new Skill('Clear the Way', 3),
            'Blunt Force': new Skill('Blunt Force', 3),
            'Rock Slide': new Skill('Rock Slide', 4),
            'Kinetic Assault': new Skill('Kinetic Assault', 4),
            'Petrify': new Skill('Petrify', 5),
            'Stone Pummel': new Skill('Stone Pummel', 5),
            'Dig Pit': new Skill('Dig Pit', 6),
            'Cataclysm': new Skill('Cataclysm', 6),
            'Meteor': new Skill('Meteor', 7),
            'Brutal Momentum': new Skill('Brutal Momentum', 7),
            'Rocky End': new Skill('Rocky End', 8),
            'Lumbering Bash': new Skill('Lumbering Bash', 8),
            'Blind Destruction': new Skill('Blind Destruction', 9),
            'Pulverize': new Skill('Pulverize', 9)
        };
        super('Cragheart', 11, skills);
    }
}
