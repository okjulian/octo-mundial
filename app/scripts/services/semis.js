'use strict';

angular.module('copaApp')
.service('Semis', function Semis(Cuartos, Partido, Equipo) {
  var semis = this;

  this.generarPartidos = function () {
    this.partidos = [
      new Partido(Cuartos.ganadores[0], Cuartos.ganadores[1]),
      new Partido(Cuartos.ganadores[2], Cuartos.ganadores[3])
    ];
  };

  this.ganadores = [
    new Equipo('Ganador semifinal 1'),
    new Equipo('Ganador semifinal 2')
  ];

  this.perdedores = [
    new Equipo('Perdedor semifinal 1'),
    new Equipo('Perdedor semifinal 2')
  ];

  this.calcularGanadores = function () {
    this.partidos.forEach(actualizarGanador);
  };

  function actualizarGanador(partido, indice) {
    if (partido.ganador !== null) {
      semis.ganadores[indice] = partido.ganador;
      semis.perdedores[indice] = partido.perdedor;
    }
  }

});
