'use strict';

angular.module('copaApp')
.controller('LlavesCtrl', function ($scope, Octavos, FaseGrupos, Cuartos, Semis, Final, Repechaje) {
  $scope.octavos = Octavos;
  $scope.cuartos = Cuartos;
  $scope.semis = Semis;
  $scope.final = Final;
  $scope.repechaje = Repechaje;
  FaseGrupos.actualizarGanadores();
  Octavos.generarPartidos();
  Cuartos.generarPartidos();
  Semis.generarPartidos();
  Final.generarPartidos();
  Repechaje.generarPartidos();

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

  $scope.actualizarResultadoFinal = function (partido, golesEquipo1, golesEquipo2) {
    partido.ponerResultado(golesEquipo1, golesEquipo2);
    Semis.calcularGanadores();
    Final.generarPartidos();
    Repechaje.generarPartidos();
  };

});
