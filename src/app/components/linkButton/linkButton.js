(function() {
  'use strict';

  angular
    .module('exampleJsonSchema')
    .directive('linkButton', linkButtonDirective);

  /** @ngInject */
  function linkButtonDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/linkButton/linkButton.html',
      scope: {
          ngSchemaId: '='
      },
      controller: linkButton,
      controllerAs: 'linkButton',
      bindToController: true,
      transclude: true
    };

    return directive;
  }

  /** @ngInject */
  function linkButton(ngSchema) {
    var vm = this;
    ngSchema.extend(vm, vm.ngSchemaId);
  }
})();