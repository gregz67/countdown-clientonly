'use strict';

/**
 * @ngdoc function
 * @name countdownApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the countdownApp
 */
angular.module('countdownApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
