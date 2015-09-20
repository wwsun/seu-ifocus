angular.module('ifocus.appRoutes', [])

  // angular-ui-router configuration
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/status');

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

      .state('audienceForm', {
        url: '/audience/form',
        templateUrl: 'views/audience/form.html',
        controller: 'AudienceFormCtrl as audienceFormCtrl'
        //controller: 'AudienceEventCtrl as audienceEventCtrl'
      })

      .state('trafficSource', {
        url: '/traffic/source',
        templateUrl: 'views/traffic/source.html',
        controller: 'TrafficSourceCtrl as trafficSourceCtrl'
      })

      .state('trafficPath', {
        url: '/traffic/path',
        templateUrl: 'views/traffic/path.html',
        controller: 'TrafficPathCtrl as trafficPathCtrl',
        resolve: {
          graphDataPromise: ['sessionPathData', function (sessionPathData) {
            return sessionPathData.getAll();
          }]
        }
      })

      .state('trafficSemanticPath', {
        url: '/traffic/path/semantic',
        templateUrl: 'views/traffic/semantic-path.html',
        controller: 'TrafficSemanticPathCtrl as trafficSemanticPathCtrl'
      })

      .state('trafficBounce', {
        url: '/traffic/bounce',
        templateUrl: 'views/traffic/bounce.html',
        controller: 'TrafficBounceCtrl as trafficBounceCtrl'
      })

      .state('trafficConversion', {
        url: '/traffic/conversion',
        templateUrl: 'views/traffic/conversion.html',
        controller: 'TrafficConversionCtrl as trafficConversionCtrl'
      })

      .state('trafficFunnel', {
        url: '/traffic/funnel',
        templateUrl: 'views/traffic/funnel.html',
        controller: 'TrafficFunnelCtrl as trafficFunnelCtrl'
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
        templateUrl: 'views/session/replay.html',
        controller: 'SessionReplayCtrl as replayCtrl'
      })

      .state('flowJumping', {
        url: '/jump/flow',
        templateUrl: 'views/jump/flow-jump.html',
        controller: 'FlowJumpCtrl as flowJumpCtrl'
      });

    // .state('sessionReplay', {
    //     url: '/session/replay',
    //     templateUrl: 'views/session/single-replay.html',
    //     controller: 'SingleSessionReplayCtrl as replayCtrl'
    // });
  });