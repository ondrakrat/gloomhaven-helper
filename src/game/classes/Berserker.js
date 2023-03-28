import Class, { HitpointsScaling } from './Class';
import Skill from '../Skill';
import { Tag, halfCard } from '../Skill';

const skills = {
    'Resolute Stand': new Skill('Resolute Stand', 1, 9,
        halfCard([Tag.MELEE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.RETALIATE, Tag.SINGLE_ROUND_BUFF])),
    'Growing Rage': new Skill('Growing Rage', 1, 85,
        halfCard([Tag.MELEE, Tag.XP]), 
        halfCard([Tag.MOVE, Tag.MELEE, Tag.XP])),
    'Strength in Agony': new Skill('Strength in Agony', 1, 37,
        halfCard([Tag.MELEE, Tag.XP]), 
        halfCard([Tag.MOVE])),
    'Defiance of Death': new Skill('Defiance of Death', 1, 31,
        halfCard([Tag.MELEE, Tag.XP]), 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.XP, Tag.DISCARD])),
    'From the Brink': new Skill('From the Brink', 1, 24,
        halfCard([Tag.HEAL, Tag.RANGED, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.PUSH])),
    'Blood Pact': new Skill('Blood Pact', 1, 76,
        halfCard([Tag.MELEE, Tag.XP]), 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Cauterize': new Skill('Cauterize', 1, 40,
        halfCard([Tag.RANGED, Tag.AOE, Tag.WOUND, Tag.GENERATE_FIRE]), 
        halfCard([Tag.HEAL, Tag.XP, Tag.DISCARD])),
    'Dazing Wound': new Skill('Dazing Wound', 1, 29,
        halfCard([Tag.MELEE, Tag.STUN, Tag.XP]), 
        halfCard([Tag.MOVE])),
    'Furious Aid': new Skill('Furious Aid', 1, 43,
        halfCard([Tag.LOOT, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.HEAL, Tag.RANGED])),
    'Bounce Back': new Skill('Bounce Back', 1, 14,
        halfCard([Tag.RETALIATE, Tag.SINGLE_ROUND_BUFF]), 
        halfCard([Tag.MOVE, Tag.HEAL])),
    'Unbridled Power': new Skill('Unbridled Power', 0, 67,
        halfCard([Tag.MELEE, Tag.STUN, Tag.CONSUME_FIRE]), 
        halfCard([Tag.HEAL, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Glass Hammer': new Skill('Glass Hammer', 0, 11,
        halfCard([Tag.MELEE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE])),
    'Numb the Pain': new Skill('Numb the Pain', 0, 35,
        halfCard([Tag.MELEE, Tag.SHIELD, Tag.XP, Tag.SINGLE_ROUND_BUFF]), 
        halfCard([Tag.MOVE, Tag.STUN])),
    'Reckless Offensive': new Skill('Reckless Offensive', 2, 21,
        halfCard([Tag.MELEE, Tag.AOE]), 
        halfCard([Tag.RETALIATE, Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Break the Chains': new Skill('Break the Chains', 2, 53,
        halfCard([Tag.RANGED, Tag.AOE, Tag.PULL]), 
        halfCard([Tag.MOVE, Tag.CONSUME_FIRE, Tag.XP])),
    'Spiked Armor': new Skill('Spiked Armor', 3, 16,
        halfCard([Tag.RETALIATE, Tag.XP, Tag.SINGLE_ROUND_BUFF]), 
        halfCard([Tag.MOVE, Tag.MELEE, Tag.AOE])),
    'Fatal Fury': new Skill('Fatal Fury', 3, 34,
        halfCard([Tag.INSTA_KILL, Tag.GENERATE_FIRE, Tag.XP]), 
        halfCard([Tag.MELEE, Tag.MOVE])),
    'Flurry of Axes': new Skill('Flurry of Axes', 4, 27,
        halfCard([Tag.RANGED, Tag.AOE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE])),
    'Shiny Distraction': new Skill('Shiny Distraction', 4, 8,
        halfCard([Tag.LOOT, Tag.SHIELD, Tag.SINGLE_ROUND_BUFF]), 
        halfCard([Tag.GENERATE_FIRE, Tag.SINGLE_ROUND_BUFF])),
    'Seeing Red': new Skill('Seeing Red', 5, 22,
        halfCard([Tag.MELEE, Tag.SHIELD, Tag.XP]), 
        halfCard([Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Final Fight': new Skill('Final Fight', 5, 89,
        halfCard([Tag.INSTA_KILL, Tag.XP]), 
        halfCard([Tag.MOVE, Tag.CONSUME_FIRE])),
    'Devil Horns': new Skill('Devil Horns', 6, 31,
        halfCard([Tag.MELEE, Tag.AOE, Tag.WOUND, Tag.GENERATE_FIRE]), 
        halfCard([Tag.MELEE, Tag.XP])),
    'Unstoppable Destruction': new Skill('Unstoppable Destruction', 6, 57,
        halfCard([Tag.MELEE, Tag.XP]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Burning Hatred': new Skill('Burning Hatred', 7, 40,
        halfCard([Tag.MELEE, Tag.AOE, Tag.CONSUME_FIRE, Tag.RANGED]), 
        halfCard([Tag.MOVE, Tag.WOUND, Tag.AOE])),
    'Careless Charge': new Skill('Careless Charge', 7, 20,
        halfCard([Tag.MOVE, Tag.MELEE, Tag.PUSH, Tag.IMMOBILIZE]), 
        halfCard([Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Bone Breaker': new Skill('Bone Breaker', 8, 41,
        halfCard([Tag.MELEE, Tag.WOUND, Tag.IMMOBILIZE, Tag.GENERATE_FIRE]), 
        halfCard([Tag.RANGED])),
    'Vengeful Barrage': new Skill('Vengeful Barrage', 8, 38,
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.MELEE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.CONSUME_FIRE, Tag.SINGLE_ROUND_BUFF, Tag.XP])),
    'Immortality': new Skill('Immortality', 9, 33,
        halfCard([Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.SHIELD, Tag.CONSUME_FIRE, Tag.RETALIATE, Tag.SINGLE_ROUND_BUFF])),
    'The Maw of Madness': new Skill('The Maw of Madness', 9, 10,
        halfCard([Tag.MELEE, Tag.AOE, Tag.MUDDLE, Tag.HEAL]), 
        halfCard([Tag.RANGED, Tag.IMMOBILIZE]))
};

export default class Berserker extends Class {

    constructor() {
        super('Berserker', 10, HitpointsScaling.TANK, true, skills);
    }
}
