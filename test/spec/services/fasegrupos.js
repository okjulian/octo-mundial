'use strict';

describe('Service: FaseGrupos', function () {

    // load the service's module
    beforeEach(module('copaApp', function ($provide) {
        GrupoMock = jasmine.createSpy('Grupo');
        $provide.value('Grupo', GrupoMock);
    }));

    // instantiate service
    var FaseGrupos,
        GrupoMock;
    
    beforeEach(inject(function (_FaseGrupos_) {
        FaseGrupos = _FaseGrupos_;
    }));

    describe('Grupo A', function () {
        it('deberia tener los equipos correctos', function () {
            expect(FaseGrupos.grupos.A).toBeDefined();
            expect(GrupoMock).toHaveBeenCalledWith('Brasil', 'Croacia', 'México', 'Camerún');
        });
    });

    describe('Grupo B', function () {
        it('deberia tener los equipos correctos', function () {
            expect(FaseGrupos.grupos.B).toBeDefined();
            expect(GrupoMock).toHaveBeenCalledWith('España', 'Holanda', 'Chile', 'Australia');
        });
    });

    describe('Grupo C', function () {
        it('deberia tener los equipos correctos', function () {
            expect(FaseGrupos.grupos.C).toBeDefined();
            expect(GrupoMock).toHaveBeenCalledWith('Colombia', 'Grecia', 'Costa de Marfil', 'Japón');
        });
    });

    describe('Grupo D', function () {
        it('deberia tener los equipos correctos', function () {
            expect(FaseGrupos.grupos.D).toBeDefined();
            expect(GrupoMock).toHaveBeenCalledWith('Uruguay', 'Costa Rica', 'Inglaterra', 'Italia');
        });
    });

    describe('Grupo E', function () {
        it('deberia tener los equipos correctos', function () {
            expect(FaseGrupos.grupos.E).toBeDefined();
            expect(GrupoMock).toHaveBeenCalledWith('Suiza', 'Ecuador', 'Francia', 'Honduras');
        });
    });

    describe('Grupo F', function () {
        it('deberia tener los equipos correctos', function () {
            expect(FaseGrupos.grupos.F).toBeDefined();
            expect(GrupoMock).toHaveBeenCalledWith('Argentina', 'Bosnia', 'Irán', 'Nigeria');
        });
    });

    describe('Grupo G', function () {
        it('deberia tener los equipos correctos', function () {
            expect(FaseGrupos.grupos.G).toBeDefined();
            expect(GrupoMock).toHaveBeenCalledWith('Alemania', 'Portugal', 'Ghana', 'USA');
        });
    });

    describe('Grupo H', function () {
        it('deberia tener los equipos correctos', function () {
            expect(FaseGrupos.grupos.H).toBeDefined();
            expect(GrupoMock).toHaveBeenCalledWith('Bélgica', 'Algeria', 'Rusia', 'Corea');
        });
    });

});