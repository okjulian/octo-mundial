'use strict';

describe('Controller: LlavesCtrl', function () {

  // load the controller's module
  beforeEach(module('copaApp', function ($provide) {
    OctavosMock = jasmine.createSpyObj('Octavos', ['partidos', 'generarPartidos', 'calcularGanadores']);
    CuartosMock = jasmine.createSpyObj('Cuartos', ['partidos', 'generarPartidos']);
    SemisMock = jasmine.createSpyObj('Semis', ['partidos', 'generarPartidos']);
    FinalMock = jasmine.createSpyObj('Final', ['partidos', 'generarPartidos']);
    RepechajeMock = jasmine.createSpyObj('Repechaje', ['partidos', 'generarPartidos']);
    FaseGruposMock = jasmine.createSpyObj('FaseGrupos', ['actualizarGanadores']);
    $provide.value('Octavos', OctavosMock);
    $provide.value('FaseGrupos', FaseGruposMock);
    $provide.value('Cuartos', CuartosMock);
    $provide.value('Semis', SemisMock);
    $provide.value('Final', FinalMock);
    $provide.value('Repechaje', RepechajeMock);
  }));

  var LlavesCtrl,
  scope,
  OctavosMock,
  CuartosMock,
  SemisMock,
  FinalMock,
  RepechajeMock,
  FaseGruposMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LlavesCtrl = $controller('LlavesCtrl', {
      $scope: scope
    });
  }));

  describe('Octavos', function () {
    it('deberia obtener los partidos del servicio Octavos', function () {
      expect(scope.octavos).toBeDefined();
      expect(OctavosMock.generarPartidos).toHaveBeenCalled();
    });

    it('deberia llamar a la funcion actualizarGanadores de FaseGrupos', function () {
      expect(FaseGruposMock.actualizarGanadores).toHaveBeenCalled();
    });

  });

  describe('Cuartos', function () {
    it('deberia obtener los partidos del servicio Cuartos', function () {
      scope.$digest();
      expect(scope.cuartos).toBeDefined();
      expect(CuartosMock.generarPartidos).toHaveBeenCalled();
    });
  });

  describe('Semis', function () {
    it('deberia obtener los partidos del servicio Semis', function () {
      scope.$digest();
      expect(scope.semis).toBeDefined();
      expect(SemisMock.generarPartidos).toHaveBeenCalled();
    });
  });

  describe('Final', function () {
    it('deberia obtener los partidos del servicio Final', function () {
      scope.$digest();
      expect(scope.final).toBeDefined();
      expect(FinalMock.generarPartidos).toHaveBeenCalled();
    });
  });

  describe('Repechaje', function () {
    it('deberia obtener los partidos del servicio Repechaje', function () {
      scope.$digest();
      expect(scope.repechaje).toBeDefined();
      expect(RepechajeMock.generarPartidos).toHaveBeenCalled();
    });
  });

});
