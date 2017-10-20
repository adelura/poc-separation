import angular from 'angular';
import VegetablesModel from 'vegetables-model';
import uiRouter from 'angular-ui-router';

let vegetablesModel = new VegetablesModel(fetch.bind(window));

angular
    .module('app', [
        uiRouter
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state('root', {
                url: '',
                controllerAs: "$ctrl",
                controller: class {
                    submit() {
                        debugger;
                        vegetablesModel.addVegetable(this.vegetable);
                        this.vegetable = "";
                        return false;
                    }
                },
                template: `
                    <div>
                        <h2>Vegetables angular client</h2>
                
                        <form ng-submit="$ctrl.submit();">
                            <label>
                                Add vegetable:
                                <input
                                    ng-model="$ctrl.vegetable"
                                    type="text"
                                />
                            </label>
                        </form>
                        <span>Vegetable name: {{ $ctrl.vegetable }}</span>
                    </div>
                `
            });
    })
.run(function () {

});