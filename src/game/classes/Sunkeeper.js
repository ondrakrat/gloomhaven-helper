import Class from './Class';
import Skill from '../Skill';
import { Tag, halfCard } from '../Skill';

const skills = {
    'Purifying Aura': new Skill('Purifying Aura', 1, 21, 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.RETALIATE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.STRENGTHEN, Tag.CONSUME_LIGHT])),
    'Cautious Advance': new Skill('Cautious Advance', 1, 23, 
        halfCard([Tag.SHIELD, Tag.SINGLE_ROUND_BUFF, Tag.XP]), 
        halfCard([Tag.MOVE])),
    'Brilliant Prayer': new Skill('Brilliant Prayer', 1, 27, 
        halfCard([Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.HEAL, Tag.GENERATE_LIGHT, Tag.XP, Tag.DISCARD])),
    'Empowering Command': new Skill('Empowering Command', 1, 32, 
        halfCard([Tag.CONSUME_LIGHT, Tag.XP]), 
        halfCard([])),
    'Protective Blessing': new Skill('Protective Blessing', 1, 61, 
        halfCard([Tag.BLESS, Tag.STRENGTHEN]), 
        halfCard([Tag.GENERATE_LIGHT, Tag.XP, Tag.DISCARD])),
    'Dazzling Charge': new Skill('Dazzling Charge', 1, 57, 
        halfCard([Tag.HEAL, Tag.GENERATE_LIGHT]), 
        halfCard([Tag.MOVE, Tag.STUN, Tag.GENERATE_LIGHT, Tag.XP, Tag.DISCARD])),
    'Tactical Order': new Skill('Tactical Order', 1, 29, 
        halfCard([]), 
        halfCard([Tag.MOVE])),
    'Holy Strike': new Skill('Holy Strike', 1, 85, 
        halfCard([Tag.MELEE, Tag.STUN]), 
        halfCard([Tag.RANGED, Tag.GENERATE_LIGHT, Tag.XP, Tag.DISCARD])),
    'Hammer Blow': new Skill('Hammer Blow', 1, 55, 
        halfCard([Tag.MELEE, Tag.CONSUME_LIGHT, Tag.XP]), 
        halfCard([Tag.MOVE])),
    'Defensive Stance': new Skill('Defensive Stance', 1, 65, 
        halfCard([Tag.MELEE, Tag.CONSUME_LIGHT, Tag.XP]), 
        halfCard([Tag.SHIELD, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Lay on Hands': new Skill('Lay on Hands', 1, 90, 
        halfCard([Tag.HEAL, Tag.GENERATE_LIGHT, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.LOOT])),
    'Daybreak': new Skill('Daybreak', 0, 85, 
        halfCard([Tag.MELEE, Tag.MUDDLE, Tag.CONSUME_DARK, Tag.GENERATE_LIGHT, Tag.XP]), 
        halfCard([Tag.MOVE, Tag.BLESS])),
    'Beacon of Light': new Skill('Beacon of Light', 0, 36, 
        halfCard([Tag.HEAL]), 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.GENERATE_LIGHT, Tag.XP, Tag.DISCARD])),
    'Glorious Bolt': new Skill('Glorious Bolt', 0, 39, 
        halfCard([Tag.HEAL, Tag.CONSUME_LIGHT, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.RANGED, Tag.MUDDLE])),
    'Practical Plans': new Skill('Practical Plans', 2, 56, 
        halfCard([Tag.MELEE]), 
        halfCard([Tag.MOVE])),
    'Unwavering Mandate': new Skill('Unwavering Mandate', 2, 72, 
        halfCard([Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.HEAL, Tag.CONSUME_LIGHT, Tag.XP])),
    'Burning Flash': new Skill('Burning Flash', 3, 51, 
        halfCard([Tag.MELEE, Tag.XP, Tag.GENERATE_LIGHT, Tag.DISCARD]), 
        halfCard([Tag.HEAL, Tag.CONSUME_AIR, Tag.CONSUME_DARK, Tag.CONSUME_EARTH, Tag.CONSUME_FIRE, Tag.CONSUME_ICE, Tag.CONSUME_LIGHT, Tag.GENERATE_LIGHT])),
    'Mobilizing Axiom': new Skill('Mobilizing Axiom', 3, 23, 
        halfCard([Tag.MELEE, Tag.GENERATE_LIGHT]), 
        halfCard([Tag.XP, Tag.DISCARD])),
    'Righteous Strength': new Skill('Righteous Strength', 4, 18, 
        halfCard([Tag.BLESS, Tag.XP]), 
        halfCard([Tag.MOVE, Tag.SHIELD, Tag.SINGLE_ROUND_BUFF])),
    'Engulfing Radiance': new Skill('Engulfing Radiance', 4, 20, 
        halfCard([Tag.HEAL, Tag.GENERATE_LIGHT, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.GENERATE_LIGHT, Tag.SINGLE_ROUND_BUFF])),
    'Path of Glory': new Skill('Path of Glory', 5, 48, 
        halfCard([Tag.MELEE, Tag.CONSUME_LIGHT, Tag.XP]), 
        halfCard([Tag.MOVE, Tag.BLESS, Tag.XP, Tag.DISCARD])),
    'Scales of Justice': new Skill('Scales of Justice', 5, 68, 
        halfCard([Tag.RETALIATE, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.CONSUME_LIGHT, Tag.XP, Tag.STUN])),
    'Supportive Chant': new Skill('Supportive Chant', 6, 11, 
        halfCard([Tag.XP, Tag.SINGLE_ROUND_BUFF]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Illuminate the Target': new Skill('Illuminate the Target', 6, 91, 
        halfCard([Tag.MELEE, Tag.STRENGTHEN, Tag.XP]), 
        halfCard([])),
    'Weapon of Purity': new Skill('Weapon of Purity', 7, 73, 
        halfCard([Tag.CONSUME_LIGHT, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.MELEE])),
    'Bright Aegis': new Skill('Bright Aegis', 7, 14, 
        halfCard([Tag.SHIELD, Tag.RETALIATE, Tag.GENERATE_LIGHT, Tag.SINGLE_ROUND_BUFF]), 
        halfCard([Tag.CONSUME_LIGHT, Tag.XP, Tag.DISCARD])),
    'Cleansing Force': new Skill('Cleansing Force', 8, 25, 
        halfCard([Tag.MELEE, Tag.STUN, Tag.WOUND, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.GENERATE_LIGHT])),
    'Inspiring Sanctity': new Skill('Inspiring Sanctity', 8, 79, 
        halfCard([Tag.CONSUME_LIGHT, Tag.XP, Tag.INSTA_KILL, Tag.DISCARD]), 
        halfCard([Tag.XP, Tag.DISCARD])),
    'Angelic Ascension': new Skill('Angelic Ascension', 9, 87, 
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.WOUND, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.JUMP])),
    'Divine Intervention': new Skill('Divine Intervention', 9, 9, 
        halfCard([Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.SHIELD, Tag.GENERATE_LIGHT, Tag.SINGLE_ROUND_BUFF])),
};

export default class Sunkeeper extends Class {

    constructor() {
        super('Sunkeeper', 11, skills);
    }
}
