let Vegetable = require("./Vegetable");
const baseHref = "http://127.0.0.1:3000";

class VegetableModel {
    constructor(fetch) {
        this.fetch = fetch;
    }

    getVegetables() {
        return this.fetch(`${baseHref}/vegetables`);
    }

    addVegetable(name) {
        let config = {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(new Vegetable(name))
        };

        return this.fetch(`${baseHref}/vegetables`, config);
    }

    removeVegetable(id) {
        return this.fetch(`${baseHref}/vegetables/${id}`, { method: "DELETE" });
    }
}

module.exports = VegetableModel;