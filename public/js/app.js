angular.module('ifocus', [

    // --- 3rd Dependencies ---
    'ui.router',
    'chart.js',

    // --- ROUTERS ---
    'ifocus.appRoutes',

    // --- DIRECTIVES ---
    'ifocus.visualDirectives',

    // --- Modules ---
    'ifocus.status',
    'ifocus.audience',
    'ifocus.traffic',

    // --- SERVICES ---
    'ifocus.sessionServices',

    // --- CONTROLLERS ---
    //'ifocus.homeControllers',
    //'ifocus.statusControllers',
    //'ifocus.overviewControllers',
    'ifocus.sessionControllers'

]);