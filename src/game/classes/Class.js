export default class Class {
    
    constructor(name, maximumHandSize, hitpoints, unlockable, skills) {
        this.name = name;
        this.maximumHandSize = maximumHandSize;
        this.hitpoints = hitpoints;
        this.unlockable = unlockable;
        this.skills = skills;
    }
}

export const HitpointsScaling = Object.freeze({
    TANK: level => 8 + (level * 2),
    SQUISHY: level => 5 + level,
    MIDRANGE: level => {
        return {
            1: 8,
            2: 9,
            3: 11,
            4: 12,
            5: 14,
            6: 15,
            7: 17,
            8: 18,
            9: 20
        }[level]
    }
});
