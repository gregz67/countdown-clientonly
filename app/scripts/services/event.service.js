'use strict';

angular
  .module('countdownApp')
  .factory('EventService', function(localStorageService) {
    var eventsKey = 'events';
    function getList() {
      if (! _.includes(localStorageService.keys(), eventsKey)) {
        localStorageService.set(eventsKey, []);
      }
      return localStorageService.get(eventsKey);
    }

    function create(event) {
      var events = getList();
      events.push(event);
      localStorageService.set(eventsKey, events);
    }

    return {
      create: create,
      getList: getList
    };
  });

