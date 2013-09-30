Neosavvy.Controllers.controller('view.content.HomeController',
    ['$scope', '$rootScope', 'constants.Configuration',
        function ($scope, $rootScope, configuration) {

            $scope.imageClicks = 0;

            this.onImageClick = function () {
                $scope.imageClicks++;
            };

        }]);