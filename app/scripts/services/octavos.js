'use strict';

angular.module('copaApp')
    .service('Octavos', function Octavos(FaseGrupos, Partido, Equipo) {

        var octavos = this;

        this.partidos = [];

        this.generarPartidos = function () {
            octavos.partidos = [new Partido(FaseGrupos.grupos.A.ganadores[0], FaseGrupos.grupos.B.ganadores[1]),
                         new Partido(FaseGrupos.grupos.C.ganadores[0], FaseGrupos.grupos.D.ganadores[1]),
                         new Partido(FaseGrupos.grupos.E.ganadores[0], FaseGrupos.grupos.F.ganadores[1]),
                         new Partido(FaseGrupos.grupos.G.ganadores[0], FaseGrupos.grupos.H.ganadores[1]),
                         new Partido(FaseGrupos.grupos.B.ganadores[0], FaseGrupos.grupos.A.ganadores[1]),
                         new Partido(FaseGrupos.grupos.D.ganadores[0], FaseGrupos.grupos.C.ganadores[1]),
                         new Partido(FaseGrupos.grupos.F.ganadores[0], FaseGrupos.grupos.E.ganadores[1]),
                         new Partido(FaseGrupos.grupos.H.ganadores[0], FaseGrupos.grupos.G.ganadores[1])];
        };

        this.ganadores = [
          new Equipo('Ganador octavos 1'),
          new Equipo('Ganador octavos 2'),
          new Equipo('Ganador octavos 3'),
          new Equipo('Ganador octavos 4'),
          new Equipo('Ganador octavos 5'),
          new Equipo('Ganador octavos 6'),
          new Equipo('Ganador octavos 7'),
          new Equipo('Ganador octavos 8')
        ];

        this.calcularGanadores = function () {
          this.partidos.forEach(actualizarGanador);
        };

        function actualizarGanador(partido, indice) {
          if (partido.ganador !== null) {
            octavos.ganadores[indice] = partido.ganador;
          }
        }
    });
