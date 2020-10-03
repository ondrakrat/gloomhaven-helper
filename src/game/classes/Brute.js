import Skill from '../Skill';
import Class from './Class';
import { Tag } from '../Skill';

const halfCard = (tags) => ({
    tags: tags
});

const skills = {
    'Trample': new Skill('Trample', 1, 72, 
        halfCard([Tag.MELEE, Tag.PIERCE]), 
        halfCard([Tag.MOVE, Tag.JUMP, Tag.MELEE, Tag.DISCARD])),
    'Eye for an Eye': new Skill('Eye for an Eye', 1, 18, 
        halfCard([Tag.RETALIATE, Tag.XP, Tag.SINGLE_ROUND_BUFF]), 
        halfCard([Tag.HEAL, Tag.GENERATE_EARTH])),
    'Sweeping Blow': new Skill('Sweeping Blow', 1, 64, 
        halfCard([Tag.MELEE, Tag.AOE]), 
        halfCard([Tag.MOVE, Tag.PUSH, Tag.AOE])),
    'Provoking Roar': new Skill('Provoking Roar', 1, 10, 
        halfCard([Tag.MELEE, Tag.DISARM]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Overwhelming Assault': new Skill('Overwhelming Assault', 1, 61, 
        halfCard([Tag.MELEE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.PUSH])),
    'Grab and Go': new Skill('Grab and Go', 1, 87, 
        halfCard([Tag.LOOT]), 
        halfCard([Tag.MOVE])),
    'Warding Strength': new Skill('Warding Strength', 1, 32, 
        halfCard([Tag.MELEE, Tag.PUSH]), 
        halfCard([Tag.SHIELD, Tag.MULTI_ROUND_BUFF, Tag.XP, Tag.DISCARD])),
    'Shield Bash': new Skill('Shield Bash', 1, 15, 
        halfCard([Tag.MELEE, Tag.STUN, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.SHIELD, Tag.SINGLE_ROUND_BUFF])),
    'Leaping Cleave': new Skill('Leaping Cleave', 1, 54, 
        halfCard([Tag.MELEE, Tag.AOE, Tag.XP]), 
        halfCard([Tag.MOVE, Tag.JUMP, Tag.GENERATE_AIR])),
    'Spare Dagger': new Skill('Spare Dagger', 1, 27, 
        halfCard([Tag.RANGED, Tag.XP]), 
        halfCard([Tag.MELEE])),
    'Skewer': new Skill('Skewer', 0, 35, 
        halfCard([Tag.MELEE, Tag.AOE, Tag.XP, Tag.CONSUME_AIR, Tag.PIERCE]), 
        halfCard([Tag.MOVE, Tag.XP, Tag.DISCARD])),
    'Balanced Measure': new Skill('Balanced Measure', 1, 77, 
        halfCard([Tag.MELEE, Tag.XP]), 
        halfCard([Tag.MOVE])),
    'Wall of Doom': new Skill('Wall of Doom', 1, 20, 
        halfCard([Tag.RETALIATE, Tag.SHIELD, Tag.XP, Tag.SINGLE_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Fatal Advance': new Skill('Fatal Advance', 2, 40, 
        halfCard([Tag.INSTA_KILL, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE])),
    'Juggernaut': new Skill('Juggernaut', 2, 34, 
        halfCard([Tag.MOVE, Tag.MELEE]), 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.XP, Tag.DISCARD])),
    'Hook and Chain': new Skill('Hook and Chain', 3, 42, 
        halfCard([Tag.RANGED, Tag.PULL]), 
        halfCard([Tag.MOVE, Tag.MELEE])),
    'Brute Force': new Skill('Brute Force', 3, 51, 
        halfCard([Tag.MELEE, Tag.AOE, Tag.MUDDLE, Tag.XP]), 
        halfCard([Tag.MOVE, Tag.SHIELD, Tag.SINGLE_ROUND_BUFF])),
    'Unstoppable Charge': new Skill('Unstoppable Charge', 4, 86, 
        halfCard([Tag.MELEE, Tag.XP]), 
        halfCard([Tag.MOVE, Tag.STUN, Tag.AOE, Tag.DISCARD])),
    'Devastating Hack': new Skill('Devastating Hack', 4, 27, 
        halfCard([Tag.MELEE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.LOOT])),
    'Whirlwind': new Skill('Whirlwind', 5, 28, 
        halfCard([Tag.MELEE, Tag.AOE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.PUSH])),
    'Skirmishing Maneuver': new Skill('Skirmishing Maneuver', 5, 29, 
        halfCard([Tag.MELEE, Tag.MOVE]), 
        halfCard([Tag.RANGED, Tag.XP])),
    'Quietus': new Skill('Quietus', 6, 57, 
        halfCard([Tag.INSTA_KILL, Tag.XP]), 
        halfCard([Tag.MOVE, Tag.SINGLE_ROUND_BUFF])),
    'Immovable Phalanx': new Skill('Immovable Phalanx', 6, 17, 
        halfCard([Tag.MELEE, Tag.SHIELD]), 
        halfCard([Tag.SINGLE_ROUND_BUFF, Tag.DISCARD])),
    'Defensive Tactics': new Skill('Defensive Tactics', 7, 26, 
        halfCard([Tag.RANGED, Tag.AOE, Tag.IMMOBILIZE, Tag.XP]), 
        halfCard([Tag.RETALIATE, Tag.SHIELD, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Crippling Offensive': new Skill('Crippling Offensive', 7, 33, 
        halfCard([Tag.MELEE, Tag.WOUND, Tag.STUN, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.IMMOBILIZE, Tag.PUSH])),
    'Frenzied Onslaught': new Skill('Frenzied Onslaught', 8, 41, 
        halfCard([Tag.MOVE, Tag.MELEE]), 
        halfCard([Tag.SINGLE_ROUND_BUFF, Tag.XP])),
    'Selfish Retribution': new Skill('Selfish Retribution', 8, 12, 
        halfCard([Tag.MOVE, Tag.LOOT, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.RETALIATE, Tag.XP, Tag.SINGLE_ROUND_BUFF])),
    'King of the Hill': new Skill('King of the Hill', 9, 39, 
        halfCard([Tag.MELEE, Tag.PUSH, Tag.AOE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.HEAL])),
    'Face Your End': new Skill('Face Your End', 9, 67, 
        halfCard([Tag.RANGED, Tag.AOE, Tag.PULL, Tag.XP]), 
        halfCard([Tag.INSTA_KILL, Tag.XP, Tag.DISCARD]))
};

export default class Brute extends Class {

    constructor() {
        super('Brute', 10, skills);
    }
}
