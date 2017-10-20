class Vegetable {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    static isValidName(name) {
        return name.length > 4 && name.length < 8;
    }

    static getInvalidNameMessage(value) {
        return `Name "${value}" is invalid, it should be longer than 4 and shorter than 8 characters`;
    }
}

module.exports = Vegetable;