'use strict';

describe('Service: Equipo', function () {

  // load the service's module
  beforeEach(module('copaApp'));

  // instantiate service
  var Equipo;
  beforeEach(inject(function (_Equipo_) {
    Equipo = _Equipo_;
  }));

  it('deberia crear un equipo en base a un nombre', function () {
    var equipo = new Equipo('Argentina');
    expect(equipo.nombre).toBe('Argentina');
  });

  it('deberia comenzar con 0 puntos', function () {
    var equipo = new Equipo('Argentina');
    expect(equipo.puntos).toBe(0);
  });

});
