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
        };

        // Public API here
        return Partido;
    });