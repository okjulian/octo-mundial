'use strict';

describe('Controller: LlavesCtrl', function () {

    // load the controller's module
    beforeEach(module('copaApp', function ($provide) {
        OctavosMock = jasmine.createSpyObj('Octavos', ['generarPartidos']);
        FaseGruposMock = jasmine.createSpyObj('FaseGrupos', ['actualizarGanadores']);
        $provide.value('Octavos', OctavosMock);
        $provide.value('FaseGrupos', FaseGruposMock);
    }));

    var LlavesCtrl,
        scope,
        OctavosMock,
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

        it('deberia actualizar sus partidos cuando cambie fase de grupos', function () {

        });
    });

    xdescribe('Cuartos', function () {
        it('deberia obtener los partidos del servicio Llaves', function () {
            scope.$digest();
            expect(scope.partidos.cuartos).toBeDefined();
        });
    });

    xit('deberia tener definida la funcion ponerResultado', function () {
        expect(scope.ponerResultado).toBeDefined();
    });
});
