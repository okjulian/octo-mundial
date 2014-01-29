'use strict';

angular.module('copaApp')
.service('Repechaje', function Final(Partido, Semis) {
  this.generarPartidos = function () {
    this.partido = new Partido(Semis.perdedores[0], Semis.perdedores[1]);
  };
});
