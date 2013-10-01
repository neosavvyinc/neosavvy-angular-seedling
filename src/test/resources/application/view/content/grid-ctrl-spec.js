describe("view.content.GridController", function () {
    var $rootScope, $scope, controller;

    beforeEach(function () {
        module.apply(module, Neosavvy.Dependencies);

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("view.content.GridController", {$scope: $scope});
        });
    });

    describe("ACTION HANDLERS", function () {
        describe("onImageClick", function () {
            it("Should flip the switch from wherever it is", function () {
                expect($scope.switch).toBeFalsy();
                $scope.onImageClick();
                expect($scope.switch).toBeTruthy();
                $scope.onImageClick();
                expect($scope.switch).toBeFalsy();
            });
        });
    });

    describe("INITIALIZATION", function () {
        it("Should instantiate $scope.switch to false", function () {
            expect($scope.switch).toBeFalsy();
        });
    });
});