import Class, { HitpointsScaling } from './Class';
import Skill from '../Skill';
import { Tag, halfCard } from '../Skill';

const skills = {
    'Rain of Arrows': new Skill('Rain of Arrows', 1, 33,
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.XP, Tag.DISCARD]), 
        halfCard([])),
    'Crippling Noose': new Skill('Crippling Noose', 1, 57,
        halfCard([Tag.STUN, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MULTI_ROUND_BUFF])),
    'Felling Swoop': new Skill('Felling Swoop', 1, 75,
        halfCard([Tag.SUMMON, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.MULTI_ROUND_BUFF])),
    'Vital Charge': new Skill('Vital Charge', 1, 78,
        halfCard([Tag.SUMMON, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.HEAL, Tag.MULTI_ROUND_BUFF])),
    'Race to the Grave': new Skill('Race to the Grave', 1, 9,
        halfCard([Tag.RANGED, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MULTI_ROUND_BUFF])),
    'Multi-pronged Assault': new Skill('Multi-pronged Assault', 1, 14,
        halfCard([Tag.RANGED, Tag.AOE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MULTI_ROUND_BUFF])),
    'Detonation': new Skill('Detonation', 1, 54,
        halfCard([Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MULTI_ROUND_BUFF])),
    'Frightening Curse': new Skill('Frightening Curse', 1, 37,
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MULTI_ROUND_BUFF])),
    'Foot Snare': new Skill('Foot Snare', 1, 61,
        halfCard([Tag.IMMOBILIZE]), 
        halfCard([Tag.IMMOBILIZE, Tag.MOVE])),
    'Solid Bow': new Skill('Solid Bow', 1, 31,
        halfCard([Tag.RANGED]), 
        halfCard([Tag.MOVE])),
    'A Moment\'s Peace': new Skill('A Moment\'s Peace', 1, 88,
        halfCard([Tag.LOOT]), 
        halfCard([Tag.MOVE, Tag.HEAL])),
    'Swift Trickery': new Skill('Swift Trickery', 1, 11,
        halfCard([Tag.RANGED]), 
        halfCard([Tag.MOVE])),
    'Sap Life': new Skill('Sap Life', 0, 14,
        halfCard([Tag.RETALIATE, Tag.XP, Tag.SINGLE_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.HEAL, Tag.MULTI_ROUND_BUFF])),
    'The Hunt Begins': new Skill('The Hunt Begins', 0, 71,
        halfCard([Tag.SUMMON, Tag.WOUND, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.MULTI_ROUND_BUFF])),
    'Fresh Kill': new Skill('Fresh Kill', 0, 65,
        halfCard([Tag.RANGED]), 
        halfCard([Tag.MOVE, Tag.JUMP])),
    'Expose': new Skill('Expose', 2, 13,
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.PIERCE, Tag.MULTI_ROUND_BUFF])),
    'Relentless Offensive': new Skill('Relentless Offensive', 2, 52,
        halfCard([Tag.RANGED, Tag.AOE]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Darkened Skies': new Skill('Darkened Skies', 3, 25,
        halfCard([Tag.RANGED, Tag.AOE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.RANGED, Tag.AOE, Tag.MULTI_ROUND_BUFF])),
    'Press the Attack': new Skill('Press the Attack', 3, 10,
        halfCard([Tag.RANGED]), 
        halfCard([Tag.RETALIATE, Tag.SINGLE_ROUND_BUFF])),
    'Singular Focus': new Skill('Singular Focus', 4, 28,
        halfCard([Tag.LOOT, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MULTI_ROUND_BUFF])),
    'Flight of Flame': new Skill('Flight of Flame', 4, 53,
        halfCard([Tag.WOUND]), 
        halfCard([Tag.MOVE, Tag.JUMP])),
    'Inescapable Fate': new Skill('Inescapable Fate', 5, 97,
        halfCard([Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.MULTI_ROUND_BUFF])),
    'Wild Command': new Skill('Wild Command', 5, 46,
        halfCard([]), 
        halfCard([Tag.MOVE, Tag.RANGED])),
    'Nature\'s Hunger': new Skill('Nature\'s Hunger', 6, 82,
        halfCard([Tag.SUMMON, Tag.STUN, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.HEAL, Tag.MULTI_ROUND_BUFF])),
    'Camouflage': new Skill('Camouflage', 6, 23,
        halfCard([Tag.RANGED, Tag.INVISIBLE]), 
        halfCard([Tag.MOVE, Tag.INVISIBLE])),
    'Impending End': new Skill('Impending End', 7, 47,
        halfCard([Tag.RANGED]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Crashing Wave': new Skill('Crashing Wave', 7, 22,
        halfCard([Tag.MOVE, Tag.MELEE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.CURSE, Tag.MULTI_ROUND_BUFF])),
    'Rising Momentum': new Skill('Rising Momentum', 8, 12,
        halfCard([Tag.RANGED, Tag.PUSH, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MULTI_ROUND_BUFF])),
    'Feral Instincts': new Skill('Feral Instincts', 8, 35,
        halfCard([Tag.MOVE, Tag.MELEE, Tag.LOOT]), 
        halfCard([Tag.MOVE, Tag.HEAL])),
    'Predator and Prey': new Skill('Predator and Prey', 9, 86,
        halfCard([Tag.SUMMON, Tag.POISON, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.MULTI_ROUND_BUFF])),
    'Lead to Slaughter': new Skill('Lead to Slaughter', 9, 40,
        halfCard([Tag.RANGED]), 
        halfCard([Tag.MOVE]))
};

export default class Doomstalker extends Class {

    constructor() {
        super('Doomstalker', 12, HitpointsScaling.MIDRANGE, true, skills);
    }
}
