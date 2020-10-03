export default class Skill {

    constructor(name, level, initiative, top, bottom) {
        this.name = name;
        this.level = level;
        this.initiative = initiative;
        this.top = top;
        this.bottom = bottom;
    }

    imageName() {
        return this.name
            .replace(/ /gi, '_')    // replace spaces by underscore
            .replace(/[^a-zA-Z0-9_]/gi, '')  // remove non-alphanumeric characters (and keep underscore)
            .toLowerCase();
    }
}

export const Tag = Object.freeze({
    MELEE: 'Melee',
    RANGED: 'Ranged',
    AOE: 'AoE',
    MOVE: 'Move',
    JUMP: 'Jump',
    LOOT: 'Loot',
    GENERATE_FIRE: 'Generate fire element',
    GENERATE_ICE: 'Generate ice element',
    GENERATE_AIR: 'Generate air element',
    GENERATE_EARTH: 'Generate earth element',
    GENERATE_LIGHT: 'Generate light element',
    GENERATE_DARK: 'Generate dark element',
    CONSUME_FIRE: 'Consume fire element',
    CONSUME_ICE: 'Consume ice element',
    CONSUME_AIR: 'Consume air element',
    CONSUME_EARTH: 'Consume earth element',
    CONSUME_LIGHT: 'Consume light element',
    CONSUME_DARK: 'Consume dark element',
    HEAL: 'Heal',
    XP: 'XP',
    SINGLE_ROUND_BUFF: 'Single round buff',
    MULTI_ROUND_BUFF: 'Multi round buff',
    PUSH: 'Push',
    PULL: 'Pull',
    PIERCE: 'Pierce',
    POISON: 'Poison',
    WOUND: 'Wound',
    IMMOBILIZE: 'Immobilize',
    DISARM: 'Disarm',
    STUN: 'Stun',
    MUDDLE: 'Muddle',
    SHIELD: 'Shield',
    DISCARD: 'Discard',
    RETALIATE: 'Retaliate',
    INSTA_KILL: 'Instant kill'
});
