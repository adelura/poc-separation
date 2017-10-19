class Vegetable {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    toJSON() {
        return JSON.stringify(this);
    }
}

export default Vegetable;