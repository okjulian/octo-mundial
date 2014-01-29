'use strict';

angular.module('copaApp')
.factory('Partido', function () {
  var Partido = function (equipo1, equipo2) {
    this.equipos = [];
    this.resultado = [null, null];
    this.ganador = null;
    this.perdedor = null;
    this.equipos.push(equipo1);
    this.equipos.push(equipo2);
  };

  Partido.prototype.ponerResultado = function (golesEquipo1, golesEquipo2) {
    // From the book effective js
    function isReallyNaN(x) {
      return x !== x;
    }

    if (golesEquipo1 !== null && golesEquipo1 !== undefined) {
      if (golesEquipo1 <= 0 || (isReallyNaN(+golesEquipo1))) {
        golesEquipo1 = 0;
      }

      this.resultado[0] = +golesEquipo1; // + (plus) converts to int
    }
    if (golesEquipo2 !== null && golesEquipo2 !== undefined) {
      if (golesEquipo2 <= 0 || (isReallyNaN(+golesEquipo2))) {
        golesEquipo2 = 0;
      }
      this.resultado[1] = +golesEquipo2;
    }

    if (this.resultado[0] !== null && this.resultado[1] !== null) {
      if (this.resultado[0] > this.resultado[1]) {
        this.equipos[0].puntos += 3;
        this.ganador = this.equipos[0];
        this.perdedor = this.equipos[1];
      } else if (this.resultado[0] < this.resultado[1]) {
        this.equipos[1].puntos += 3;
        this.ganador = this.equipos[1];
        this.perdedor = this.equipos[0];
      } else if (this.resultado[0] === this.resultado[1]) {
        this.equipos[0].puntos += 1;
        this.equipos[1].puntos += 1;
      }
    }
  };

  // Public API here
  return Partido;
});
