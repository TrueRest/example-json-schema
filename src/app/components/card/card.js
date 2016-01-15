(function() {
  'use strict';

  angular
    .module('exampleJsonSchema')
    .directive('card', cardDirective);

  /** @ngInject */
  function cardDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/card/card.html',
      scope: {
          ngSchemaId: '='
      },
      controller: card,
      controllerAs: 'card',
      bindToController: true,
      transclude: true
    };

    return directive;
  }

  /** @ngInject */
  function card(ngSchema) {
    var vm = this;
    ngSchema.extend(vm, vm.ngSchemaId);
  }
})();