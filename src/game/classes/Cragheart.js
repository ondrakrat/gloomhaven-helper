import Class, { HitpointsScaling } from './Class';
import Skill from '../Skill';
import { Tag, halfCard } from '../Skill';

const skills = {
    'Opposing Strike': new Skill('Opposing Strike', 1, 46, 
        halfCard([Tag.MELEE, Tag.AOE, Tag.XP]), 
        halfCard([Tag.RETALIATE, Tag.MULTI_ROUND_BUFF, Tag.XP, Tag.DISCARD])),
    'Crushing Grasp': new Skill('Crushing Grasp', 1, 35, 
        halfCard([Tag.MELEE, Tag.IMMOBILIZE, Tag.GENERATE_EARTH]), 
        halfCard([Tag.LOOT])),
    'Avalanche': new Skill('Avalanche', 1, 75, 
        halfCard([Tag.MELEE, Tag.AOE, Tag.XP, Tag.CONSUME_EARTH, Tag.DISCARD]), 
        halfCard([Tag.GENERATE_EARTH])),
    'Rumbling Advance': new Skill('Rumbling Advance', 1, 29, 
        halfCard([Tag.HEAL, Tag.GENERATE_EARTH]), 
        halfCard([Tag.MOVE, Tag.GENERATE_EARTH])),
    'Massive Boulder': new Skill('Massive Boulder', 1, 87, 
        halfCard([Tag.RANGED, Tag.GENERATE_EARTH]), 
        halfCard([Tag.MOVE])),
    'Backup Ammunition': new Skill('Backup Ammunition', 1, 77, 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE])),
    'Rock Tunnel': new Skill('Rock Tunnel', 1, 41, 
        halfCard([Tag.XP]), 
        halfCard([Tag.MOVE, Tag.JUMP, Tag.IMMOBILIZE, Tag.XP, Tag.DISCARD])),
    'Unstable Upheaval': new Skill('Unstable Upheaval', 1, 13, 
        halfCard([Tag.MELEE, Tag.CONSUME_EARTH, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.SHIELD, Tag.SINGLE_ROUND_BUFF, Tag.XP, Tag.DISCARD])),
    'Crater': new Skill('Crater', 1, 61, 
        halfCard([Tag.RANGED, Tag.CONSUME_EARTH, Tag.XP, Tag.PUSH]), 
        halfCard([Tag.MOVE, Tag.JUMP, Tag.CONSUME_EARTH, Tag.DISCARD])),
    'Dirt Tornado': new Skill('Dirt Tornado', 1, 82, 
        halfCard([Tag.RANGED, Tag.AOE, Tag.CONSUME_EARTH, Tag.XP, Tag.MUDDLE]), 
        halfCard([Tag.MOVE])),
    'Earthen Clod': new Skill('Earthen Clod', 1, 38, 
        halfCard([Tag.RANGED, Tag.CONSUME_EARTH, Tag.IMMOBILIZE, Tag.XP]), 
        halfCard([Tag.HEAL])),
    'Heaving Swing': new Skill('Heaving Swing', 0, 57, 
        halfCard([Tag.MELEE, Tag.PUSH, Tag.XP]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Forceful Storm': new Skill('Forceful Storm', 0, 53, 
        halfCard([Tag.RANGED, Tag.AOE, Tag.DISARM, Tag.XP, Tag.GENERATE_AIR, Tag.DISCARD]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Nature\'s Lift': new Skill('Nature\'s Lift', 0, 64, 
        halfCard([Tag.HEAL]), 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.XP, Tag.CONSUME_AIR, Tag.DISCARD])),
    'Explosive Punch': new Skill('Explosive Punch', 2, 28, 
        halfCard([Tag.MELEE, Tag.AOE, Tag.GENERATE_EARTH, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE])),
    'Sentient Growth': new Skill('Sentient Growth', 2, 78, 
        halfCard([Tag.RANGED, Tag.AOE, Tag.HEAL]), 
        halfCard([Tag.MOVE, Tag.HEAL, Tag.MELEE, Tag.AOE])),
    'Clear the Way': new Skill('Clear the Way', 3, 43, 
        halfCard([Tag.RANGED, Tag.AOE, Tag.XP, Tag.CONSUME_EARTH]), 
        halfCard([Tag.MOVE, Tag.JUMP, Tag.XP, Tag.DISCARD])),
    'Blunt Force': new Skill('Blunt Force', 3, 21, 
        halfCard([Tag.MELEE, Tag.CONSUME_EARTH, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.RETALIATE, Tag.XP, Tag.SINGLE_ROUND_BUFF])),
    'Rock Slide': new Skill('Rock Slide', 4, 81, 
        halfCard([Tag.GENERATE_EARTH, Tag.XP]), 
        halfCard([Tag.MOVE])),
    'Kinetic Assault': new Skill('Kinetic Assault', 4, 19, 
        halfCard([Tag.MOVE, Tag.MELEE]), 
        halfCard([Tag.RETALIATE, Tag.XP, Tag.SINGLE_ROUND_BUFF, Tag.DISCARD])),
    'Petrify': new Skill('Petrify', 5, 47, 
        halfCard([Tag.INSTA_KILL, Tag.GENERATE_EARTH, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.IMMOBILIZE])),
    'Stone Pummel': new Skill('Stone Pummel', 5, 32, 
        halfCard([Tag.MELEE, Tag.AOE, Tag.MUDDLE, Tag.XP]), 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.XP, Tag.DISCARD])),
    'Dig Pit': new Skill('Dig Pit', 6, 78, 
        halfCard([Tag.STUN, Tag.MUDDLE]), 
        halfCard([Tag.MOVE, Tag.INVISIBLE])),
    'Cataclysm': new Skill('Cataclysm', 6, 26, 
        halfCard([Tag.MELEE, Tag.AOE, Tag.CONSUME_EARTH, Tag.XP, Tag.IMMOBILIZE, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.CONSUME_EARTH])),
    'Meteor': new Skill('Meteor', 7, 23, 
        halfCard([Tag.MELEE, Tag.IMMOBILIZE, Tag.AOE, Tag.GENERATE_EARTH, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.JUMP])),
    'Brutal Momentum': new Skill('Brutal Momentum', 7, 52, 
        halfCard([Tag.MELEE, Tag.PUSH, Tag.XP]), 
        halfCard([Tag.SINGLE_ROUND_BUFF, Tag.XP, Tag.CONSUME_EARTH])),
    'Rocky End': new Skill('Rocky End', 8, 37, 
        halfCard([Tag.CONSUME_EARTH, Tag.XP, Tag.MELEE, Tag.DISCARD]), 
        halfCard([Tag.MOVE])),
    'Lumbering Bash': new Skill('Lumbering Bash', 8, 85, 
        halfCard([Tag.MOVE, Tag.MELEE, Tag.GENERATE_EARTH, Tag.XP]), 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.HEAL, Tag.XP, Tag.DISCARD])),
    'Blind Destruction': new Skill('Blind Destruction', 9, 74, 
        halfCard([Tag.RANGED, Tag.AOE]), 
        halfCard([Tag.MOVE, Tag.GENERATE_EARTH])),
    'Pulverize': new Skill('Pulverize', 9, 31, 
        halfCard([Tag.MELEE, Tag.PUSH, Tag.AOE, Tag.DISCARD]), 
        halfCard([Tag.MELEE, Tag.AOE, Tag.MOVE, Tag.JUMP, Tag.XP, Tag.DISCARD]))
};

export default class Cragheart extends Class {

    constructor() {
        super('Cragheart', 11, HitpointsScaling.TANK, false, skills);
    }
}
