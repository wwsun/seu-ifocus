angular.module('ifocus', [

    // --- 3rd Dependencies ---
    'ui.router',
    'chart.js',

    // --- ROUTERS ---
    'ifocus.appRoutes',

    // --- DIRECTIVES ---
    'ifocus.visualDirectives',

    // --- SERVICES ---
    'ifocus.sessionServices',

    // --- CONTROLLERS ---
    'ifocus.homeControllers',
    'ifocus.overviewControllers',
    'ifocus.sessionControllers'

]);