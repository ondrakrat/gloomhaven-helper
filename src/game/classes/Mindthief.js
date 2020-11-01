import Class from './Class';
import Skill from '../Skill';
import { Tag, halfCard } from '../Skill';

const skills = {
    'Submissive Affliction': new Skill('Submissive Affliction', 1, 48, 
        halfCard([Tag.MELEE, Tag.XP]),
        halfCard([])),
    'Into the Night': new Skill('Into the Night', 1, 14, 
        halfCard([Tag.LOOT, Tag.GENERATE_DARK]),
        halfCard([Tag.INVISIBLE])),
    'Fearsome Blade': new Skill('Fearsome Blade', 1, 27, 
        halfCard([Tag.MELEE, Tag.PULL, Tag.XP]),
        halfCard([Tag.MOVE, Tag.MELEE, Tag.XP, Tag.DISCARD])),
    'Feedback Loop': new Skill('Feedback Loop', 1, 79, 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.SHIELD, Tag.MELEE, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.MOVE, Tag.JUMP, Tag.MUDDLE])),
    'Gnawing Horde': new Skill('Gnawing Horde', 1, 82, 
        halfCard([Tag.SUMMON, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.MOVE])),
    'The Mind\'s Weakness': new Skill('The Mind\'s Weakness', 1, 75, 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.MELEE, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.MELEE, Tag.WOUND])),
    'Parasitic Influence': new Skill('Parasitic Influence', 1, 71, 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.HEAL, Tag.MELEE, Tag.XP]),
        halfCard([])),
    'Scurry': new Skill('Scurry', 1, 20, 
        halfCard([Tag.MOVE, Tag.MELEE]),
        halfCard([Tag.LOOT, Tag.XP, Tag.DISCARD])),
    'Perverse Edge': new Skill('Perverse Edge', 1, 8, 
        halfCard([Tag.MELEE, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.RANGED, Tag.STUN, Tag.GENERATE_ICE, Tag.XP])),
    'Empathetic Assault': new Skill('Empathetic Assault', 1, 11, 
        halfCard([Tag.RANGED, Tag.DISARM, Tag.GENERATE_ICE, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.MOVE, Tag.HEAL])),
    'Withering Claw': new Skill('Withering Claw', 0, 77, 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.POISON, Tag.MUDDLE, Tag.MELEE, Tag.XP, Tag.DISCARD]),
        halfCard([])),
    'Possession': new Skill('Possession', 0, 51, 
        halfCard([Tag.XP, Tag.DISCARD]),
        halfCard([])),
    'Frigid Apparition': new Skill('Frigid Apparition', 0, 29, 
        halfCard([Tag.MELEE, Tag.CONSUME_ICE, Tag.STUN, Tag.XP]),
        halfCard([Tag.MOVE, Tag.STUN, Tag.XP, Tag.DISCARD])),
    'Wretched Creature': new Skill('Wretched Creature', 2, 84, 
        halfCard([Tag.SUMMON, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.MOVE, Tag.CURSE, Tag.CONSUME_DARK])),
    'Hostile Takeover': new Skill('Hostile Takeover', 2, 9, 
        halfCard([Tag.RANGED, Tag.IMMOBILIZE, Tag.GENERATE_ICE, Tag.XP]),
        halfCard([Tag.XP, Tag.DISCARD])),
    'Brain Leech': new Skill('Brain Leech', 3, 16, 
        halfCard([Tag.RANGED, Tag.HEAL, Tag.GENERATE_DARK, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.MELEE, Tag.STRENGTHEN])),
    'Silent Scream': new Skill('Silent Scream', 3, 73, 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.HEAL, Tag.MELEE, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.MOVE, Tag.PUSH, Tag.AOE, Tag.CONSUME_ICE, Tag.XP])),
    'Pilfer': new Skill('Pilfer', 4, 68, 
        halfCard([Tag.LOOT]),
        halfCard([Tag.MELEE, Tag.MOVE, Tag.XP, Tag.DISCARD])),
    'Cranium Overload': new Skill('Cranium Overload', 4, 5, 
        halfCard([Tag.INSTA_KILL, Tag.MELEE, Tag.AOE, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.MOVE])),
    'Mass Hysteria': new Skill('Mass Hysteria', 5, 12, 
        halfCard([Tag.RANGED, Tag.AOE, Tag.MUDDLE, Tag.GENERATE_ICE, Tag.XP]),
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Frozen Mind': new Skill('Frozen Mind', 5, 81, 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.CONSUME_ICE, Tag.STUN, Tag.MELEE, Tag.XP, Tag.DISCARD]),
        halfCard([])),
    'Corrupting Embrace': new Skill('Corrupting Embrace', 6, 39, 
        halfCard([Tag.MELEE, Tag.POISON, Tag.MUDDLE]),
        halfCard([Tag.MOVE, Tag.JUMP, Tag.POISON, Tag.AOE, Tag.GENERATE_DARK])),
    'Dark Frenzy': new Skill('Dark Frenzy', 6, 10, 
        halfCard([Tag.MELEE, Tag.CONSUME_ICE, Tag.CONSUME_DARK, Tag.XP]),
        halfCard([Tag.MOVE, Tag.RANGED, Tag.GENERATE_ICE, Tag.XP])),
    'Vicious Blood': new Skill('Vicious Blood', 7, 83, 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.RETALIATE, Tag.MELEE, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.MOVE, Tag.MELEE])),
    'Psychic Projection': new Skill('Psychic Projection', 7, 92, 
        halfCard([Tag.HEAL, Tag.SHIELD, Tag.STUN, Tag.SINGLE_ROUND_BUFF]),
        halfCard([Tag.SINGLE_ROUND_BUFF, Tag.DISCARD])),
    'Shared Nightmare': new Skill('Shared Nightmare', 8, 7, 
        halfCard([Tag.RANGED, Tag.AOE, Tag.CONSUME_DARK, Tag.POISON, Tag.CURSE, Tag.GENERATE_ICE, Tag.XP]),
        halfCard([Tag.MOVE, Tag.CONSUME_ICE, Tag.SHIELD, Tag.XP, Tag.SINGLE_ROUND_BUFF])),
    'Domination': new Skill('Domination', 8, 13, 
        halfCard([Tag.XP]),
        halfCard([Tag.XP, Tag.DISCARD])),
    'Many as One': new Skill('Many as One', 9, 91, 
        halfCard([Tag.SUMMON, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.SINGLE_ROUND_BUFF, Tag.XP, Tag.DISCARD])),
    'Phantasmal Killer': new Skill('Phantasmal Killer', 9, 67, 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.INSTA_KILL, Tag.MELEE, Tag.XP, Tag.DISCARD]),
        halfCard([Tag.MOVE, Tag.LOOT, Tag.INVISIBLE, Tag.GENERATE_DARK]))
};

export default class Mindthief extends Class {

    constructor() {
        super('Mindthief', 10, false, skills);
    }
}
