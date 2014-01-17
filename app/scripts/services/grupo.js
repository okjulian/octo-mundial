'use strict';

angular.module('copaApp')
.factory('Grupo', function (Equipo, Partido) {

  var Grupo = function (nombre, equipos) {
    this.nombre = nombre;
    this.equipos = [];
    this.equipos.push(new Equipo(equipos[0]));
    this.equipos.push(new Equipo(equipos[1]));
    this.equipos.push(new Equipo(equipos[2]));
    this.equipos.push(new Equipo(equipos[3]));
    this.partidos = generarPartidos(this.equipos);
    this.ganadores = [new Equipo('1° - Grupo ' + this.nombre), new Equipo('2° - Grupo ' + this.nombre)];
  };

  Grupo.prototype.autoCompletar = function () {
    this.partidos.forEach(function (partido) {
      if (partido.resultado[0] === null) {
        partido.ponerResultado(Math.floor(Math.random() * 4), partido.resultado[1]);
      }
      if (partido.resultado[1] === null) {
        partido.ponerResultado(partido.resultado[0], Math.floor(Math.random() * 4));
      }
    });
  };

  var determinarPrimeros = function (equipos) {
    equipos.sort(function (equipo1, equipo2) {
      return equipo2.puntos > equipo1.puntos;
    });
    return [equipos[0], equipos[1]];
  };

  Grupo.prototype._determinarGanadores = function () {
    var tieneResultado = function (partido) {
      var resultado = false;
      if (partido.resultado [0] !== null && partido.resultado[1] !== null) {
        resultado = true;
      }
      return resultado;
    };

    if (this.partidos.some(tieneResultado)) {
      this.ganadores = determinarPrimeros(this.equipos);
    }
  };

  Grupo.prototype.calcularGanadores = function () {
    this._determinarGanadores();
    return this.ganadores;
  };

  var generarPartidos = function (equipos) {
    var partidos = [];

    partidos.push(new Partido(equipos[0], equipos[1]));
    partidos.push(new Partido(equipos[2], equipos[3]));
    partidos.push(new Partido(equipos[0], equipos[2]));
    partidos.push(new Partido(equipos[3], equipos[1]));
    partidos.push(new Partido(equipos[3], equipos[0]));
    partidos.push(new Partido(equipos[1], equipos[2]));

    return partidos;
  };

  // Public API here
  return Grupo;
});
