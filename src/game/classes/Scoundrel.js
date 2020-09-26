import Class from './Class';
import Skill from '../Skill';

export default class Scoundrel extends Class {

    constructor() {
        const skills = {
            'Single Out': new Skill('Single Out', 1),
            'Flanking Strike': new Skill('Flanking Strike', 1),
            'Smoke Bomb': new Skill('Smoke Bomb', 1),
            'Backstab': new Skill('Backstab', 1),
            'Thief\'s Knack': new Skill('Thief\'s Knack', 1),
            'Venom Shiv': new Skill('Venom Shiv', 1),
            'Throwing Knives': new Skill('Throwing Knives', 1),
            'Quick Hands': new Skill('Quick Hands', 1),
            'Special Mixture': new Skill('Special Mixture', 1),
            'Sinister Opportunity': new Skill('Sinister Opportunity', 0),
            'Trickster\'s Reversal': new Skill('Trickster\'s Reversal', 0),
            'Swift Bow': new Skill('Swift Bow', 0),
            'Open Wound': new Skill('Open Wound', 2),
            'Flintlock': new Skill('Flintlock', 2),
            'Hidden Daggers': new Skill('Hidden Daggers', 3),
            'Duelist\'s Advance': new Skill('Duelist\'s Advance', 3),
            'Flurry of Blades': new Skill('Flurry of Blades', 4),
            'Gruesome Advantage': new Skill('Gruesome Advantage', 4),
            'Cull the Weak': new Skill('Cull the Weak', 5),
            'Visage of the Inevitable': new Skill('Visage of the Inevitable', 5),
            'Crippling Poison': new Skill('Crippling Poison', 6),
            'Burning Oil': new Skill('Burning Oil', 6),
            'Stick to the Shadows': new Skill('Stick to the Shadows', 7),
            'Spring the Trap': new Skill('Spring the Trap', 7),
            'Stiletto Storm': new Skill('Stiletto Storm', 8),
            'Pain\'s End': new Skill('Pain\'s End', 8),
            'Long Con': new Skill('Long Con', 9),
            'Watch it Burn': new Skill('Watch it Burn', 9)
        };
        super('Scoundrel', 9, skills);
    }
}
