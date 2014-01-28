'use strict';

angular.module('copaApp')
.service('Cuartos', function Cuartos(Octavos, Partido) {
  this.generarPartidos = function () {
    this.partidos = [
      new Partido(Octavos.ganadores[0], Octavos.ganadores[1]),
      new Partido(Octavos.ganadores[2], Octavos.ganadores[3]),
      new Partido(Octavos.ganadores[4], Octavos.ganadores[5]),
      new Partido(Octavos.ganadores[6], Octavos.ganadores[7])
    ];
  };
});
