'use strict';

angular.module('copaApp')
.controller('LlavesCtrl', function ($scope, Octavos, FaseGrupos, Cuartos, Semis) {
  $scope.octavos = Octavos;
  $scope.cuartos = Cuartos;
  $scope.semis = Semis;
  FaseGrupos.actualizarGanadores();
  Octavos.generarPartidos();
  Cuartos.generarPartidos();
  Semis.generarPartidos();

  $scope.actualizarResultadoCuartos = function (partido, golesEquipo1, golesEquipo2) {
    partido.ponerResultado(golesEquipo1, golesEquipo2);
    Octavos.calcularGanadores();
    Cuartos.generarPartidos();
  };

  $scope.actualizarResultadoSemis = function (partido, golesEquipo1, golesEquipo2) {
    partido.ponerResultado(golesEquipo1, golesEquipo2);
    Cuartos.calcularGanadores();
    Semis.generarPartidos();
  };

});
