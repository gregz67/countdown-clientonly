'use strict';

/**
 * @ngdoc overview
 * @name countdownApp
 * @description
 * # countdownApp
 *
 * Main module of the application.
 */
angular
  .module('countdownApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-datepicker',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('countdownApp');
  });
