'use strict';

angular.module('copaApp')
    .factory('Equipo', function () {
        var Equipo = function (nombre) {
            this.nombre = nombre;
        };

        // Public API here
        return Equipo;
    });