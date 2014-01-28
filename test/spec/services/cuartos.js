'use strict';

describe('Service: Cuartos', function () {

  // load the service's module
  beforeEach(module('copaApp'));

  // instantiate service
  var Cuartos,
  FaseGrupos,
  Octavos;

  beforeEach(inject(function (_Cuartos_, _FaseGrupos_, _Octavos_) {
    Cuartos = _Cuartos_;
    Octavos = _Octavos_;
    FaseGrupos = _FaseGrupos_;
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

  it('deberia tener 4 ganadores con respectivos nombres', function () {
    expect(Cuartos.ganadores.length).toBe(4);
    expect(Cuartos.ganadores[0].nombre).toBe('Ganador cuartos 1');
    expect(Cuartos.ganadores[1].nombre).toBe('Ganador cuartos 2');
    expect(Cuartos.ganadores[2].nombre).toBe('Ganador cuartos 3');
    expect(Cuartos.ganadores[3].nombre).toBe('Ganador cuartos 4');
  });

  it('deberia actualizar los ganadores al completar los partidos', function () {
    FaseGrupos.autoCompletar();
    FaseGrupos.actualizarGanadores();
    Octavos.generarPartidos();
    Octavos.partidos[0].ponerResultado(1, 0);
    Octavos.partidos[1].ponerResultado(1, 0);
    Octavos.calcularGanadores();
    Cuartos.generarPartidos();
    expect(Cuartos.ganadores[0].nombre).toBe('Ganador cuartos 1');
    Cuartos.partidos[0].ponerResultado(1, 0);
    Cuartos.calcularGanadores();
    expect(Cuartos.ganadores[0].nombre).not.toBe('Ganador cuartos 1');
  });

});
