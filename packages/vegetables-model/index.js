import Vegetable from "./Vegetable";

class VegetableModel {
    constructor(fetch) {
        this.fetch = fetch;
    }

    async getVegetables() {
        let fruits = await this.fetch("/vegetables");
    }

    async addVegetable(vegetable) {
        await this.fetch("/vegetables", { method: "POST", body: vegetable.toJSON() });
    }

    async removeVegetable(vegetable) {
        await this.fetch(`/vegetable/${vegetable.id}`, { method: "DELETE" });
    }
}