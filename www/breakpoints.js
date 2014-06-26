(function() {


  var breakpoints = {
    'lg': Infinity,
    'md': 1199,
    'sm': 991,
    'xs': 767,
  };



  var values = Object
    .keys(breakpoints)
    .map(function(key) {
      return [key, breakpoints[key]];
    })
    .sort(function(a,b) {
      return a[1] - b[1];
    });

  // values = [ ['xs', 767], ['sm', 991], ['md', 1199], ['lg', Infinity] ]

  function getBreakpointFromSize(width) {
    for (var i in values) {
      if (width < values[i][1]) {
        return values[i][0];
      }
    }

    return values[values.length - 1][0];
  }

  // getBreakpointFromSize(1000) => 'md'

  angular.module('jsmnApp').run(function($rootScope) {

    $rootScope.breakpoints = {};

    var index = 0;
    values.forEach(function(value) {
      $rootScope.breakpoints[value[0]] = index;
      $rootScope.breakpoints[index] = value[0];
      ++index;
    });

    // $rootScope.breakpoints = {
    //   0  : 'xs',
    //   1  : 'sm',
    //   2  : 'md',
    //   3  : 'lg',
    //   xs : 0,
    //   sm : 1,
    //   md : 2,
    //   lg : 3,
    // }

    $rootScope.breakpoint = $rootScope.breakpoints[
      getBreakpointFromSize(window.innerWidth)
    ];

    window.addEventListener('resize', function() {
      var newSize = $rootScope.breakpoints[
        getBreakpointFromSize(window.innerWidth)
      ];

      var oldSize = $rootScope.breakpoint;

      if (oldSize === newSize) {
        return;
      }

      $rootScope.breakpoint = newSize;
      $rootScope.$digest();
      $rootScope.$broadcast('breakpoint', newSize, oldSize);

    });
  })
})();
