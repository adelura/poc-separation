import angular from 'angular';
import VegetablesModel from 'vegetables-model';
import Vegetable from 'vegetables-model/Vegetable';
import uiRouter from 'angular-ui-router';

let vegetablesModel = new VegetablesModel(fetch.bind(window));

angular
    .module('app', [
        uiRouter
    ])
    .directive("validators", function () {
        return {
            require: "ngModel",
            restrict: "A",
            scope: {
                validators: "="
            },
            link: function (scope, element, attrs, ngModel) {
                scope.$watch("validators", function (validators) {
                    Object.assign(ngModel.$validators, validators);
                });
            }
        };
    })
    .config(function ($stateProvider) {
        $stateProvider
            .state('root', {
                url: '',
                controllerAs: "$ctrl",
                controller: class {
                    constructor($scope) {
                        this.$scope = $scope;
                        this.isValidName = Vegetable.isValidName;
                        this.getInvalidNameMessage = Vegetable.getInvalidNameMessage;
                    }

                    submit($event) {
                        $event.preventDefault();

                        if (!this.isValidName(this.vegetable)) {
                            return;
                        }

                        vegetablesModel.addVegetable(this.vegetable).then(() => {
                            this.vegetable = "";
                            this.$scope.$digest();
                        });
                    }
                },
                template: `
                    <div>
                        <h2>Vegetables angular client</h2>
                
                        <form name="form" ng-submit="$ctrl.submit($event);">
                            <label>
                                Add vegetable:
                                <input
                                    name="name"
                                    validators="{ name: $ctrl.isValidName }"
                                    ng-model="$ctrl.vegetable"
                                    type="text"
                                />
                            </label>
                            
                            <p ng-if="form.name.$invalid">
                                {{ $ctrl.getInvalidNameMessage(form.name.$viewValue) }}
                            </p>
                        </form>
                    </div>
                `
            });
    })
.run(function () {

});