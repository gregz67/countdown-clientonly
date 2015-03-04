'use strict';

angular.module('countdowApp')
  .controller('AddCtrl', function($scope, EventService) {
    var emptyEvent = {
      name: '',
      date: undefined
    };
    $scope.events = [];
    $scope.newEvent = emptyEvent;

    $scope.addEvent = function(newEvent) {
      if (newEvent.name === '' || newEvent.date === undefined) {
        return;
      }
      EventService.create(newEvent);
      $scope.newEvent = emptyEvent;
    };
  });
