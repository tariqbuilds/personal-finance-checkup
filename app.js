var pfc = angular.module('pfc', []);

////////////////// Global Application //////////////////
pfc.controller('body', function ($scope) {
  
  $scope.info = {
    age: 30,
    retirement_401k: {
      principle: 0,
      company_match: 6,
    },
    loans: [
    ],
    salary: 100,
    savings_account: 5,
    emergency_account: 0,
    ira: 5
  };

  $scope.threeMonthsSalary = function () {
    return ($scope.info.salary / 12) * 3;
  };

  $scope.addALoan = function () {
    var loanNumber = $scope.info.loans.length + 1;

    $scope.info.loans.push({
        name: 'Loan #' + loanNumber,
        interest_rate: 4.2,
        principle: 1000,
    });
  };

  $scope.getTotalLoans = function () {
    return $scope.info.loans.reduce(function (a, b) {
      return a + b.principle;
    }, 0);
  };

  $scope.removeLoanAt = function (index) {
    $scope.info.loans.splice(index, 1);
  };

  $scope.generateAlerts = function () {
    
  };

});

// Credit: http://stackoverflow.com/a/19890485
// pfc.directive('format', ['$filter', function ($filter) {
//     return {
//         require: '?ngModel',
//         link: function (scope, elem, attrs, ctrl) {
//             if (!ctrl) return;

//             ctrl.$formatters.unshift(function (a) {
//                 return $filter(attrs.format)(ctrl.$modelValue)
//             });

//             ctrl.$parsers.unshift(function (viewValue) {
//                 var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
//                 elem.val($filter(attrs.format)(plainNumber));
//                 return plainNumber;
//             });
//         }
//     };
// }]);

pfc.directive('infoForm', ['$filter', function ($filter) {
    return {
        restrict: 'E',
        templateUrl: 'templates/info-form.html',
        link: function (scope, elem, attrs) {

        }
    };
}]);