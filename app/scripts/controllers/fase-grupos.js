'use strict';

angular.module('copaApp')
    .controller('FaseGruposCtrl', function ($scope, FaseGrupos) {
        $scope.partidos = {
            A: FaseGrupos.grupos.A.partidos,
            B: FaseGrupos.grupos.B.partidos,
            C: FaseGrupos.grupos.C.partidos,
            D: FaseGrupos.grupos.D.partidos,
            E: FaseGrupos.grupos.E.partidos,
            F: FaseGrupos.grupos.F.partidos,
            G: FaseGrupos.grupos.G.partidos,
            H: FaseGrupos.grupos.H.partidos
        };

        $scope.autoCompletarGrupo = function (letra) {
            FaseGrupos.grupos[letra].autoCompletar();
        };

        $scope.autoCompletarGrupos = function () {
            for (var grupo in FaseGrupos.grupos) {
                if (FaseGrupos.grupos.hasOwnProperty(grupo)) {

                    FaseGrupos.grupos[grupo].autoCompletar();
                }
            }
        };
    });