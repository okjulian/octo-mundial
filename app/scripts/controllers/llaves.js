'use strict';

angular.module('copaApp')
.controller('LlavesCtrl', function ($scope, Octavos, FaseGrupos) {
  $scope.octavos = Octavos;
  FaseGrupos.actualizarGanadores();
  Octavos.generarPartidos();

  $scope.$watch('FaseGrupos', function () {
    console.log('watching');
    FaseGrupos.actualizarGanadores();
    Octavos.generarPartidos();
  });

});
