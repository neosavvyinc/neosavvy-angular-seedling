describe("view.content.HomeController", function () {
    var $rootScope, $scope, controller;

    beforeEach(function() {
        module.apply(module, Neosavvy.Dependencies);

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("view.content.HomeController", {$scope: $scope});
        });
    });

    describe("ACTION HANDLERS", function () {
        describe("onImageClick", function () {
            it("Should increment the $scope.imageClicks value", function () {
                expect($scope.imageClicks).toEqual(0);
                controller.onImageClick();
                controller.onImageClick();
                expect($scope.imageClicks).toEqual(2);
            });
        });
    });

    describe("INITIALIZATION", function () {
        it("Should instantiate the $scope.imageClicks to 0", function () {
            expect($scope.imageClicks).toEqual(0);
        });
    });
});