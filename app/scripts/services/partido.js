'use strict';

angular.module('copaApp')
    .factory('Partido', function () {
        var Partido = function (equipo1, equipo2) {
            this.equipos = [];
            this.equipos.push(equipo1);
            this.equipos.push(equipo2);
        };

        // Public API here
        return Partido;
    });