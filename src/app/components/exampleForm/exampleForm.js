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
      controller: ['ngSchema', 'toastr', exampleForm],
      controllerAs: 'exampleForm',
      bindToController: true,
      transclude: true
    };

    return directive;
  }

  /** @ngInject */
  function exampleForm(ngSchema, toastr) {
    var vm = this;
    ngSchema.extend(vm, vm.ngSchemaId);
    vm.submit = function(){
      var validationObj = {
        'beforeAction' : function(){
          console.log('beforeAction!');
        },
        'validationError' : function(fieldName){
          toastr.error('Error on field ' + fieldName + '! Please check');
        },
        'callback': function(){
          console.log('Callback');
        }
      };

      var request = vm.save(validationObj);

      if(!request){
        return;
      }
      
      request.then(function(data){
        console.log("Sucess!", data);
      });
    }
  }
})();
