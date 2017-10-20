<template>
    <div>
        <h2>Vegetables client</h2>

        <form @submit.prevent="submit">
            <label>
                Add vegetable:
                <input
                    v-model="vegetable"
                    type="text"
                />
            </label>
        </form>
        <span>Vegetable name: {{ vegetable }}</span>
    </div>
</template>

<script>
    import VegetablesModel from 'vegetables-model';

    let vegetablesModel = new VegetablesModel(fetch.bind(window));

    export default {
        data() {
            return {
                vegetable: ''
            }
        },
        methods: {
            submit() {
                vegetablesModel.addVegetable(this.vegetable);
            }
        }
    };
</script>