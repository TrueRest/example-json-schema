(function() {
  'use strict';

  angular
    .module('exampleJsonSchema')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, ngSchemaProvider) {
    $stateProvider
      .state('home', ngSchemaProvider.set({
        url: '/home'
      }));

    $urlRouterProvider.otherwise('/home');
  }

})();
