var pfc = angular.module('pfc', []);

////////////////// Global Application //////////////////
pfc.controller('body', function ($scope) {
  
  $scope.checkup = {
    salary: null,
  };

});

// Credit: http://stackoverflow.com/a/19890485
pfc.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;


            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });


            ctrl.$parsers.unshift(function (viewValue) {
                var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
                return plainNumber;
            });
        }
    };
}]);