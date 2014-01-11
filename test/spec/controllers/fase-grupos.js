'use strict';

describe('Controller: FaseGruposCtrl', function () {

    // load the controller's module
    beforeEach(module('copaApp', function ($provide) {
        FaseGruposMock = jasmine.createSpyObj('FaseGrupos', ['grupos']);
        FaseGruposMock.grupos = {
            A: {
                partidos: new Array(6)
            }
        }
        $provide.value('FaseGrupos', FaseGruposMock);
    }));

    var FaseGruposCtrl,
        scope,
        FaseGruposMock;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        FaseGruposCtrl = $controller('FaseGruposCtrl', {
            $scope: scope
        });
    }));

    it('deberia tener los 6 partidos del grupo A', function () {
        expect(scope.partidos.A.length).toBe(6);
    });

});