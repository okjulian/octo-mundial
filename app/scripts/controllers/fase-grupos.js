'use strict';

angular.module('copaApp')
    .controller('FaseGruposCtrl', function ($scope, FaseGrupos) {
        $scope.partidos = {
            A: FaseGrupos.grupos.A.partidos
        };
    });