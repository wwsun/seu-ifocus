angular.module('appRoutes', []).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'MainController as mainCtrl'
        })

        .state('status',{
            url: '/status',
            templateUrl: 'views/status.html',
            controller: 'StatusController as statusCtrl'
        })

        .state('admin', {
            url: '/admin',
            templateUrl: 'views/admin.html',
            controller: 'AdminController as adminCtrl',
            resolve: {
                graphDataPromise: ['graphData', function(graphData) {
                    return graphData.getAll();
                }]
            }
        })

        .state('geeks', {
            url: '/geeks',
            templateUrl: 'views/geek.html',
            controller: 'GeekController as geekCtrl'
        });
});