'use strict';

describe('Service: Cuartos', function () {

  // load the service's module
  beforeEach(module('copaApp'));

  // instantiate service
  var Cuartos;
  beforeEach(inject(function (_Cuartos_) {
    Cuartos = _Cuartos_;
  }));

  it('deberia enfrentar a los ganadores de octavos', function () {
    Cuartos.generarPartidos();
    expect(Cuartos.partidos.length).toBe(4);
    expect(Cuartos.partidos[0].equipos[0].nombre).toBe('Ganador octavos 1');
    expect(Cuartos.partidos[0].equipos[1].nombre).toBe('Ganador octavos 2');
    expect(Cuartos.partidos[1].equipos[0].nombre).toBe('Ganador octavos 3');
    expect(Cuartos.partidos[1].equipos[1].nombre).toBe('Ganador octavos 4');
    expect(Cuartos.partidos[2].equipos[0].nombre).toBe('Ganador octavos 5');
    expect(Cuartos.partidos[2].equipos[1].nombre).toBe('Ganador octavos 6');
    expect(Cuartos.partidos[3].equipos[0].nombre).toBe('Ganador octavos 7');
    expect(Cuartos.partidos[3].equipos[1].nombre).toBe('Ganador octavos 8');
  });

});
