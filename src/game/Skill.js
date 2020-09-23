export default class Skill {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    imageName() {
        return this.name.replace(/ /gi, '_').toLowerCase();
    }
}
