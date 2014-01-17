'use strict';

angular.module('copaApp')
    .service('FaseGrupos', function Fasegrupos(Grupo) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.grupos = {
            A: new Grupo('A', ['Brasil', 'Croacia', 'México', 'Camerún']),
            B: new Grupo('B', ['España', 'Holanda', 'Chile', 'Australia']),
            C: new Grupo('C', ['Colombia', 'Grecia', 'Costa de Marfil', 'Japón']),
            D: new Grupo('D', ['Uruguay', 'Costa Rica', 'Inglaterra', 'Italia']),
            E: new Grupo('E', ['Suiza', 'Ecuador', 'Francia', 'Honduras']),
            F: new Grupo('F', ['Argentina', 'Bosnia', 'Irán', 'Nigeria']),
            G: new Grupo('G', ['Alemania', 'Portugal', 'Ghana', 'USA']),
            H: new Grupo('H', ['Bélgica', 'Algeria', 'Rusia', 'Corea'])
        };

        this.actualizarGanadores = function () {
          for (var prop in this.grupos) {
            if (this.grupos.hasOwnProperty(prop)) {
              this.grupos[prop].calcularGanadores();
            }
          }
        };

        this.autoCompletar = function () {
          for(var prop in this.grupos) {
            if (this.grupos.hasOwnProperty(prop)) {
              this.grupos[prop].autoCompletar();
            }
          }
        };
    });
