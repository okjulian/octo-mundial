'use strict';

describe('Service: FaseGrupos', function () {

  // load the service's module
  beforeEach(module('copaApp'));

  // instantiate service
  var FaseGrupos;

  beforeEach(inject(function (_FaseGrupos_) {
    FaseGrupos = _FaseGrupos_;
  }));

  describe('Grupo A', function () {
    it('deberia tener los equipos correctos', function () {
      expect(FaseGrupos.grupos.A).toBeDefined();
      expect(FaseGrupos.grupos.A.equipos[0].nombre).toBe('Brasil');
    });
  });

  describe('Grupo B', function () {
    it('deberia tener los equipos correctos', function () {
      expect(FaseGrupos.grupos.B).toBeDefined();
      expect(FaseGrupos.grupos.B.equipos[0].nombre).toBe('España');
    });
  });

  describe('Grupo C', function () {
    it('deberia tener los equipos correctos', function () {
      expect(FaseGrupos.grupos.C).toBeDefined();
      expect(FaseGrupos.grupos.C.equipos[0].nombre).toBe('Colombia');
    });
  });

  describe('Grupo D', function () {
    it('deberia tener los equipos correctos', function () {
      expect(FaseGrupos.grupos.D).toBeDefined();
      expect(FaseGrupos.grupos.D.equipos[0].nombre).toBe('Uruguay');
    });
  });

  describe('Grupo E', function () {
    it('deberia tener los equipos correctos', function () {
      expect(FaseGrupos.grupos.E).toBeDefined();
      expect(FaseGrupos.grupos.E.equipos[0].nombre).toBe('Suiza');
    });
  });

  describe('Grupo F', function () {
    it('deberia tener los equipos correctos', function () {
      expect(FaseGrupos.grupos.F).toBeDefined();
      expect(FaseGrupos.grupos.F.equipos[0].nombre).toBe('Argentina');
    });
  });

  describe('Grupo G', function () {
    it('deberia tener los equipos correctos', function () {
      expect(FaseGrupos.grupos.G).toBeDefined();
      expect(FaseGrupos.grupos.G.equipos[0].nombre).toBe('Alemania');
    });
  });

  describe('Grupo H', function () {
    it('deberia tener los equipos correctos', function () {
      expect(FaseGrupos.grupos.H).toBeDefined();
      expect(FaseGrupos.grupos.H.equipos[0].nombre).toBe('Bélgica');
    });
  });

  describe('ganadores', function () {
    it('deberia haber 2 por grupo', function () {
      FaseGrupos.grupos.A.autoCompletar();
      FaseGrupos.actualizarGanadores();
      expect(FaseGrupos.grupos.A.ganadores.length).toBe(2);
      expect(FaseGrupos.grupos.A.ganadores[0].nombre).toBeDefined();
      expect(FaseGrupos.grupos.A.ganadores[1].nombre).toBeDefined();
    });

    it('no deberia sobreescribir los nombres por defecto si aun no hay ganadores', function () {
      FaseGrupos.actualizarGanadores();
      expect(FaseGrupos.grupos.A.ganadores[0].nombre).toBe('1° - Grupo A');
      expect(FaseGrupos.grupos.A.ganadores[1].nombre).toBeDefined('2° - Grupo A');
    });
  });

  describe('autoCompletar', function () {
    it('deberia completar los resultados de cada grupo', function () {
      FaseGrupos.autoCompletar();
      for(var prop in FaseGrupos.grupos) {
        if (FaseGrupos.grupos.hasOwnProperty(prop)) {
          expect(FaseGrupos.grupos[prop].partidos[0].resultado[0]).not.toBe(null);
          expect(FaseGrupos.grupos[prop].partidos[0].resultado[1]).not.toBe(null);
        }
      }
    });
  });

});
