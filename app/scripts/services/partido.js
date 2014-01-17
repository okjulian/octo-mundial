'use strict';

angular.module('copaApp')
    .factory('Partido', function () {
        var Partido = function (equipo1, equipo2) {
            this.equipos = [];
            this.resultado = [null, null];
            this.equipos.push(equipo1);
            this.equipos.push(equipo2);
        };

        Partido.prototype.ponerResultado = function (golesEquipo1, golesEquipo2) {
            this.resultado = [golesEquipo1, golesEquipo2];
            if (golesEquipo1 > golesEquipo2) {
                this.equipos[0].puntos += 3;
            } else if (golesEquipo1 < golesEquipo2) {
                this.equipos[1].puntos += 3;
            } else if (golesEquipo1 === golesEquipo2) {
                this.equipos[0].puntos += 1;
                this.equipos[1].puntos += 1;
            }
        };

        // Public API here
        return Partido;
    });