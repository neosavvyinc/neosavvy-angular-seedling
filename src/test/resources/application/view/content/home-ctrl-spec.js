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

    describe("someMethod", function () {
        it("Should do something", function () {
            expect(true).toBeTruthy();
        });
    });
});