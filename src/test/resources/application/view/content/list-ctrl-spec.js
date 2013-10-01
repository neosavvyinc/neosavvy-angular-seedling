describe("view.content.ListController", function () {
    var $rootScope, $scope, controller;

    beforeEach(function () {
        module.apply(module, Neosavvy.Dependencies);

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("view.content.ListController", {$scope: $scope});
        });
    });

    describe("INITIALIZATION", function () {
        it("Should instantiate a sayings collection on the controller with three items", function () {
            expect(controller.sayingsList.length).toEqual(3);
        });

        var nameFoundAndSayingDefined = function(name) {
            for (var i = 0; i < controller.sayingsList.length; i++) {
                var item = controller.sayingsList[i];
                if (item.name === name) {
                    return !_.isEmpty(item.saying);
                }
            }
            return false;
        };

        it("Should instantiate with a saying from Ronnie James Dio", function () {
            expect(nameFoundAndSayingDefined("Ronnie James Dio")).toBeTruthy();
        });

        it("Should instantiate with a saying from Lemmy Kilmister", function () {
            expect(nameFoundAndSayingDefined("Lemmy Kilmister")).toBeTruthy();
        });

        it("Should instantiate with a saying from Bruce Dickinson", function () {
            expect(nameFoundAndSayingDefined("Bruce Dickinson")).toBeTruthy();
        });
    });
});