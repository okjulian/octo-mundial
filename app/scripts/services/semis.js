'use strict';

angular.module('copaApp')
  .service('Semis', function Semis(Cuartos, Partido) {
    this.generarPartidos = function () {
      this.partidos = [
        new Partido(Cuartos.ganadores[0], Cuartos.ganadores[1]),
        new Partido(Cuartos.ganadores[2], Cuartos.ganadores[3])
      ];
    };
  });
