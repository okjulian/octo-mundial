'use strict';

describe('Service: Partido', function () {

    // load the service's module
    beforeEach(module('copaApp'));

    // instantiate service
    var Partido,
        Equipo;
    
    beforeEach(inject(function (_Partido_, _Equipo_) {
        Partido = _Partido_;
        Equipo = _Equipo_;
    }));

    it('deberia tener dos equipos', function () {
        var partido = new Partido(new Equipo('Argentina'), new Equipo('Brasil'));

        expect(partido.equipos.length).toBe(2);
        expect(partido.equipos[0].nombre).toBe('Argentina');
        expect(partido.equipos[1].nombre).toBe('Brasil');
    });

});