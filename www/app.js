angular.module('jsmnApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'main.tpl.html',
    controller: function($rootScope) {
      $rootScope.mobileTitle = 'JSMN App';
    },
  });

});
