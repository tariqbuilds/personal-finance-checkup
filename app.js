var pfc = angular.module('pfc', []);

////////////////// Global Application //////////////////
pfc.controller('body', function ($scope) {
  
  $scope.info = {
    // age: 30,
    retirement_401k: {
      principle: 0,
      company_match: 0,
    },
    loans: [
    ],
    // salary: 0,
    savings_account: 0,
    emergency_account: 0,
    ira: 0
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

  $scope.hasLoansBelowMarketRate = function () {
    return $scope.info.loans.filter(function (loan) {
      return loan.interest_rate < 5;
    }).length;
  };

});