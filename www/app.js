angular.module('jsmnApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('');

  $stateProvider.state('main', {
    url: '',
    templateUrl: 'main.tpl.html',
    controller: function($rootScope) {
      $rootScope.mobileTitle = 'JSMN App';
    },
  });

  $stateProvider.state('main.section', {
    url: '/:section',
    templateUrl: 'section.tpl.html',
    controller: function($rootScope, $stateParams, songData) {
      $rootScope.mobileTitle = 'JSMN App';
      $rootScope.categories = songData[$stateParams.section];
    },
  });

  $stateProvider.state('main.section.category', {
    url: '/:category',
    templateUrl: 'category.tpl.html',
    controller: function($rootScope, $stateParams, songData) {
      $rootScope.mobileTitle = 'JSMN App';
      var category = songData[$stateParams.section]
        .filter(function(category) {
          return category.key === $stateParams.category;
        })[0]
      ;

      $rootScope.songs = category.songs;
    },
  });

  $stateProvider.state('main.section.category.song', {
    url: '/:song',
    templateUrl: 'song.tpl.html',
    controller: function($rootScope, $stateParams, songData, $sce) {
      $rootScope.mobileTitle = 'JSMN App';
      var song = songData[$stateParams.section]
        .filter(function(category) {
          return category.key === $stateParams.category;
        })[0].songs
        .filter(function(song) {
          return song.key === $stateParams.song;
        })[0]
      ;

      $rootScope.lyrics = $sce.trustAsHtml(song.lyrics);
    },
  });

});
