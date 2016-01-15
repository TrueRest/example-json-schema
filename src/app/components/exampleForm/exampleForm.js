(function() {
  'use strict';

  angular
    .module('exampleJsonSchema')
    .directive('exampleForm', exampleFormDirective);

  /** @ngInject */
  function exampleFormDirective() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/exampleForm/exampleForm.html',
      scope: {
          ngSchemaId: '='
      },
      controller: exampleForm,
      controllerAs: 'exampleForm',
      bindToController: true,
      transclude: true
    };

    return directive;
  }

  /** @ngInject */
  function exampleForm(ngSchema) {
    var vm = this;
    ngSchema.extend(vm, vm.ngSchemaId);
    console.log(vm);

    vm.submit = function(){
      vm.save({
        'beforeAction' : function(){
          alert('beforeAction!');
        },
        'validationError' : function(fieldName){
          alert('Error on field ' + fieldName + '! Please check');
        },
        'callback': function(){
          alert('Callback');
        }
      });
    }
  }
})();