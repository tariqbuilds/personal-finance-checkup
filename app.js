angular
  .module('pfc', [])
  .controller('mainController', function mainController () {
    
    var vm = this;

    vm.info = {
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

    vm.threeMonthsSalary = function () {
      return (vm.info.salary / 12) * 3;
    };

    vm.addALoan = function () {
      var loanNumber = vm.info.loans.length + 1;

      vm.info.loans.push({
          name: 'Loan #' + loanNumber,
          interest_rate: 4.2,
          principle: 1000,
      });
    };

    vm.getTotalLoans = function () {
      return vm.info.loans.reduce(function (a, b) {
        return a + b.principle;
      }, 0);
    };

    vm.removeLoanAt = function (index) {
      vm.info.loans.splice(index, 1);
    };

    vm.hasLoansBelowMarketRate = function () {
      return vm.info.loans.filter(function (loan) {
        return loan.interest_rate < 5;
      }).length;
    };

  });
