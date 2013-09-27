var Neosavvy = Neosavvy || {};

Neosavvy.Constants = angular.module('neosavvy.constants', []);
Neosavvy.Services = angular.module('neosavvy.services', []);
Neosavvy.Controllers = angular.module('neosavvy.controllers', []);
Neosavvy.Filters = angular.module('neosavvy.filters', []);
Neosavvy.Directives = angular.module('neosavvy.directives', []);


angular.module(
    'application',
    [
        'neosavvy.filters',
        'neosavvy.services',
        'neosavvy.directives',
        'neosavvy.constants',
        'neosavvy.controllers'
    ]
).
  config(
    [
        '$routeProvider',
        function($routeProvider) {


            $routeProvider.when('/index', {
                templateUrl: '/application/view/content/home-ptl.html'
    //            controller: HomeController,
    //            controllerAs: 'book'
            });
            $routeProvider.when('/grid', {
                templateUrl: '/application/view/content/grid-ptl.html'
    //            controller: ChapterCntl,
    //            controllerAs: 'chapter'
            });
            $routeProvider.when('/list', {
                templateUrl: '/application/view/content/list-ptl.html'
    //            controller: ChapterCntl,
    //            controllerAs: 'chapter'
            });

            $routeProvider.otherwise({templateUrl: '/application/view/content/home-ptl.html'});

            console.log("Starting this mofo");

        }
    ]
);
