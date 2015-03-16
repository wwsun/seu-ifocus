angular.module('sampleApp', [
    'ui.router',
    'appRoutes',

    // --- DIRECTIVES ---
    'chart.pie',

    // --- SERVICES ---
    'AdminService',
    'GeekService',

    // --- CONTROLLERS ---
    'MainCtrl',
    'AdminCtrl',
    'GeekCtrl'

]);