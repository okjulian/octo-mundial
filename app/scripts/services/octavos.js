'use strict';

angular.module('copaApp')
    .service('Octavos', function Octavos(FaseGrupos, Partido) {

        var octavos = this;

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

        octavos.generarPartidos();
    });
