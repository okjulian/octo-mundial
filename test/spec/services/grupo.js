'use strict';

describe('Service: Grupo', function () {

    // load the service's module
    beforeEach(module('copaApp'));

    // instantiate service
    var Grupo;

    beforeEach(inject(function (_Grupo_) {
        Grupo = _Grupo_;
    }));

    it('deberia recibir un nombre y un arreglo de nombres de equipos en el constructor', function () {
        var grupoA = new Grupo('A', ['Brasil', 'Argentina', 'Alemania', 'Italia']);
        expect(grupoA.equipos.length).toBe(4);
        expect(grupoA.equipos[0].nombre).toBe('Brasil');
        expect(grupoA.nombre).toBe('A');
    });

    it('deberia crear los 6 partidos en un orden establecido', function () {
        var grupoA = new Grupo('A', ['Brasil', 'Croacia', 'México', 'Camerún']);
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

    describe('puntaje', function () {
        it('un partido ganado deberia sumar 3 puntos', function () {
            var grupoA = new Grupo('Brasil', 'Croacia', 'México', 'Camerún');
            // Brasil - Croacia
            grupoA.partidos[0].ponerResultado(3, 1);
            expect(grupoA.equipos[0].puntos).toBe(3);
            expect(grupoA.equipos[1].puntos).toBe(0);
            expect(grupoA.equipos[2].puntos).toBe(0);
            expect(grupoA.equipos[3].puntos).toBe(0);
        });
    });

    describe('ganadores', function () {

        it('deberia haber 2 por grupo', function () {
            var grupoA = new Grupo('A', ['Brasil', 'Croacia', 'México', 'Camerún']);
            var ganadores;
            expect(grupoA.ganadores.length).toBe(2);
            expect(grupoA.ganadores[0].nombre).toBe('1° - Grupo A');
            expect(grupoA.ganadores[1].nombre).toBe('2° - Grupo A');
            grupoA.autoCompletar();
            ganadores = grupoA.calcularGanadores();
            expect(grupoA.ganadores[0].nombre).not.toBe('1° - Grupo A');
            expect(grupoA.ganadores[1].nombre).not.toBe('2° - Grupo A');
        });

        it('deberia devolver los ganadores aunque no hayan terminado todos los partidos del grupo', function () {
            var ganadores;
            var grupoA = new Grupo('A', ['Brasil', 'Croacia', 'México', 'Camerún']);
            // Brasil - Croacia
            grupoA.partidos[0].ponerResultado(3, 1);
            // México - Camerún
            grupoA.partidos[1].ponerResultado(2, 1);

            ganadores = grupoA.calcularGanadores();
            expect(ganadores[0].nombre).toBe('Brasil');
            expect(ganadores[1].nombre).toBe('México');
        });

        it('no deberia sobreescribir los nombres por defecto si aun no hay ganadores', function () {
            var grupoA = new Grupo('A', ['Brasil', 'Croacia', 'México', 'Camerún']);
            var ganadores;

            expect(grupoA.ganadores.length).toBe(2);
            expect(grupoA.ganadores[0].nombre).toBe('1° - Grupo A');
            expect(grupoA.ganadores[1].nombre).toBe('2° - Grupo A');

            ganadores = grupoA.calcularGanadores();
            expect(grupoA.ganadores[0].nombre).toBe('1° - Grupo A');
            expect(grupoA.ganadores[1].nombre).toBe('2° - Grupo A');
        });

    });

});
