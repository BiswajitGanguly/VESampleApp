'use strict';

/**
 * @ngdoc function
 * @name vesampleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vesampleAppApp
 */
angular.module('vesampleAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
