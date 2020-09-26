import Class from './Class';
import Skill from '../Skill';

export default class Spellweaver extends Class {

    constructor() {
        const skills = {
            'Fire Orbs': new Skill('Fire Orbs', 1),
            'Impaling Eruption': new Skill('Impaling Eruption', 1),
            'Reviving Ether': new Skill('Reviving Ether', 1),
            'Freezing Nova': new Skill('Freezing Nova', 1),
            'Mana Bolt': new Skill('Mana Bolt', 1),
            'Frost Armor': new Skill('Frost Armor', 1),
            'Flame Strike': new Skill('Flame Strike', 1),
            'Ride the Wind': new Skill('Ride the Wind', 1),
            'Crackling Air': new Skill('Crackling Air', 0),
            'Hardened Spikes': new Skill('Hardened Spikes', 0),
            'Aid from the Ether': new Skill('Aid from the Ether', 0),
            'Flashing Burst': new Skill('Flashing Burst', 2),
            'Icy Blast': new Skill('Icy Blast', 2),
            'Cold Fire': new Skill('Cold Fire', 3),
            'Elemental Aid': new Skill('Elemental Aid', 3),
            'Spirit of Doom': new Skill('Spirit of Doom', 4),
            'Forked Beam': new Skill('Forked Beam', 4),
            'Chromatic Explosion': new Skill('Chromatic Explosion', 5),
            'Engulfed in Flames': new Skill('Engulfed in Flames', 5),
            'Living Torch': new Skill('Living Torch', 6),
            'Frozen Night': new Skill('Frozen Night', 6),
            'Twin Restoration': new Skill('Twin Restoration', 7),
            'Stone Fists': new Skill('Stone Fists', 7),
            'Zephyr Wings': new Skill('Zephyr Wings', 8),
            'Cold Front': new Skill('Cold Front', 8),
            'Black Hole': new Skill('Black Hole', 9),
            'Inferno': new Skill('Inferno', 9)
        };
        super('Spellweaver', 8, skills);
    }
}
