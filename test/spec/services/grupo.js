'use strict';

describe('Service: Grupo', function () {

    // load the service's module
    beforeEach(module('copaApp', function ($provide) {
        EquipoMock = function (nombre) {
            this.nombre = nombre;
        };
        PartidoMock = function (equipo1, equipo2) {
            this.equipos = [];
            this.equipos.push(equipo1);
            this.equipos.push(equipo2);
        };
        $provide.value('Equipo', EquipoMock);
        $provide.value('Partido', PartidoMock);
    }));

    // instantiate service
    var Grupo,
        EquipoMock,
        PartidoMock;

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

});