'use strict';

describe('Controller: FaseGruposCtrl', function () {

    // load the controller's module
    beforeEach(module('copaApp'));

    var FaseGruposCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        FaseGruposCtrl = $controller('FaseGruposCtrl', {
            $scope: scope
        });
    }));

    it('deberia tener los 6 partidos de cada grupo', function () {
        var letrasGrupos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        letrasGrupos.forEach(function (letraGrupo) {
            expect(scope.partidos[letraGrupo].length).toBe(6);
        });
    });

    describe('autocompletar', function () {
        it('deberia autocompletar los resultados de un grupo', function () {
            scope.partidos.A.forEach(function (element) {
                expect(element.resultado[0]).toBe(null);
                expect(element.resultado[1]).toBe(null);
            });
            scope.autoCompletarGrupo('A');
            scope.partidos.A.forEach(function (element) {
                expect(element.resultado[0]).toBeDefined();
                expect(element.resultado[1]).toBeDefined();
                expect(element.resultado[0]).not.toBe(null);
                expect(element.resultado[1]).not.toBe(null);
            });
        });

        it('deberia autocompletar los resultados de todos los grupos', function () {
            scope.autoCompletarGrupos();
            scope.partidos.A.forEach(function (element) {
                expect(element.resultado[0]).not.toBe(null);
                expect(element.resultado[1]).not.toBe(null);
            });
            scope.partidos.B.forEach(function (element) {
                expect(element.resultado[0]).not.toBe(null);
                expect(element.resultado[1]).not.toBe(null);
            });
        });

    });

});