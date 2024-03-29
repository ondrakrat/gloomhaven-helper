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
            .replace(/[\s-]/gi, '_')    // replace spaces by underscore
            .replace(/[^a-zA-Z0-9_-]/gi, '')  // remove non-alphanumeric characters (and keep underscore)
            .toLowerCase();
    }
}

export const halfCard = (tags) => ({
    tags: tags
});

export const Tag = Object.freeze({
    MELEE: 'Melee attack',
    RANGED: 'Ranged attack',
    AOE: 'AoE',
    MOVE: 'Move',
    JUMP: 'Jump',
    FLYING: 'Flying',
    LOOT: 'Loot',
    GENERATE_FIRE: 'Generate Fire element',
    GENERATE_ICE: 'Generate Ice element',
    GENERATE_AIR: 'Generate Air element',
    GENERATE_EARTH: 'Generate Earth element',
    GENERATE_LIGHT: 'Generate Light element',
    GENERATE_DARK: 'Generate Dark element',
    CONSUME_FIRE: 'Consume Fire element',
    CONSUME_ICE: 'Consume Ice element',
    CONSUME_AIR: 'Consume Air element',
    CONSUME_EARTH: 'Consume Earth element',
    CONSUME_LIGHT: 'Consume Light element',
    CONSUME_DARK: 'Consume Dark element',
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
    CURSE: 'Curse',
    BLESS: 'Bless',
    STRENGTHEN: 'Strengthen',
    SHIELD: 'Shield',
    INVISIBLE: 'Invisible',
    DISCARD: 'Discard',
    RETALIATE: 'Retaliate',
    INSTA_KILL: 'Instant kill',
    SUMMON: 'Summon',

    // helpers
    get CONSUME_ANY() {
        return [this.CONSUME_AIR, this.CONSUME_EARTH, this.CONSUME_FIRE, this.CONSUME_ICE, this.CONSUME_LIGHT, this.CONSUME_DARK];
    },
    get GENERATE_ANY() {
        return [this.GENERATE_AIR, this.GENERATE_EARTH, this.GENERATE_FIRE, this.GENERATE_ICE, this.GENERATE_LIGHT, this.GENERATE_DARK];
    }
});
