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
            //views: {
            //    '': {
            //        templateUrl: 'views/status.html',
            //        controller: 'StatusController as StatusCtrl'
            //    },
            //    'top20@status': {
            //        templateUrl: ''
            //    }
            //}
        })

        //.state('status.day', {
        //    url: '/day',
        //    templateUrl: 'views/status-day.html',
        //    controller: 'StatusDayController as statusDayCtrl'
        //})

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