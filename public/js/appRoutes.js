angular.module('ifocus.appRoutes', [])

    // angular-ui-router configuration
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('status', {
                url: '/status',
                templateUrl: 'views/status.html',
                controller: 'StatusCtrl as statusCtrl'
            })

            .state('audienceGeo', {
                url: '/audience/geo',
                templateUrl: 'views/audience/geo.html',
                controller: 'AudienceGeoCtrl as audienceGeoCtrl'
            })

            .state('audienceSource', {
                url: '/audience/source',
                templateUrl: 'views/audience/source.html',
                controller: 'AudienceSourceCtrl as audienceSourceCtrl'
            })

            .state('audienceLanding', {
                url: '/audience/landing',
                templateUrl: 'views/audience/landing.html',
                controller: 'AudienceLandingCtrl as audienceLandingCtrl'
            })

            .state('audienceAge', {
                url: '/audience/age',
                templateUrl: 'views/audience/age.html',
                controller: 'AudienceAgeCtrl as audienceAgeCtrl'
            })
            
            .state('audienceFeature', {
                url: '/audience/feature',
                templateUrl: 'views/audience/feature.html',
                controller: 'AudienceFeatureCtrl as audienceFeatureCtrl'
            })

            .state('audienceEvent', {
                url: '/audience/event',
                templateUrl: 'views/audience/event.html',
                controller: 'AudienceEventCtrl as audienceEventCtrl'
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
            })

            .state('sessionReplay', {
                url: '/session/replay',
                templateUrl: 'views/session/single-replay.html',
                controller: 'SingleSessionReplayCtrl as replayCtrl'
            });
    });