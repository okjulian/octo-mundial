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

        Grupo.prototype.autoCompletar = function () {
            this.partidos.forEach(function (partido) {
                if (partido.resultado[0] === null) {
                    partido.ponerResultado(Math.floor(Math.random() * 4), partido.resultado[1]);
                }
                if (partido.resultado[1] === null) {
                    partido.ponerResultado(partido.resultado[0], Math.floor(Math.random() * 4));
                }
            });
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