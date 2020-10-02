import Class from './Class';
import Skill from '../Skill';

export default class Scoundrel extends Class {

    constructor() {
        const skills = {
            'Single Out': new Skill('Single Out', 1, 86),
            'Flanking Strike': new Skill('Flanking Strike', 1, 4),
            'Smoke Bomb': new Skill('Smoke Bomb', 1, 12),
            'Backstab': new Skill('Backstab', 1, 6),
            'Thief\'s Knack': new Skill('Thief\'s Knack', 1, 23),
            'Venom Shiv': new Skill('Venom Shiv', 1, 60),
            'Throwing Knives': new Skill('Throwing Knives', 1, 10),
            'Quick Hands': new Skill('Quick Hands', 1, 64),
            'Special Mixture': new Skill('Special Mixture', 1, 33),
            'Sinister Opportunity': new Skill('Sinister Opportunity', 0, 93),
            'Trickster\'s Reversal': new Skill('Trickster\'s Reversal', 0, 9),
            'Swift Bow': new Skill('Swift Bow', 0, 36),
            'Open Wound': new Skill('Open Wound', 2, 11),
            'Flintlock': new Skill('Flintlock', 2, 90),
            'Hidden Daggers': new Skill('Hidden Daggers', 3, 85),
            'Duelist\'s Advance': new Skill('Duelist\'s Advance', 3, 16),
            'Flurry of Blades': new Skill('Flurry of Blades', 4, 3),
            'Gruesome Advantage': new Skill('Gruesome Advantage', 4, 62),
            'Cull the Weak': new Skill('Cull the Weak', 5, 16),
            'Visage of the Inevitable': new Skill('Visage of the Inevitable', 5, 88),
            'Crippling Poison': new Skill('Crippling Poison', 6, 30),
            'Burning Oil': new Skill('Burning Oil', 6, 95),
            'Stick to the Shadows': new Skill('Stick to the Shadows', 7, 26),
            'Spring the Trap': new Skill('Spring the Trap', 7, 13),
            'Stiletto Storm': new Skill('Stiletto Storm', 8, 80),
            'Pain\'s End': new Skill('Pain\'s End', 8, 38),
            'Long Con': new Skill('Long Con', 9, 2),
            'Watch it Burn': new Skill('Watch it Burn', 9, 98)
        };
        super('Scoundrel', 9, skills);
    }
}
