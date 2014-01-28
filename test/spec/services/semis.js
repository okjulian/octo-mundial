'use strict';

describe('Service: Semis', function () {

  // load the service's module
  beforeEach(module('copaApp'));

  // instantiate service
  var Semis;
  beforeEach(inject(function (_Semis_) {
    Semis = _Semis_;
  }));

  it('deberia enfrentar a los ganadores de cuartos', function () {
    Semis.generarPartidos();
    expect(Semis.partidos.length).toBe(2);
    expect(Semis.partidos[0].equipos[0].nombre).toBe('Ganador cuartos 1');
    expect(Semis.partidos[0].equipos[1].nombre).toBe('Ganador cuartos 2');
    expect(Semis.partidos[1].equipos[0].nombre).toBe('Ganador cuartos 3');
    expect(Semis.partidos[1].equipos[1].nombre).toBe('Ganador cuartos 4');
  });

});
