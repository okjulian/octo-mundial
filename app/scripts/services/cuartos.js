'use strict';

angular.module('copaApp')
.service('Cuartos', function Cuartos(Octavos, Partido, Equipo) {
  var cuartos = this;

  this.generarPartidos = function () {
    this.partidos = [
      new Partido(Octavos.ganadores[0], Octavos.ganadores[1]),
      new Partido(Octavos.ganadores[2], Octavos.ganadores[3]),
      new Partido(Octavos.ganadores[4], Octavos.ganadores[5]),
      new Partido(Octavos.ganadores[6], Octavos.ganadores[7])
    ];
  };

  this.ganadores = [
    new Equipo('Ganador cuartos 1'),
    new Equipo('Ganador cuartos 2'),
    new Equipo('Ganador cuartos 3'),
    new Equipo('Ganador cuartos 4')
  ];

  this.calcularGanadores = function () {
    this.partidos.forEach(actualizarGanador);
  };

  function actualizarGanador(partido, indice) {
    if (partido.ganador !== null) {
      cuartos.ganadores[indice] = partido.ganador;
    }
  }
});
