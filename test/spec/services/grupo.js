'use strict';

describe('Service: Grupo', function () {

    // load the service's module
    beforeEach(module('copaApp'));

    // instantiate service
    var Grupo;

    beforeEach(inject(function (_Grupo_) {
        Grupo = _Grupo_;
    }));

    it('deberia recibir una lista ordenada de equipos en el constructor', function () {
        var grupoA = new Grupo('Brasil', 'Argentina', 'Alemania', 'Italia');
        expect(grupoA.equipos.length).toBe(4);
        expect(grupoA.equipos[0].nombre).toBe('Brasil');
    });

    it('deberia crear los 6 partidos en un orden establecido', function () {
        var grupoA = new Grupo('Brasil', 'Croacia', 'México', 'Camerún');
        expect(grupoA.partidos.length).toBe(6);

        expect(grupoA.partidos[0].equipos[0].nombre).toBe('Brasil');
        expect(grupoA.partidos[0].equipos[1].nombre).toBe('Croacia');

        expect(grupoA.partidos[1].equipos[0].nombre).toBe('México');
        expect(grupoA.partidos[1].equipos[1].nombre).toBe('Camerún');

        expect(grupoA.partidos[2].equipos[0].nombre).toBe('Brasil');
        expect(grupoA.partidos[2].equipos[1].nombre).toBe('México');

        expect(grupoA.partidos[3].equipos[0].nombre).toBe('Camerún');
        expect(grupoA.partidos[3].equipos[1].nombre).toBe('Croacia');

        expect(grupoA.partidos[4].equipos[0].nombre).toBe('Camerún');
        expect(grupoA.partidos[4].equipos[1].nombre).toBe('Brasil');

        expect(grupoA.partidos[5].equipos[0].nombre).toBe('Croacia');
        expect(grupoA.partidos[5].equipos[1].nombre).toBe('México');
    });

    describe('autoCompletar', function () {
        it('deberia llenar los resultados de todos los partidos del equipo con valores al azar', function () {
            var grupoA = new Grupo('Brasil', 'Croacia', 'México', 'Camerún');
            grupoA.autoCompletar();
            grupoA.partidos.forEach(function (partido) {

                expect(partido.resultado[0]).toBeDefined();
                expect(partido.resultado[1]).toBeDefined();
                expect(partido.resultado[0]).not.toBe(null);
                expect(partido.resultado[1]).not.toBe(null);
            });
        });

        it('no deberia sobreescribir resultados ya asignados', function () {
            var grupoA = new Grupo('Brasil', 'Croacia', 'México', 'Camerún');
            grupoA.partidos[0].ponerResultado(3, 1);
            grupoA.autoCompletar();
            expect(grupoA.partidos[0].resultado[0]).toBe(3);
            expect(grupoA.partidos[0].resultado[1]).toBe(1);
        });
    });

});