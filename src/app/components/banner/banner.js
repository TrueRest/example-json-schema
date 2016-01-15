(function() {
  'use strict';

  angular
    .module('exampleJsonSchema')
    .directive('banner', bannerDirective);

  /** @ngInject */
  function bannerDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/banner/banner.html',
      scope: {
          ngSchemaId: '='
      },
      controller: banner,
      controllerAs: 'banner',
      bindToController: true,
      transclude: true
    };

    return directive;
  }

  /** @ngInject */
  function banner(ngSchema) {
    var vm = this;
    ngSchema.extend(vm, vm.ngSchemaId);
  }
})();