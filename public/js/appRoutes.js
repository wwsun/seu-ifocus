angular.module('ifocus.appRoutes', [])

    // angular-ui-router configuration
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl as homeCtrl'
            })

            .state('status', {
                url: '/status',
                templateUrl: 'views/overview.html',
                controller: 'OverviewCtrl as overviewCtrl'
            })

            .state('sessionPath', {
                url: '/session/path',
                templateUrl: 'views/session/path.html',
                controller: 'SessionPathCtrl as sessionPathCtrl',
                resolve: {
                    graphDataPromise: ['sessionPathData', function (sessionPathData) {
                        return sessionPathData.getAll();
                    }]
                }
            });
    });