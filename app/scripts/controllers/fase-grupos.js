'use strict';

angular.module('copaApp')
    .controller('FaseGruposCtrl', function ($scope, FaseGrupos) {
        $scope.partidos = {
            A: FaseGrupos.grupos.A.partidos
        };

        $scope.autoCompletarGrupo = function (letra) {
            FaseGrupos.grupos[letra].autoCompletar();
        };
    });