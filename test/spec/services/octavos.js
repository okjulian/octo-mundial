'use strict';

describe('Service: Octavos', function () {

  // load the service's module
  beforeEach(module('copaApp'));

  // instantiate service
  var Octavos,
  FaseGrupos,
  Equipo;

  beforeEach(inject(function (_Octavos_, _Equipo_, _FaseGrupos_) {
    Octavos = _Octavos_;
    Equipo = _Equipo_;
    FaseGrupos = _FaseGrupos_;
  }));

  it('deberia generar 8 partidos en los que se enfrenten los ganadores de la fase de grupos', function () {

    Octavos.generarPartidos();

    expect(Octavos.partidos.length).toBe(8);
    expect(Octavos.partidos[0].equipos[0].nombre).toBe('1° - Grupo A');
    expect(Octavos.partidos[0].equipos[1].nombre).toBe('2° - Grupo B');
    expect(Octavos.partidos[1].equipos[0].nombre).toBe('1° - Grupo C');
    expect(Octavos.partidos[1].equipos[1].nombre).toBe('2° - Grupo D');
    expect(Octavos.partidos[2].equipos[0].nombre).toBe('1° - Grupo E');
    expect(Octavos.partidos[2].equipos[1].nombre).toBe('2° - Grupo F');
    expect(Octavos.partidos[3].equipos[0].nombre).toBe('1° - Grupo G');
    expect(Octavos.partidos[3].equipos[1].nombre).toBe('2° - Grupo H');
    expect(Octavos.partidos[4].equipos[0].nombre).toBe('1° - Grupo B');
    expect(Octavos.partidos[4].equipos[1].nombre).toBe('2° - Grupo A');
    expect(Octavos.partidos[5].equipos[0].nombre).toBe('1° - Grupo D');
    expect(Octavos.partidos[5].equipos[1].nombre).toBe('2° - Grupo C');
    expect(Octavos.partidos[6].equipos[0].nombre).toBe('1° - Grupo F');
    expect(Octavos.partidos[6].equipos[1].nombre).toBe('2° - Grupo E');
    expect(Octavos.partidos[7].equipos[0].nombre).toBe('1° - Grupo H');
    expect(Octavos.partidos[7].equipos[1].nombre).toBe('2° - Grupo G');
  });

  it('deberia enfrentar a los ganadores de la fase de grupos', function () {

    FaseGrupos.autoCompletar();
    FaseGrupos.actualizarGanadores();
    // Como puedo evitar usar esta funcion para actualizar los partidos?
    // Hay alguna forma de two way binding entre servicios?
    Octavos.generarPartidos();

    expect(Octavos.partidos[0].equipos[0].nombre).not.toBe('1° - Grupo A');
    expect(Octavos.partidos[0].equipos[1].nombre).not.toBe('2° - Grupo B');
    expect(Octavos.partidos[1].equipos[0].nombre).not.toBe('1° - Grupo C');
    expect(Octavos.partidos[1].equipos[1].nombre).not.toBe('2° - Grupo D');
    expect(Octavos.partidos[2].equipos[0].nombre).not.toBe('1° - Grupo E');
    expect(Octavos.partidos[2].equipos[1].nombre).not.toBe('2° - Grupo F');
    expect(Octavos.partidos[3].equipos[0].nombre).not.toBe('1° - Grupo G');
    expect(Octavos.partidos[3].equipos[1].nombre).not.toBe('2° - Grupo H');
    expect(Octavos.partidos[4].equipos[0].nombre).not.toBe('1° - Grupo B');
    expect(Octavos.partidos[4].equipos[1].nombre).not.toBe('2° - Grupo A');
    expect(Octavos.partidos[5].equipos[0].nombre).not.toBe('1° - Grupo D');
    expect(Octavos.partidos[5].equipos[1].nombre).not.toBe('2° - Grupo C');
    expect(Octavos.partidos[6].equipos[0].nombre).not.toBe('1° - Grupo F');
    expect(Octavos.partidos[6].equipos[1].nombre).not.toBe('2° - Grupo E');
    expect(Octavos.partidos[7].equipos[0].nombre).not.toBe('1° - Grupo H');
    expect(Octavos.partidos[7].equipos[1].nombre).not.toBe('2° - Grupo G');
  });

  it('deberia tener 8 ganadores con respectivos nombres', function () {
    expect(Octavos.ganadores.length).toBe(8);
    expect(Octavos.ganadores[0].nombre).toBe('Ganador octavos 1');
    expect(Octavos.ganadores[1].nombre).toBe('Ganador octavos 2');
    expect(Octavos.ganadores[2].nombre).toBe('Ganador octavos 3');
    expect(Octavos.ganadores[3].nombre).toBe('Ganador octavos 4');
    expect(Octavos.ganadores[4].nombre).toBe('Ganador octavos 5');
    expect(Octavos.ganadores[5].nombre).toBe('Ganador octavos 6');
    expect(Octavos.ganadores[6].nombre).toBe('Ganador octavos 7');
    expect(Octavos.ganadores[7].nombre).toBe('Ganador octavos 8');
  });

  it('deberia actualizar los ganadores al completar los partidos', function () {
    FaseGrupos.autoCompletar();
    FaseGrupos.actualizarGanadores();
    Octavos.generarPartidos();
    expect(Octavos.ganadores[0].nombre).toBe('Ganador octavos 1');
    Octavos.partidos[0].ponerResultado(1, 0);
    Octavos.calcularGanadores();
    expect(Octavos.ganadores[0].nombre).not.toBe('Ganador octavos 1');
  });

});
