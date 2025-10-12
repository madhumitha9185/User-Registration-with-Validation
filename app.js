var app = angular.module("userApp", []);

app.controller("userCtrl", function($scope) {
  $scope.user = {};
  $scope.users = [];
  $scope.successMessage = "";

  $scope.submitForm = function() {
    if ($scope.user.password === $scope.user.confirmPassword) {
      // Save user info (name & email only)
      $scope.users.push({
        name: $scope.user.name,
        email: $scope.user.email
      });

      console.log("User Registered Successfully");
      console.log($scope.user);

      $scope.successMessage = "User Registered Successfully!";
      $scope.user = {};
      $scope.regForm.$setPristine();
      $scope.regForm.$setUntouched();
    } else {
      alert("Passwords do not match!");
    }
  };
});
