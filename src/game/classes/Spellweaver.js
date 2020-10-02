import Class from './Class';
import Skill from '../Skill';

export default class Spellweaver extends Class {

    constructor() {
        const skills = {
            'Fire Orbs': new Skill('Fire Orbs', 1, 69),
            'Impaling Eruption': new Skill('Impaling Eruption', 1, 70),
            'Reviving Ether': new Skill('Reviving Ether', 1, 80),
            'Freezing Nova': new Skill('Freezing Nova', 1, 21),
            'Mana Bolt': new Skill('Mana Bolt', 1, 7),
            'Frost Armor': new Skill('Frost Armor', 1, 20),
            'Flame Strike': new Skill('Flame Strike', 1, 36),
            'Ride the Wind': new Skill('Ride the Wind', 1, 83),
            'Crackling Air': new Skill('Crackling Air', 0, 25),
            'Hardened Spikes': new Skill('Hardened Spikes', 0, 26),
            'Aid from the Ether': new Skill('Aid from the Ether', 0, 91),
            'Flashing Burst': new Skill('Flashing Burst', 2, 26),
            'Icy Blast': new Skill('Icy Blast', 2, 66),
            'Cold Fire': new Skill('Cold Fire', 3, 67),
            'Elemental Aid': new Skill('Elemental Aid', 3, 84),
            'Spirit of Doom': new Skill('Spirit of Doom', 4, 81),
            'Forked Beam': new Skill('Forked Beam', 4, 20),
            'Chromatic Explosion': new Skill('Chromatic Explosion', 5, 71),
            'Engulfed in Flames': new Skill('Engulfed in Flames', 5, 44),
            'Living Torch': new Skill('Living Torch', 6, 96),
            'Frozen Night': new Skill('Frozen Night', 6, 46),
            'Twin Restoration': new Skill('Twin Restoration', 7, 75),
            'Stone Fists': new Skill('Stone Fists', 7, 62),
            'Zephyr Wings': new Skill('Zephyr Wings', 8, 85),
            'Cold Front': new Skill('Cold Front', 8, 61),
            'Black Hole': new Skill('Black Hole', 9, 41),
            'Inferno': new Skill('Inferno', 9, 19)
        };
        super('Spellweaver', 8, skills);
    }
}
