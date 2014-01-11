'use strict';

angular.module('copaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/fase-grupos.html',
        controller: 'FaseGruposCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
