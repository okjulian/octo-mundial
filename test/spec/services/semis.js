'use strict';

describe('Service: Semis', function () {

  // load the service's module
  beforeEach(module('copaApp'));

  // instantiate service
  var Semis,
  Cuartos,
  FaseGrupos,
  Octavos;

  beforeEach(inject(function (_Semis_, _Cuartos_, _FaseGrupos_, _Octavos_) {
    Semis = _Semis_;
    Cuartos = _Cuartos_;
    Octavos = _Octavos_;
    FaseGrupos = _FaseGrupos_;
  }));

  it('deberia enfrentar a los ganadores de cuartos', function () {
    Semis.generarPartidos();
    expect(Semis.partidos.length).toBe(2);
    expect(Semis.partidos[0].equipos[0].nombre).toBe('Ganador cuartos 1');
    expect(Semis.partidos[0].equipos[1].nombre).toBe('Ganador cuartos 2');
    expect(Semis.partidos[1].equipos[0].nombre).toBe('Ganador cuartos 3');
    expect(Semis.partidos[1].equipos[1].nombre).toBe('Ganador cuartos 4');
  });

  it('deberia tener 2 ganadores con respectivos nombres', function () {
    expect(Semis.ganadores.length).toBe(2);
    expect(Semis.ganadores[0].nombre).toBe('Ganador semifinal 1');
    expect(Semis.ganadores[1].nombre).toBe('Ganador semifinal 2');
  });

  it('deberia tener 2 perdedores con respectivos nombres', function () {
    expect(Semis.perdedores.length).toBe(2);
    expect(Semis.perdedores[0].nombre).toBe('Perdedor semifinal 1');
    expect(Semis.perdedores[1].nombre).toBe('Perdedor semifinal 2');
  });

  it('deberia actualizar los ganadores al completar los partidos', function () {
    FaseGrupos.autoCompletar();
    FaseGrupos.actualizarGanadores();
    Octavos.generarPartidos();
    Octavos.partidos[0].ponerResultado(1, 0);
    Octavos.partidos[1].ponerResultado(1, 0);
    Octavos.partidos[2].ponerResultado(1, 0);
    Octavos.partidos[3].ponerResultado(1, 0);
    Octavos.calcularGanadores();
    Cuartos.generarPartidos();
    Cuartos.partidos[0].ponerResultado(1, 0);
    Cuartos.partidos[1].ponerResultado(1, 0);
    Cuartos.calcularGanadores();
    Semis.generarPartidos();
    expect(Semis.ganadores[0].nombre).toBe('Ganador semifinal 1');
    expect(Semis.perdedores[0].nombre).toBe('Perdedor semifinal 1');
    Semis.partidos[0].ponerResultado(1, 0);
    Semis.calcularGanadores();
    expect(Semis.ganadores[0].nombre).not.toBe('Ganador semifinal 1');
    expect(Semis.perdedores[0].nombre).not.toBe('Perdedor semifinal 1');
  });

});
