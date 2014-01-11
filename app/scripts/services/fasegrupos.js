'use strict';

angular.module('copaApp')
    .service('FaseGrupos', function Fasegrupos(Grupo) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.grupos = {
            A: new Grupo('Brasil', 'Croacia', 'México', 'Camerún')
        };
    });