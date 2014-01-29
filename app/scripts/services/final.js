'use strict';

angular.module('copaApp')
.service('Final', function Final(Partido, Semis) {
  this.generarPartidos = function () {
    this.partido = new Partido(Semis.ganadores[0], Semis.ganadores[1]);
  };
});
