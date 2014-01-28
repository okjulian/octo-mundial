'use strict';

angular.module('copaApp')
.controller('LlavesCtrl', function ($scope, Octavos, FaseGrupos, Cuartos) {
  $scope.octavos = Octavos;
  $scope.cuartos = Cuartos;
  FaseGrupos.actualizarGanadores();
  Octavos.generarPartidos();
  Cuartos.generarPartidos();

  $scope.actualizarResultado = function (partido, golesEquipo1, golesEquipo2) {
    partido.ponerResultado(golesEquipo1, golesEquipo2);
    Octavos.calcularGanadores();
    Cuartos.generarPartidos();
  };

});
