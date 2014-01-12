'use strict';

angular.module('copaApp')
    .service('FaseGrupos', function Fasegrupos(Grupo) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.grupos = {
            A: new Grupo('Brasil', 'Croacia', 'México', 'Camerún'),
            B: new Grupo('España', 'Holanda', 'Chile', 'Australia'),
            C: new Grupo('Colombia', 'Grecia', 'Costa de Marfil', 'Japón'),
            D: new Grupo('Uruguay', 'Costa Rica', 'Inglaterra', 'Italia'),
            E: new Grupo('Suiza', 'Ecuador', 'Francia', 'Honduras'),
            F: new Grupo('Argentina', 'Bosnia', 'Irán', 'Nigeria'),
            G: new Grupo('Alemania', 'Portugal', 'Ghana', 'USA'),
            H: new Grupo('Bélgica', 'Algeria', 'Rusia', 'Corea')
        };
    });