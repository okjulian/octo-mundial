'use strict';

angular.module('copaApp')
    .factory('Grupo', function (Equipo, Partido) {

        var Grupo = function (equipo1, equipo2, equipo3, equipo4) {
            this.equipos = [];
            this.equipos.push(new Equipo(equipo1));
            this.equipos.push(new Equipo(equipo2));
            this.equipos.push(new Equipo(equipo3));
            this.equipos.push(new Equipo(equipo4));
            this.partidos = generarPartidos(this.equipos);
        };

        var generarPartidos = function (equipos) {
            var partidos = [];

            partidos.push(new Partido(equipos[0], equipos[1]));
            partidos.push(new Partido(equipos[2], equipos[3]));
            partidos.push(new Partido(equipos[0], equipos[2]));
            partidos.push(new Partido(equipos[3], equipos[1]));
            partidos.push(new Partido(equipos[3], equipos[0]));
            partidos.push(new Partido(equipos[1], equipos[2]));

            return partidos;
        };

        // Public API here
        return Grupo;
    });