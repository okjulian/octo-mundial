'use strict';

describe('Service: Partido', function () {

  // load the service's module
  beforeEach(module('copaApp'));

  // instantiate service
  var Partido,
  Equipo;

  beforeEach(inject(function (_Partido_, _Equipo_) {
    Partido = _Partido_;
    Equipo = _Equipo_;
  }));

  it('deberia tener dos equipos', function () {
    var partido = new Partido(new Equipo('Argentina'), new Equipo('Brasil'));

    expect(partido.equipos.length).toBe(2);
    expect(partido.equipos[0].nombre).toBe('Argentina');
    expect(partido.equipos[1].nombre).toBe('Brasil');
  });

  it('deberia tener el resultado nulo inicialmente', function () {
    var partido = new Partido(new Equipo('Argentina'), new Equipo('Brasil'));

    expect(partido.resultado).toEqual([null, null]);
  });

  describe('ponerResultado', function () {
    it('deberia asignar una cantidad de goles a cada equipo', function () {
      var partido = new Partido(new Equipo('Argentina'), new Equipo('Brasil'));

      partido.ponerResultado(3, 1);
      expect(partido.resultado[0]).toBe(3);
      expect(partido.resultado[1]).toBe(1);
    });

    it('deberia sumar 3 puntos al primer equipo si gana', function () {

      var partido = new Partido(new Equipo('Argentina'), new Equipo('Brasil'));

      partido.ponerResultado(3, 1);
      expect(partido.equipos[0].puntos).toBe(3);
      expect(partido.equipos[1].puntos).toBe(0);
    });

    it('deberia sumar 3 puntos al segundo equipo si gana', function () {

      var partido = new Partido(new Equipo('Argentina'), new Equipo('Brasil'));

      partido.ponerResultado(1, 2);
      expect(partido.equipos[0].puntos).toBe(0);
      expect(partido.equipos[1].puntos).toBe(3);
    });

    it('deberia sumar 1 punto a cada equipo en caso de empate', function () {

      var partido = new Partido(new Equipo('Argentina'), new Equipo('Brasil'));

      partido.ponerResultado(1, 1);
      expect(partido.equipos[0].puntos).toBe(1);
      expect(partido.equipos[1].puntos).toBe(1);
    });

    it('deberia poder asignar goles de un solo equipo', function () {
      var partido = new Partido(new Equipo('Argentina'), new Equipo('Brasil'));
      partido.ponerResultado(1, null);
      expect(partido.equipos[0].puntos).toBe(0);
      expect(partido.equipos[1].puntos).toBe(0);
      partido.ponerResultado(null, 1);
      expect(partido.equipos[0].puntos).toBe(1);
      expect(partido.equipos[1].puntos).toBe(1);
    });

    it('deberia mostrar cero si un resultado se coloca como negativo', function () {
      var partido = new Partido(new Equipo('Argentina'), new Equipo('Brasil'));
      partido.ponerResultado(-1, -1);
      expect(partido.resultado[0]).toBe(0);
      expect(partido.resultado[1]).toBe(0);
    });

    it('deberia mostrar cero si un resultado se coloca como String', function () {
      var partido = new Partido(new Equipo('Argentina'), new Equipo('Brasil'));
      partido.ponerResultado('string', 'another');
      expect(partido.resultado[0]).toBe(0);
      expect(partido.resultado[1]).toBe(0);
    });

    it('deberia setear al ganador y perdedor una vez definidos', function () {
      var partido = new Partido(new Equipo('Argentina'), new Equipo('Brasil'));

      expect(partido.ganador).toBe(null);
      expect(partido.perdedor).toBe(null);
      partido.ponerResultado(3, 1);
      expect(partido.ganador.nombre).toBe('Argentina');
      expect(partido.perdedor.nombre).toBe('Brasil');
    });

  });

});
