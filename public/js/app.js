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

])

    .constant('baseUrl', 'http://223.3.85.39:8080/vislog-restful/api/');