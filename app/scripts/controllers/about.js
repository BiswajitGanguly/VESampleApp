'use strict';

/**
 * @ngdoc function
 * @name vesampleAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vesampleAppApp
 */
angular.module('vesampleAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
