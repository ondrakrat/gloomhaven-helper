import Class from './Class';
import Skill from '../Skill';

const skills = {
    'Submissive Affliction': new Skill('Submissive Affliction', 1, 48),
    'Into the Night': new Skill('Into the Night', 1, 14),
    'Fearsome Blade': new Skill('Fearsome Blade', 1, 27),
    'Feedback Loop': new Skill('Feedback Loop', 1, 79),
    'Gnawing Horde': new Skill('Gnawing Horde', 1, 82),
    'The Mind\'s Weakness': new Skill('The Mind\'s Weakness', 1, 75),
    'Parasitic Influence': new Skill('Parasitic Influence', 1, 71),
    'Scurry': new Skill('Scurry', 1, 20),
    'Perverse Edge': new Skill('Perverse Edge', 1, 8),
    'Empathetic Assault': new Skill('Empathetic Assault', 1, 11),
    'Withering Claw': new Skill('Withering Claw', 0, 77),
    'Possession': new Skill('Possession', 0, 51),
    'Frigid Apparition': new Skill('Frigid Apparition', 0, 29),
    'Wretched Creature': new Skill('Wretched Creature', 2, 84),
    'Hostile Takeover': new Skill('Hostile Takeover', 2, 9),
    'Brain Leech': new Skill('Brain Leech', 3, 16),
    'Silent Scream': new Skill('Silent Scream', 3, 73),
    'Pilfer': new Skill('Pilfer', 4, 68),
    'Cranium Overload': new Skill('Cranium Overload', 4, 5),
    'Mass Hysteria': new Skill('Mass Hysteria', 5, 12),
    'Frozen Mind': new Skill('Frozen Mind', 5, 81),
    'Corrupting Embrace': new Skill('Corrupting Embrace', 6, 39),
    'Dark Frenzy': new Skill('Dark Frenzy', 6, 10),
    'Vicious Blood': new Skill('Vicious Blood', 7, 83),
    'Psychic Projection': new Skill('Psychic Projection', 7, 92),
    'Shared Nightmare': new Skill('Shared Nightmare', 8, 7),
    'Domination': new Skill('Domination', 8, 13),
    'Many as One': new Skill('Many as One', 9, 91),
    'Phantasmal Killer': new Skill('Phantasmal Killer', 9, 67)
};

export default class Mindthief extends Class {

    constructor() {
        super('Mindthief', 10, skills);
    }
}
