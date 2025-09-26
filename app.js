angular.module('registrationApp', [])
.controller('RegistrationController', function($scope) {
    $scope.user = {};

    $scope.register = function() {
        if ($scope.regForm.$valid && $scope.user.password === $scope.user.confirmPassword) {
            alert('Registration successful!\n' + JSON.stringify($scope.user));
        } else {
            alert('Form is invalid!');
        }
    };
});
