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

  .constant('baseUrl', 'http://223.3.87.87:8080/vislog-restful/api/');