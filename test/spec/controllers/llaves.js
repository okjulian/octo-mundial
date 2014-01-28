'use strict';

describe('Controller: LlavesCtrl', function () {

  // load the controller's module
  beforeEach(module('copaApp', function ($provide) {
    OctavosMock = jasmine.createSpyObj('Octavos', ['partidos', 'generarPartidos', 'calcularGanadores']);
    CuartosMock = jasmine.createSpyObj('Cuartos', ['partidos', 'generarPartidos']);
    FaseGruposMock = jasmine.createSpyObj('FaseGrupos', ['actualizarGanadores']);
    $provide.value('Octavos', OctavosMock);
    $provide.value('FaseGrupos', FaseGruposMock);
    $provide.value('Cuartos', CuartosMock);
  }));

  var LlavesCtrl,
  scope,
  OctavosMock,
  CuartosMock,
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
    it('deberia obtener los partidos del servicio Llaves', function () {
      scope.$digest();
      expect(scope.cuartos).toBeDefined();
      expect(CuartosMock.generarPartidos).toHaveBeenCalled();
    });
  });

});
