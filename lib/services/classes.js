// Generated by CoffeeScript 1.6.3
var ClassesService;

ClassesService = (function() {
  function ClassesService(store) {
    this.store = store;
  }

  return ClassesService;

})();

angular.module('ClassesService', ['Store']).factory('classesService', function(store) {
  return new ClassesService(store);
});
