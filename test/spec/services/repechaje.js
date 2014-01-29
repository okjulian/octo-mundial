'use strict';

describe('Service: Repechaje', function () {

  // load the service's module
  beforeEach(module('copaApp'));

  // instantiate service
  var Repechaje;

  beforeEach(inject(function (_Repechaje_) {
    Repechaje = _Repechaje_;
  }));

  it('deberia enfrentar a los perdedores de semis', function () {
    Repechaje.generarPartidos();
    expect(Repechaje.partido).toBeDefined();
    expect(Repechaje.partido.equipos[0].nombre).toBe('Perdedor semifinal 1');
    expect(Repechaje.partido.equipos[1].nombre).toBe('Perdedor semifinal 2');
  });

});
