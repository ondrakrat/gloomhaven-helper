import Class from './Class';
import Skill from '../Skill';

export default class Mindthief extends Class {

    constructor() {
        const skills = {
            'Submissive Affliction': new Skill('Submissive Affliction', 1),
            'Into the Night': new Skill('Into the Night', 1),
            'Fearsome Blade': new Skill('Fearsome Blade', 1),
            'Feedback Loop': new Skill('Feedback Loop', 1),
            'Gnawing Horde': new Skill('Gnawing Horde', 1),
            'The Mind\'s Weakness': new Skill('The Mind\'s Weakness', 1),
            'Parasitic Influence': new Skill('Parasitic Influence', 1),
            'Scurry': new Skill('Scurry', 1),
            'Perverse Edge': new Skill('Perverse Edge', 1),
            'Empathetic Assault': new Skill('Empathetic Assault', 1),
            'Withering Claw': new Skill('Withering Claw', 0),
            'Possession': new Skill('Possession', 0),
            'Frigid Apparition': new Skill('Frigid Apparition', 0),
            'Wretched Creature': new Skill('Wretched Creature', 2),
            'Hostile Takeover': new Skill('Hostile Takeover', 2),
            'Brain Leech': new Skill('Brain Leech', 3),
            'Silent Scream': new Skill('Silent Scream', 3),
            'Pilfer': new Skill('Pilfer', 4),
            'Cranium Overload': new Skill('Cranium Overload', 4),
            'Mass Hysteria': new Skill('Mass Hysteria', 5),
            'Frozen Mind': new Skill('Frozen Mind', 5),
            'Corrupting Embrace': new Skill('Corrupting Embrace', 6),
            'Dark Frenzy': new Skill('Dark Frenzy', 6),
            'Vicious Blood': new Skill('Vicious Blood', 7),
            'Psychic Projection': new Skill('Psychic Projection', 7),
            'Shared Nightmare': new Skill('Shared Nightmare', 8),
            'Domination': new Skill('Domination', 8),
            'Many as One': new Skill('Many as One', 9),
            'Phantasmal Killer': new Skill('Phantasmal Killer', 9)
        };
        super('Mindthief', 10, skills);
    }
}
