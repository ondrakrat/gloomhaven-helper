export default class Skill {

    constructor(name, level, initiative) {
        this.name = name;
        this.level = level;
        this.initiative = initiative;
    }

    imageName() {
        return this.name
            .replace(/ /gi, '_')    // replace spaces by underscore
            .replace(/[^a-zA-Z0-9_]/gi, '')  // remove non-alphanumeric characters (and keep underscore)
            .toLowerCase();
    }
}
