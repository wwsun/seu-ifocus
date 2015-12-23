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
  'ifocus.jump',
  'ifocus.session',//modify
  'ifocus.sessionController',//modify

  // --- SERVICES ---
  'ifocus.sessionServices', // old

  // --- CONTROLLERS ---
  //'ifocus.homeControllers',
  //'ifocus.statusControllers',
  //'ifocus.overviewControllers',
  'ifocus.sessionControllers' // old

])

  .constant('baseUrl', 'http://223.3.89.199:8080/vislog-1.0/vislog-restful/api/');