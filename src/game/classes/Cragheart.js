import Class from './Class';
import Skill from '../Skill';

const skills = {
    'Opposing Strike': new Skill('Opposing Strike', 1, 46),
    'Crushing Grasp': new Skill('Crushing Grasp', 1, 35),
    'Avalanche': new Skill('Avalanche', 1, 75),
    'Rumbling Advance': new Skill('Rumbling Advance', 1, 29),
    'Massive Boulder': new Skill('Massive Boulder', 1, 87),
    'Backup Ammunition': new Skill('Backup Ammunition', 1, 77),
    'Rock Tunnel': new Skill('Rock Tunnel', 1, 41),
    'Unstable Upheaval': new Skill('Unstable Upheaval', 1, 13),
    'Crater': new Skill('Crater', 1, 61),
    'Dirt Tornado': new Skill('Dirt Tornado', 1, 82),
    'Earthen Clod': new Skill('Earthen Clod', 1, 38),
    'Heaving Swing': new Skill('Heaving Swing', 0, 57),
    'Forceful Storm': new Skill('Forceful Storm', 0, 53),
    'Nature\'s Lift': new Skill('Nature\'s Lift', 0, 64),
    'Explosive Punch': new Skill('Explosive Punch', 2, 28),
    'Sentient Growth': new Skill('Sentient Growth', 2, 78),
    'Clear the Way': new Skill('Clear the Way', 3, 43),
    'Blunt Force': new Skill('Blunt Force', 3, 21),
    'Rock Slide': new Skill('Rock Slide', 4, 81),
    'Kinetic Assault': new Skill('Kinetic Assault', 4, 19),
    'Petrify': new Skill('Petrify', 5, 47),
    'Stone Pummel': new Skill('Stone Pummel', 5, 32),
    'Dig Pit': new Skill('Dig Pit', 6, 78),
    'Cataclysm': new Skill('Cataclysm', 6, 26),
    'Meteor': new Skill('Meteor', 7, 23),
    'Brutal Momentum': new Skill('Brutal Momentum', 7, 52),
    'Rocky End': new Skill('Rocky End', 8, 37),
    'Lumbering Bash': new Skill('Lumbering Bash', 8, 85),
    'Blind Destruction': new Skill('Blind Destruction', 9, 74),
    'Pulverize': new Skill('Pulverize', 9, 31)
};

export default class Cragheart extends Class {

    constructor() {
        super('Cragheart', 11, skills);
    }
}
