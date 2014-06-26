angular.module('jsmnApp')

.directive('jsmnIsolateState', function($rootScope, $state) {
  return {
    link: function(scope, element, attrs) {

      var view = element;
      while (view.attr('ui-view') === void(0) && view[0].tagName !== 'UI-VIEW') {
        view = view.parent();
      }

      var state = view.data('$uiView').state;

      var hidden = true;
      var depth = attrs.jsmnIsolateScope || 0;

      function update() {
        if (
          $rootScope.breakpoint < $rootScope.breakpoints.sm
          &&
          $state.current.name !== state.name
        ) {
          element[0].style.display = 'none';
        } else {
          element[0].style.display = 'block';
        }
      }

      update();

      var offState = $rootScope.$on('$stateChangeSuccess', update);
      var offBreak = $rootScope.$on('breakpoint', update);

      element.on('$destroy', offState);
      element.on('$destroy', offBreak);
    }
  };
});
