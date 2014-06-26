angular.module('jsmnApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('');

  $stateProvider.state('main', {
    url: '',
    templateUrl: 'main.tpl.html',
    controller: function($rootScope, $state) {
      $rootScope.parentState = function() {
        var name = $state.current.name;
        if (!name.match('.')) {
          return;
        }

        name = name.split('.');
        name.pop();
        return name.join('.');
      };

      $rootScope.goToParent = function() {
        $state.go($rootScope.parentState(), {}, { reload: true });
      };

      $rootScope.mobileTitle = 'JSMN App';
    },
  });

  $stateProvider.state('main.section', {
    url: '/:section',
    templateUrl: 'section.tpl.html',
    controller: function($rootScope, $stateParams, songData) {
      $rootScope.mobileTitle = $stateParams.section === 'artists' ? 'Artists' : 'Albums';
      $rootScope.categories = songData[$stateParams.section];
    },
  });

  $stateProvider.state('main.section.category', {
    url: '/:category',
    templateUrl: 'category.tpl.html',
    controller: function($rootScope, $stateParams, songData) {
      var category = songData[$stateParams.section]
        .filter(function(category) {
          return category.key === $stateParams.category;
        })[0]
      ;

      $rootScope.mobileTitle = category.name;

      $rootScope.songs = category.songs;
    },
  });

  $stateProvider.state('main.section.category.song', {
    url: '/:song',
    templateUrl: 'song.tpl.html',
    controller: function($rootScope, $stateParams, songData, $sce) {
      var song = songData[$stateParams.section]
        .filter(function(category) {
          return category.key === $stateParams.category;
        })[0].songs
        .filter(function(song) {
          return song.key === $stateParams.song;
        })[0]
      ;

      $rootScope.mobileTitle = song.name;

      $rootScope.lyrics = $sce.trustAsHtml(song.lyrics);
    },
  });

});
