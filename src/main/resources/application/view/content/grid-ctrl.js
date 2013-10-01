Neosavvy.Controllers.controller('view.content.GridController',
    ['$scope', '$rootScope', 'constants.Configuration',
        function ($scope, $rootScope, configuration) {

            $scope.switch = false;

            $scope.onImageClick = function() {
                $scope.switch = !$scope.switch;
            };

        }]);