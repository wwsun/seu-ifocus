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

        .state('sessionPath', {
            url: '/session/path',
            templateUrl: 'views/session/path.html',
            controller: 'SessionPathController as sessionPathCtrl',
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