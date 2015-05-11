var pfc = angular.module('pfc', []);

////////////////// Global Application //////////////////
pfc.controller('body', function ($scope) {
  
  $scope.info = {
    age: 30,
    salary: 0,
    emergency_account: 0,
    savings_account: 0,
    retirement_401k: 0,
    ira: 0,
    taxable_investments: 0,
    loans: [
    ]
  };

  $scope.addALoan = function () {
    var loanNumber = $scope.info.loans.length + 1;

    $scope.info.loans.push({
        name: 'Loan #' + loanNumber,
        interest_rate: 4.2,
        principle: 0,
    });
  };

  $scope.removeLoanAt = function (index) {
    $scope.info.loans.splice(index, 1);
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

pfc.directive('infoForm', ['$filter', function ($filter) {
    return {
        restrict: 'E',
        templateUrl: 'templates/info-form.html',
        link: function (scope, elem, attrs) {

        }
    };
}]);