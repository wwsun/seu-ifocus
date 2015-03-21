angular.module('sampleApp', [
    'ui.router',
    'appRoutes',

    'chart.js',

    // --- DIRECTIVES ---
    'chart.pie',
    'chart.path',

    // --- SERVICES ---
    'AdminService',
    'GeekService',

    // --- CONTROLLERS ---
    'MainCtrl',
    'StatusCtrl',
    'AdminCtrl',
    'GeekCtrl'

]);