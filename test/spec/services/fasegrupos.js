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
        it('deberia tener a Brasil, Croacia, Mexico y Camerún', function () {
            expect(FaseGrupos.grupos.A).toBeDefined();
            expect(GrupoMock).toHaveBeenCalledWith('Brasil', 'Croacia', 'México', 'Camerún');
        });
    });

});