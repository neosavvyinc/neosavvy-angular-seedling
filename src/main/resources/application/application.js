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
            templateUrl: 'view/content/home-ptl.html',
            controller: HomeController,
            controllerAs: 'book'
        });
        $routeProvider.when('/Book/:bookId/ch/:chapterId', {
            templateUrl: 'chapter.html',
            controller: ChapterCntl,
            controllerAs: 'chapter'
        });

        $routeProvider.
            otherwise({templateUrl: 'application/view/content/content.html'});
        }
    ]
);
