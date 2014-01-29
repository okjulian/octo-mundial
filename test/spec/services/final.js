'use strict';

describe('Service: Final', function () {

  // load the service's module
  beforeEach(module('copaApp'));

  // instantiate service
  var Final;

  beforeEach(inject(function (_Final_) {
    Final = _Final_;
  }));

  it('deberia enfrentar a los ganadores de semis', function () {
    Final.generarPartidos();
    expect(Final.partido).toBeDefined();
    expect(Final.partido.equipos[0].nombre).toBe('Ganador semifinal 1');
    expect(Final.partido.equipos[1].nombre).toBe('Ganador semifinal 2');
  });

});
