<template>
    <div>
        <h2>Vegetables Vue client</h2>

        <form @submit.prevent="submit">
            <label>
                Add vegetable:
                <input
                    v-model="vegetable"
                    type="text"
                />
            </label>

            <p v-if="!isValidName(vegetable)">
                {{ getInvalidNameMessage(vegetable) }}
            </p>
        </form>
        <span>Vegetable name: {{ vegetable }}</span>
    </div>
</template>

<script>
    import VegetablesModel from 'vegetables-model';
    import Vegetable from 'vegetables-model/Vegetable';

    let vegetablesModel = new VegetablesModel(fetch.bind(window));

    export default {
        data() {
            return {
                vegetable: ''
            }
        },
        methods: {
            async submit() {
                if (!this.isValidName(this.vegetable)) {
                    return;
                }

                await vegetablesModel.addVegetable(this.vegetable);
                this.vegetable = '';
                return false;
            },
            isValidName: Vegetable.isValidName,
            getInvalidNameMessage: Vegetable.getInvalidNameMessage
        }
    };
</script>