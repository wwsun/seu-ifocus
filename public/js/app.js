angular.module('sampleApp', [
    'ui.router',
    'appRoutes',

    // --- DIRECTIVES ---
    'chart.pie',
    'chart.path',

    // --- SERVICES ---
    'AdminService',
    'GeekService',

    // --- CONTROLLERS ---
    'MainCtrl',
    'AdminCtrl',
    'GeekCtrl'

]);