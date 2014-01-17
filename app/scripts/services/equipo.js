'use strict';

angular.module('copaApp')
    .factory('Equipo', function () {
        var Equipo = function (nombre) {
            this.nombre = nombre;
            this.puntos = 0;
        };

        // Public API here
        return Equipo;
    });