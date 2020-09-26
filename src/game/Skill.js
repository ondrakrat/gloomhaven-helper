export default class Skill {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    imageName() {
        return this.name
            .replace(/ /gi, '_')    // replace spaces by underscore
            .replace(/[^a-zA-Z0-9_]/gi, '')  // remove non-alphanumeric characters (and keep underscore)
            .toLowerCase();
    }
}
