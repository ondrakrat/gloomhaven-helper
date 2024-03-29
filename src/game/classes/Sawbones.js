import Class, { HitpointsScaling } from './Class';
import Skill from '../Skill';
import { Tag, halfCard } from '../Skill';

const skills = {
    'First Aid': new Skill('First Aid', 1, 8,
        halfCard([Tag.XP]), 
        halfCard([Tag.MOVE])),
    'Hand of the Surgeon': new Skill('Hand of the Surgeon', 1, 62,
        halfCard([Tag.MELEE, Tag.XP]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Hold Back the Pain': new Skill('Hold Back the Pain', 1, 57,
        halfCard([Tag.HEAL, Tag.XP]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Booster Shot': new Skill('Booster Shot', 1, 42,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.SHIELD, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Bloody Saw': new Skill('Bloody Saw', 1, 25,
        halfCard([Tag.MELEE, Tag.WOUND, Tag.XP]), 
        halfCard([Tag.LOOT])),
    'Curative Mixture': new Skill('Curative Mixture', 1, 19,
        halfCard([Tag.HEAL, Tag.XP]), 
        halfCard([Tag.MOVE])),
    'Syringe': new Skill('Syringe', 1, 15,
        halfCard([Tag.SHIELD, Tag.SINGLE_ROUND_BUFF]), 
        halfCard([Tag.MELEE, Tag.POISON, Tag.STUN])),
    'Battlefield Medicine': new Skill('Battlefield Medicine', 1, 83,
        halfCard([Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Triage': new Skill('Triage', 1, 53,
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.HEAL, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE])),
    'Medical Pack 1': new Skill('Medical Pack 1', 0, 50,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Medical Pack 2': new Skill('Medical Pack 2', 0, 50,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Medical Pack 3': new Skill('Medical Pack 3', 0, 50,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Medical Pack 4': new Skill('Medical Pack 4', 0, 50,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Medical Pack 5': new Skill('Medical Pack 5', 0, 50,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Medical Pack 6': new Skill('Medical Pack 6', 0, 50,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Medical Pack 7': new Skill('Medical Pack 7', 0, 50,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Medical Pack 8': new Skill('Medical Pack 8', 0, 50,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Large Medical Pack 1': new Skill('Large Medical Pack 1', 0, 30,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Large Medical Pack 2': new Skill('Large Medical Pack 2', 0, 30,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Large Medical Pack 3': new Skill('Large Medical Pack 3', 0, 30,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Large Medical Pack 4': new Skill('Large Medical Pack 4', 0, 30,
        halfCard([Tag.HEAL]), 
        halfCard([Tag.HEAL])),
    'Prevention is Key': new Skill('Prevention is Key', 0, 13,
        halfCard([Tag.DISARM, Tag.AOE]), 
        halfCard([Tag.SHIELD, Tag.XP, Tag.SINGLE_ROUND_BUFF, Tag.AOE])),
    'Teamwork': new Skill('Teamwork', 0, 89,
        halfCard([Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE])),
    'Vaccine': new Skill('Vaccine', 0, 44,
        halfCard([Tag.RANGED, Tag.AOE, Tag.POISON, Tag.XP]), 
        halfCard([Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Hamstring': new Skill('Hamstring', 2, 62,
        halfCard([Tag.MELEE, Tag.IMMOBILIZE, Tag.XP]), 
        halfCard([Tag.MOVE, Tag.IMMOBILIZE])),
    'Precaution': new Skill('Precaution', 2, 9,
        halfCard([Tag.SHIELD, Tag.SINGLE_ROUND_BUFF]), 
        halfCard([Tag.XP])),
    'Regenerative Tissue': new Skill('Regenerative Tissue', 3, 46,
        halfCard([Tag.HEAL, Tag.XP]), 
        halfCard([Tag.HEAL, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Vital Strike': new Skill('Vital Strike', 3, 38,
        halfCard([Tag.MELEE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE])),
    'Blood Transfusion': new Skill('Blood Transfusion', 4, 52,
        halfCard([Tag.HEAL, Tag.XP]), 
        halfCard([Tag.MELEE, Tag.HEAL, Tag.AOE])),
    'Do No Harm': new Skill('Do No Harm', 4, 76,
        halfCard([Tag.INSTA_KILL, Tag.DISARM, Tag.IMMOBILIZE, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.HEAL])),
    'Research the Cure': new Skill('Research the Cure', 5, 40,
        halfCard([Tag.MELEE]), 
        halfCard([Tag.SHIELD, Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD])),
    'Amputate': new Skill('Amputate', 5, 86,
        halfCard([Tag.MELEE, Tag.WOUND, Tag.IMMOBILIZE, Tag.XP]), 
        halfCard([Tag.HEAL, Tag.STUN])),
    'Euthanize': new Skill('Euthanize', 6, 27,
        halfCard([Tag.INSTA_KILL, Tag.XP]), 
        halfCard([Tag.MELEE, Tag.POISON, Tag.WOUND, Tag.STUN])),
    'Prescription': new Skill('Prescription', 6, 6,
        halfCard([Tag.XP]), 
        halfCard([Tag.XP, Tag.DISCARD])),
    'Master Physician': new Skill('Master Physician', 7, 49,
        halfCard([Tag.MULTI_ROUND_BUFF, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.SINGLE_ROUND_BUFF])),
    'Surgeon\'s Satchel': new Skill('Surgeon\'s Satchel', 7, 10,
        halfCard([Tag.LOOT, Tag.HEAL, Tag.AOE]), 
        halfCard([Tag.MOVE, Tag.XP])),
    'Bedside Manner': new Skill('Bedside Manner', 8, 5,
        halfCard([Tag.HEAL, Tag.XP, Tag.DISCARD]), 
        halfCard([Tag.MOVE])),
    'Gentleman\'s Anger': new Skill('Gentleman\'s Anger', 8, 29,
        halfCard([Tag.MELEE, Tag.DISARM, Tag.XP]), 
        halfCard([Tag.RANGED, Tag.XP])),
    'Prep for Surgery': new Skill('Prep for Surgery', 9, 22,
        halfCard([Tag.XP, Tag.MULTI_ROUND_BUFF, Tag.DISCARD]), 
        halfCard([Tag.MOVE, Tag.STUN])),
    'Grisly Trauma': new Skill('Grisly Trauma', 9, 81,
        halfCard([Tag.INSTA_KILL, Tag.AOE, Tag.XP]), 
        halfCard([Tag.MOVE, Tag.POISON, Tag.WOUND, Tag.MUDDLE, Tag.AOE]))
};

export default class Sawbones extends Class {

    constructor() {
        super('Sawbones', 10, HitpointsScaling.MIDRANGE, true, skills);
    }
}
