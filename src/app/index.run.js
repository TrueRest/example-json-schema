(function() {
  'use strict';

  angular
    .module('exampleJsonSchema')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
